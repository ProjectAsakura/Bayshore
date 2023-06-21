{
    description = "Wangan Midnight Maximum Tune 6 private server";

    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils }:
        let
            packages = flake-utils.lib.eachDefaultSystem (system:
                let
                    pkgs = nixpkgs.legacyPackages."${system}";

                    inputs = with pkgs; [ pkg-config python3 ];

                    # This likely sucks ass
                    # https://github.com/prisma/prisma/issues/3026
                    prismaHook = with pkgs; ''
                    export PRISMA_MIGRATION_ENGINE_BINARY="${prisma-engines}/bin/migration-engine"
                    export PRISMA_QUERY_ENGINE_BINARY="${prisma-engines}/bin/query-engine"
                    export PRISMA_QUERY_ENGINE_LIBRARY="${prisma-engines}/lib/libquery_engine.node"
                    export PRISMA_INTROSPECTION_ENGINE_BINARY="${prisma-engines}/bin/introspection-engine"
                    export PRISMA_FMT_BINARY="${prisma-engines}/bin/prisma-fmt"
                    '';
                in rec {
                    packages.bayshore = pkgs.buildNpmPackage {
                        pname = "bayshore";
                        version = "1.0.0";
                        src = ./.;
                        npmDepsHash = lib.fakeSha256;

                        nativeBuildInputs = inputs;
                        buildInputs = inputs;

                        preBuild = ''
                            ${prismaHook}

                            # Generate the Prisma client - without this the build'll fail
                            npm run prisma-generate
                        '';

                        installPhase = ''
                            runHook preInstall

                            mkdir -p $out
                            cp -r prisma $out/prisma

                            mkdir -p $out/bin
                            cat > $out/bin/bayshore <<EOF
                            #!${pkgs.stdenv.shell}
                            ${prismaHook}
                            ${pkgs.nodejs}/bin/node $out/dist/index.js \$@
                            EOF
                            chmod +x $out/bin/bayshore

                            cat > $out/bin/prisma <<EOF
                            #!${pkgs.stdenv.shell}
                            ${prismaHook}

                            ${pkgs.nodePackages.prisma}/bin/prisma \$@
                            EOF
                            chmod +x $out/bin/prisma

                            runHook postInstall
                        '';

                        meta = with pkgs.lib; {
                            description = "Wangan Midnight Maximum Tune 6 private server";
                            homepage = "https://github.com/ProjectAsakura/Bayshore";
                            license = licenses.agpl3Only;
                        };

                        apps.bayshore = flake-utils.lib.mkApp {
                            name = "bayshore";
                            drv = packages.bayshore;
                        };

                        # We don't need a
                    };
                }
            );
        in packages // {
            nixosModule = { config, lib, pkgs, ... }:
                with lib;
                let
                    cfg = config.services.bayshore;
                    pkg = self.packages.${pkgs.system}.bayshore;
                in {
                    options.services.bayshore = {
                        enable = mkEnableOption "bayshore";

                        postgresUrl = mkOption {
                            type = types.str;
                            default = "postgres://bayshore:password@localhost:5432/bayshore";
                        };

                        # Yes, not exposing the config as options is ~cringe~. However, I'm cringe but I'm free.
                        configFile = mkOption {
                            type = types.str;
                            default = "/var/lib/bayshore/config.json";
                        };
                    };

                    config = mkIf cfg.enable {
                        systemd.services.bayshore = {
                            description = "Wangan Midnight Maximum Tune 6 private server";
                            wantedBy = ["multi-user.target"];
                            # We need to wait for PSQL to be up before starting!
                            after = ["network.target" "postgres.target"];

                            preStart = ''
                            export DATABASE_URL="${cfg.postgresUrl}"
                            ${pkg}/bin/prisma migrate deploy --schema=${pkg}/prisma/schema.prisma
                            '';

                            script = ''
                            # I don't think Bayshore actually uses this var but
                            # it's good practice to set it anyway so I'll do it
                            export NODE_ENV=production

                            export DATABASE_URL="${cfg.postgresUrl}"
                            export POSTGRES_URL="${cfg.postgresUrl}"
                            export BAYSHORE_CONFIG_PATH="${cfg.configFile}"

                            # The ports will always be on default
                            # because they're set through env-vars here.
                            #
                            # However, I do not give a shit.

                            ${pkg}/bin/bayshore
                            '';
                        };

                        # Don't create a user - we *want* to run as root
                        # else we won't be able to bind to 80. Could downgrade perms later,
                        # but honestly who cares? I sure don't, at this point. I just wanna get it up.
                    };
                };
        };
}