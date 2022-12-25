import e, { Application } from "express";
import { Module } from "module";
import { Config } from "../config";
import { prisma } from "..";
import path from 'path';
let MersenneTwister = require('chancer');

// Import Proto
import * as wm from "../wmmt/wm.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";


export default class ResourceModule extends Module {
    register(app: Application): void {

        // Place List
        app.get('/resource/place_list', async (req, res) => {

            console.log('place list');

            // Empty list of place records
            let places: wm.wm.protobuf.Place[] = [];

            // Response data
            places.push(new wm.wm.protobuf.Place({
                placeId: Config.getConfig().placeId || 'JPN0123',
                regionId: Number(Config.getConfig().regionId) || 1,
                shopName: Config.getConfig().shopName || 'Bayshore',
                country: Config.getConfig().country || 'JPN'
            }));

            let checkPlaceList = await prisma.placeList.findFirst({
                where:{
                    placeId: Config.getConfig().placeId,
                }
            })

            if(!(checkPlaceList))
            {
                console.log('Creating new Place List entry')

                await prisma.placeList.create({
                    data:{
                        placeId: Config.getConfig().placeId || 'JPN0123',
                        regionId: Number(Config.getConfig().regionId) || 1,
                        shopName: Config.getConfig().shopName || 'Bayshore',
                        country: Config.getConfig().country || 'JPN'
                    }
                })
            }

            // Encode the response
            let message = wm.wm.protobuf.PlaceList.encode({places});

             // Send the response to the client
             common.sendResponse(message, res);
        })

        // Get Ranking data for attract screen (TA, Ghost, VS)
        app.get('/resource/ranking', async (req, res) => {

            console.log('ranking');
            
            // Empty list of all ranking records (Combination of TA, VS Stars, and Ghost Battle Win)
            let lists: wmsrv.wm.protobuf.Ranking.List[] = [];

            // Get TA Ranking
            for(let i=0; i<25; i++){ // GID_TACOURSE ID

                // Get the TA time per course
                let ta_time = await prisma.timeAttackRecord.findMany({ 
                    where: {
                        course: i
                    },
                    orderBy: {
                        time: 'asc'
                    },
                    take: 10,  // Take top 10
                });

                // TA time record by user is available for certain course
                if(ta_time.length > 0){ 

                    // Empty list of ranking records for user time attack
                    let list_ta: wmsrv.wm.protobuf.Ranking.Entry[] = []; 

                    // Get the TA time data
                    for(let j=0; j<ta_time.length; j++){ 

                        // Get the car data
                        let car_ta = await prisma.car.findFirst({ 
                            where: {
                                carId: ta_time[j].carId
                            }
                        });

                        // Push the data to the ranking data
                        list_ta.push(wmsrv.wm.protobuf.Ranking.Entry.create({ 
                            carId: ta_time[j].carId,
                            rank: car_ta!.level,
                            result: ta_time[j].time,
                            name: car_ta!.name,
                            regionId: car_ta!.regionId,
                            model: car_ta!.model,
                            visualModel: car_ta!.visualModel,
                            defaultColor: car_ta!.defaultColor,
                            tunePower: ta_time[j].tunePower, // Set the tunePower used when playing TA
                            tuneHandling: ta_time[j].tuneHandling, // Set the tuneHandling used when playing TA
                            title: car_ta!.title,
                            level: car_ta!.level
                         }));
                    }

                    // If the TA time record by user is less than 10 user
                    if(ta_time.length < 11){ 

                        // Take the remaining unfilled
                        for(let j=ta_time.length; j<11; j++){ 
                            let resultTime = 599999; // 9:59:999 time

                            // GID_TACOURSE_TOKYOALL & GID_TACOURSE_KANAGAWAALL area
                            if(i === 22 || i === 23){ 
                                resultTime = 1199999; // 19:59:999 time
                            }

                            // Push the data to the ranking data
                            list_ta.push(wmsrv.wm.protobuf.Ranking.Entry.create({ 
                                carId: 0,
                                rank: 0,
                                result: resultTime,
                                name: 'ＧＵＥＳＴ',
                                regionId: 1, // Hokkaido
                                model: MersenneTwister.int(0, 50), // Randomizing ＧＵＥＳＴ Car data
                                visualModel: MersenneTwister.int(0, 100), // Randomizing ＧＵＥＳＴ Car data
                                defaultColor: 0,
                                tunePower: 0,
                                tuneHandling: 0,
                                title: 'Wangan Beginner', // 湾岸の新人
                                level: 0 // N
                            }));
                        }
                    }
    
                    lists.push(new wmsrv.wm.protobuf.Ranking.List({
                        rankingType: i, // RANKING_TA_*AREA*
                        topRecords: list_ta
                    }));
                }
                // There is no user's TA record for certain area
                else{ 

                    // Empty list of ranking records for ＧＵＥＳＴ time attack
                    let list_ta: wmsrv.wm.protobuf.Ranking.Entry[] = []; 

                    // Generate the top 10 ＧＵＥＳＴ TA time data
                    for(let j=0; j<11; j++){ 
                        let resulttime = 599999; // 9:59:999 time

                        // GID_TACOURSE_TOKYOALL & GID_TACOURSE_KANAGAWAALL area
                        if(i === 22 || i === 23){ 
                            resulttime = 1199999 // 19:59:999 time
                        }

                        // Push the ＧＵＥＳＴ data to the ranking data
                        list_ta.push(wmsrv.wm.protobuf.Ranking.Entry.create({ 
                            carId: 0,
                            rank: 0,
                            result: resulttime,
                            name: 'ＧＵＥＳＴ',
                            regionId: 1, // Hokkaido
                            model: MersenneTwister.int(0, 50), // Randomizing ＧＵＥＳＴ Car data
                            visualModel: MersenneTwister.int(0, 100), // Randomizing ＧＵＥＳＴ Car data
                            defaultColor: 0,
                            tunePower: 0,
                            tuneHandling: 0,
                            title: 'Wangan Beginner', // 湾岸の新人
                            level: 0 // N
                        }));
                    }

                    // Push the certain area ranking data to the list
                    lists.push(new wmsrv.wm.protobuf.Ranking.List({ 
                        rankingType: i, // RANKING_TA_*AREA*
                        topRecords: list_ta // Top 10 TA time record data
                    }));
                }
            }


            // Get VS Star Ranking
            // Get the user's VS Stars data
            let car_vs = await prisma.car.findMany({ 
                orderBy: {
					vsStarCount: 'desc'
				},
                take: 20, // Take top 20
            });

            // Empty list of ranking records for VS Stars
            let list_vs: wmsrv.wm.protobuf.Ranking.Entry[] = []; 

            // Get the VS stars data
            for(let i=0; i<car_vs.length; i++){ 

                // Push the car data to the ranking data
                list_vs.push(wmsrv.wm.protobuf.Ranking.Entry.create({ 
                    carId: car_vs[i].carId,
                    rank: car_vs[i].level,
                    result: car_vs[i].vsStarCount,
                    name: car_vs[i].name,
                    regionId: car_vs[i].regionId,
                    model: car_vs[i].model,
                    visualModel: car_vs[i].visualModel,
                    defaultColor: car_vs[i].defaultColor,
                    tunePower: car_vs[i].tunePower,
                    tuneHandling: car_vs[i].tuneHandling,
                    title: car_vs[i].title,
                    level: car_vs[i].level
                 }));
            }

            // If the VS stars record by user is less than 20 user
            if(car_vs.length < 20){ 

                // Take the remaining unfilled
                for(let j=car_vs.length; j<21; j++){ 

                    // Push the ＧＵＥＳＴ data to the ranking data
                    list_vs.push(wmsrv.wm.protobuf.Ranking.Entry.create({ 
                        carId: 0,
                        rank: 0,
                        result: 0,
                        name: 'ＧＵＥＳＴ',
                        regionId: 1, // Hokkaido
                        model: MersenneTwister.int(0, 50), // Randomizing ＧＵＥＳＴ Car data
                        visualModel: MersenneTwister.int(0, 100), // Randomizing ＧＵＥＳＴ Car data
                        defaultColor: 0,
                        tunePower: 0,
                        tuneHandling: 0,
                        title: 'Wangan Beginner', // 湾岸の新人
                        level: 0 // N
                    }));
                }
            }

            // Push the data
            lists.push(new wmsrv.wm.protobuf.Ranking.List({
                rankingType: 100, // RANKING_VS_STAR
                topRecords: list_vs // Top 20 VS stars record data
            }));

            
            // Get Ghost Defeated Ranking
            // Get the user's Ghost Win data
            let car_ghost = await prisma.car.findMany({ 
                orderBy: {
					rgWinCount: 'desc'
				},
                take: 20, // Take top 20
            });

            // Empty list of ranking records for Ghost Battle Win
            let list_ghost: wmsrv.wm.protobuf.Ranking.Entry[] = []; 

            // Get the Ghost Battle Win data
            for(let i=0; i<car_ghost.length; i++){ 

                // Push the car data to the ranking data
                list_ghost.push(wmsrv.wm.protobuf.Ranking.Entry.create({ 
                    carId: car_ghost[i].carId,
                    rank: car_ghost[i].level,
                    result: car_ghost[i].rgWinCount,
                    name: car_ghost[i].name,
                    regionId: car_ghost[i].regionId,
                    model: car_ghost[i].model,
                    visualModel: car_ghost[i].visualModel,
                    defaultColor: car_ghost[i].defaultColor,
                    tunePower: car_ghost[i].tunePower,
                    tuneHandling: car_ghost[i].tuneHandling,
                    title: car_ghost[i].title,
                    level: car_ghost[i].level
                 }));
            }

            // If the Ghost Win record by user is less than 20 user
            if(car_ghost.length < 20){ 

                // Take the remaining unfilled
                for(let j=car_ghost.length; j<21; j++){ 

                    // Push the ＧＵＥＳＴ data to the ranking data
                    list_ghost.push(wmsrv.wm.protobuf.Ranking.Entry.create({ 
                        carId: 0,
                        rank: 0,
                        result: 0,
                        name: 'ＧＵＥＳＴ',
                        regionId: 1, // Hokkaido
                        model: MersenneTwister.int(0, 50), // Randomizing ＧＵＥＳＴ Car data
                        visualModel: MersenneTwister.int(0, 100), // Randomizing ＧＵＥＳＴ Car data
                        defaultColor: 0,
                        tunePower: 0,
                        tuneHandling: 0,
                        title: 'Wangan Beginner', // 湾岸の新人
                        level: 0 // N
                    }));
                }
            }

            // Push the data
            lists.push(new wmsrv.wm.protobuf.Ranking.List({
                rankingType: 101, // RANKING_GHOST_DEFEATED_COUNT
                topRecords: list_ghost // Top 20 Ghost Win record data
            }));
            
            // Encode the response
			let message = wmsrv.wm.protobuf.Ranking.encode({lists});

            // Send the response to the client
            common.sendResponse(message, res);
        })


        // Crown List for attract screen and Crown Ghost Battle mode
        app.get('/resource/crown_list', async (req, res) => {

            console.log('crown_list');

            // Empty list of crown records
            let list_crown: wmsrv.wm.protobuf.Crown[] = []; 

            // Get the crown holder data
            let car_crown = await prisma.carCrown.findMany({ 
                orderBy: {
                    area: 'asc'
                },
                distinct: ['area']
            });
            
            // Crown holder data available
            if(car_crown.length !== 0)
            { 
                let counter = 0;  

                // Loop GID_RUNAREA
                for(let i=0; i<19; i++)
                { 
                    // After Kobe is Hiroshima then Fukuoka and the rest
                    if(i > 14)
                    { 
                        i = 18; // GID_RUNAREA_HIROSHIMA
                    }

                    // Crown holder for certain area available
                    if(car_crown[counter].area === i)
                    { 
                        // Get user's data
                        let car = await prisma.car.findFirst({
                            where: {
                                carId: car_crown[counter].carId
                            },
                            include: {
                                gtWing: true,
                                lastPlayedPlace: true
                            }
                        });

                        // Set the tunePower and tuneHandling used when capturing ghost crown
                        car!.tunePower = car_crown[counter].tunePower; 
                        car!.tuneHandling = car_crown[counter].tuneHandling; 

                        // Error handling if played At timestamp value is current date and timestamp is bigger than 9 July 2022 (using GMT+7 timestamp)
                        if(car_crown[counter].playedAt !== 0 && car_crown[counter].playedAt >= 1657299600)
                        {
                            // Acquired crown timestamp - 1 day
                            car!.lastPlayedAt = car_crown[counter].playedAt - 172800;

                            // Acquired crown timestamp - 1 day
                            car_crown[counter].playedAt = car_crown[counter].playedAt - 172800;
                        }
                        // Error handling if played At timestamp value is 0 or timestamp is less than 9 July 2022 (using GMT+7 timestamp)
                        else if(car_crown[counter].playedAt === 0 || car_crown[counter].playedAt < 1657299600)
                        {
                            // Acquired crown timestamp become 9 July 2022 (using GMT+7 timestamp)
                            car!.lastPlayedAt = 1657299600;

                            // Acquired crown timestamp become 9 July 2022 (using GMT+7 timestamp)
                            car_crown[counter].playedAt = 1657299600;
                        }

                        // Push the car data to the crown holder data
                        // GID_RUNAREA_HIROSHIMA
                        if(car_crown[counter].area === 18)
                        {
                            let listCrown = wmsrv.wm.protobuf.Crown.create({  
                                carId: car_crown[counter].carId,
                                area: car_crown[counter].area,
                                unlockAt: car_crown[counter].playedAt,
                                car: car!
                            });

                            list_crown.splice(11, 0, listCrown);
                        }
                        // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE
                        else
                        {
                            list_crown.push(wmsrv.wm.protobuf.Crown.create({  
                                carId: car_crown[counter].carId,
                                area: car_crown[counter].area,
                                unlockAt: car_crown[counter].playedAt,
                                car: car!
                            }));
                        }
                        

                        if(counter < car_crown.length-1)
                        {
                            counter++;
                        }
                    }
                    // Crown holder for certain area not available
                    else
                    { 
                        // Push the default data by the game to the crown holder data
                        // GID_RUNAREA_HIROSHIMA
                        if(i === 18)
                        {
                            let listCrown = wmsrv.wm.protobuf.Crown.create({  
                                carId: 999999999-i,
                                area: i,
                                unlockAt: 0,
                            });

                            list_crown.splice(11, 0, listCrown);
                        }
                        // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE
                        else
                        {
                            list_crown.push(wmsrv.wm.protobuf.Crown.create({ 
                                carId: 999999999-i,
                                area: i,
                                unlockAt: 0,
                            }));
                        }
                    }
                }
            }
            // There is no user's crown holder data available
            else
            {
                // Loop GID_RUNAREA
                for(let i=0; i<19; i++)
                { 
                    // After Kobe is Hiroshima then Fukuoka and the rest
                    if(i > 14)
                    { 
                        i = 18; // GID_RUNAREA_HIROSHIMA
                    }

                    // Push the default data by the game to the crown holder data
                    // GID_RUNAREA_HIROSHIMA
                    if(i === 18)
                    {
                        let listCrown = wmsrv.wm.protobuf.Crown.create({  
                            carId: 999999999-i,
                            area: i,
                            unlockAt: 0,
                        });

                        // Push it after Kobe
                        list_crown.splice(11, 0, listCrown);
                    }
                    // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE
                    else
                    {
                        list_crown.push(wmsrv.wm.protobuf.Crown.create({ 
                            carId: 999999999-i,
                            area: i,
                            unlockAt: 0,
                        }));
                    }
                }
            }  

            // Response data
            let msg = {
                crowns: list_crown
            };

            // Encode the response
            let message = wmsrv.wm.protobuf.CrownList.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
        })

        app.use("/static", e.static(
            path.join(__dirname, '..', '..', 'static'), 
            { cacheControl: false }
        ));


        app.get('/resource/file_list', async (req, res) => {

            console.log('file_list');

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots
            let files: wm.wm.protobuf.FileList.FileInfo[] = [];

            files.push(wm.wm.protobuf.FileList.FileInfo.create({
                fileId: 1,
                fileType: wm.wm.protobuf.FileType.FILE_PROMOTION_ANNOUNCEMENT,
                fileSize: 383791,
                url: 'https://'+Config.getConfig().serverIp+':9002/static/000002-bayshore.bin',
                sha1sum: Buffer.from('F1A1AF6F7273F2BA5189CDB15165028B56E022E6', "hex"),
                notBefore: 0,
                notAfter: 2147483647,
            }));

			// Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                files: files,
                interval: 2
			}

			// Encode the response
			let message = wm.wm.protobuf.FileList.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})

        
        app.get('/resource/ghost_list', async (req, res) => {

            console.log('ghost_list');

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots

			// Response data
            let msg = {
				error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
                ghosts: null
			};

            // Encode the response
			let message = wmsrv.wm.protobuf.GhostList.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})
    }
}