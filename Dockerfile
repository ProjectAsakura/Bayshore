FROM node:18-alpine AS base
FROM base AS builder

WORKDIR /server

# Copy the entire app source tree
COPY package.json package-lock.json tsconfig.json tsconfig.proto.json .npmrc ./
COPY src ./src
COPY prisma ./prisma

RUN npm ci

# Compile the application source code
RUN npm run build

FROM base AS runner

# Install OS dependencies
RUN apk add --no-cache openssl

WORKDIR /home/node

# This ensures we only install production dependencies, without the installing the build tools such as tsc, ts-node, etc
ENV NODE_ENV=production

COPY package.json package-lock.json .npmrc ./
COPY prisma ./prisma

# This subshell avoids the need of downloading an unnecessary json parser such as jq
# This also ensures we always get the currently used version of prisma, coming directly from the lock file
# This will be accurate no matter how many times we update the package-lock.json file
RUN npm ci && \
    npm i -g prisma@$(node -e 'console.log(require("./package-lock.json").packages["node_modules/prisma"].version)') && \
    prisma generate

# Also, good job prisma for bringing a cringe build step in the middle of the runner stage
# prisma will not be uninstalled, in case we need to run `prisma migrate deploy` from within the container

# Finally copy dist files into the runner stage
COPY --from=builder /server/dist /home/node/dist

# Copy game configuration file and certificate
COPY server_wangan.key server_wangan.crt ./

VOLUME [ "/home/node/config.json" ]

# This ensures that the final dist files are readonly to this node user when running the application.
USER node

# Entrypoint
CMD ["node", "dist"]

# ALLnet
EXPOSE 80
# Mucha
EXPOSE 10082
# Service
EXPOSE 9002