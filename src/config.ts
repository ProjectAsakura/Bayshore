import fs from 'fs';

export interface ConfigFile {
    shopName: string;
    shopNickname: string;
    regionName: string;
    serverIp?: string;
    gameOptions: GameOptions;
    unix?: UnixOptions;
    notices?: string[];
    sentryDsn?: string;
}

export interface UnixOptions {
    setuid: number;
    setgid: number;
}

export interface GameOptions {
    // If set to 1, all scratch rewards will be granted to players (including cars)
	grantAllScratchRewards: number;

    // If set to 1, gives the player a random colour for each of the special cars.
    // If set to 2, allows the player to pick any of the colours (more cluttered)
	grantBonusScratchCars: number;

    // If set to 1, all gift cars (i.e. S2000, S660, etc. will be fully tuned.)
    // If set to 0, they will be left at their default tune (i.e. stock, basic tune, etc.)
    giftCarsFullyTuned: number, 

    // Amount of full-tunes to grant to newly registered cards
    grantFullTuneTicketToNewUsers: number;
}

export class Config {
    private static cfg: ConfigFile;

    static load() {
        console.log('Loading config file...');
        let cfg = fs.readFileSync('./config.json', 'utf-8');
        let json = JSON.parse(cfg);
        this.cfg = json as ConfigFile;
    }

    static getConfig(): ConfigFile {
        if (!this.cfg)
            this.load();
        
        return this.cfg;
    }
}