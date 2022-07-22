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

    // If set to 1, gives the player a random colour for each of the special cars.
    // If set to 2, allows the player to pick any of the colours (more cluttered)
	grantBonusScratchCars: number;

    // If set to 1, all gift cars (i.e. S2000, S660, etc. will be fully tuned.)
    // If set to 0, they will be left at their default tune (i.e. stock, basic tune, etc.)
    giftCarsFullyTuned: number;
    
    // If set to 1, the scratch game will be enabled and the player 
    // will be allowed to scratch boxes once every day. If this is 
    // set to 0, the scratch sheet will always be unavailable, 
    // however previously recieved items (or items provided by 
    // grantAllScratchRewards) will still be available. If the 
    // value is set to 2, there will be no limits on the number 
    // of times the player can scratch daily.
    scratchEnabled: number;
    
    // If set to 0, the standard scratch sheets (Same as the actual game)
    // will be available in order, e.g. R2, Corolla, and so on. 
    
    // If it is set to 1, random scratch sheets will be generated 
    // (with 1 scratch car, 25 window stickers, and 24 versus markers infinitely.)

    // OPTION 1 IS IN PROGRESS! PLEASE USE OPTION 2 FOR NOW!
    scratchType: number;

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