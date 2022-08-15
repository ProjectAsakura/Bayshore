import { Application } from "express";
import {Module} from "module";
import { Config } from "../config";
import { prisma } from "..";

// Import Proto
import * as wm from "../wmmt/wm.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";


export default class StartupModule extends Module {
    register(app: Application): void {

        // Register system info upon booting
        app.post('/method/register_system_info', async (req, res) => {

            // Get the request body for the load stamp target request
            let body = wm.wm.protobuf.RegisterSystemInfoRequest.decode(req.body);

            // Get current date
            let date = Math.floor(new Date().getTime() / 1000);

            // Get current active OCM Event
            let ocmEventDate = await prisma.oCMEvent.findFirst({
                where: {
                    OR: [
                        {
							// qualifyingPeriodStartAt is less than current date
							qualifyingPeriodStartAt: { lte: date },

							// qualifyingPeriodCloseAt is greater than current date
							qualifyingPeriodCloseAt: { gte: date },
						},
						{ 
							// competitionStartAt is less than current date
							competitionStartAt: { lte: date },

							// competitionCloseAt is greater than current date
							competitionCloseAt: { gte: date },
						},
                        {
							// competitionCloseAt is less than current date 
							competitionCloseAt: { lte: date },

							// competitionEndAt is greater than current date
							competitionEndAt: {gte: date },
						}
                    ],
                },
                orderBy:{
                    dbId: 'desc'
                }
            });

            // Declare GhostCompetitionSchedule
            let compeSch; 
            if(ocmEventDate){
                // Creating GhostCompetitionSchedule
                compeSch = wm.wm.protobuf.GhostCompetitionSchedule.create({ 

                    // OCM Competition ID (1 = C1 (Round 16), 4 = Nagoya (Round 19), 8 = Hiroshima (Round 21))
                    competitionId: ocmEventDate.competitionId,

                    // OCM Qualifying Start Timestamp
                    qualifyingPeriodStartAt: ocmEventDate.qualifyingPeriodStartAt, 

                     // OCM Qualifying Close Timestamp
                    qualifyingPeriodCloseAt: ocmEventDate.qualifyingPeriodCloseAt,

                    // OCM Competition (Main Draw) Start Timestamp
                    competitionStartAt: ocmEventDate.competitionStartAt, 

                    // OCM Competition (Main Draw) Close Timestamp
                    competitionCloseAt: ocmEventDate.competitionCloseAt, 

                    // OCM Competition (Main Draw) End Timestamp
                    competitionEndAt: ocmEventDate.competitionEndAt, 

                    // idk what this is
                    lengthOfPeriod: ocmEventDate.lengthOfPeriod, 

                    // idk what this is
                    lengthOfInterval: ocmEventDate.lengthOfInterval, 

                    // Area for the event (GID_RUNAREA_*, 8 is GID_RUNAREA_NAGOYA)
                    area: ocmEventDate.area, 

                    // idk what this is
                    minigamePatternId: ocmEventDate.minigamePatternId 
                });
            }
            
            // Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                regionId: body.allnetRegion0,
                placeId: body.regionName0,
                allowedClientLogTypes: [],
                ghostSelectionMinRedoWait: 30,
                ghostSelectionMaxRedoWait: 4000,
                featureVersion: {
                    version: 9,
                    year: 2022,
                    month: 7,
                    pluses: 0,
                    releaseAt: 0 // idk what this is
                },
                competitionSchedule: compeSch || null // OCM Event Available or not
            }

            // Encode the response
            let message = wm.wm.protobuf.RegisterSystemInfoResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
        })


        // Place List
        app.get('/resource/place_list', (req, res) => {
            console.log('place list');

            // Empty list of place records
            let places: wm.wm.protobuf.Place[] = [];

            // Response data
            places.push(new wm.wm.protobuf.Place({
                placeId: "JPN0123",
                regionId: 1,
                shopName: Config.getConfig().shopName,
                country: "JPN"
            }));

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
                                model: Math.floor(Math.random() * 50), // Randomizing ＧＵＥＳＴ Car data
                                visualModel: Math.floor(Math.random() * 100), // Randomizing ＧＵＥＳＴ Car data
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
                            model: Math.floor(Math.random() * 50), // Randomizing ＧＵＥＳＴ Car data
                            visualModel: Math.floor(Math.random() * 100), // Randomizing ＧＵＥＳＴ Car data
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
                        model: Math.floor(Math.random() * 50), // Randomizing ＧＵＥＳＴ Car data
                        visualModel: Math.floor(Math.random() * 100), // Randomizing ＧＵＥＳＴ Car data
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
                        model: Math.floor(Math.random() * 50), // Randomizing ＧＵＥＳＴ Car data
                        visualModel: Math.floor(Math.random() * 100), // Randomizing ＧＵＥＳＴ Car data
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


        // Ping
        app.post('/method/ping', (req, res) => {
            console.log('ping');
            let body = wm.wm.protobuf.PingRequest.decode(req.body);

            // Response data
            let ping = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                pong: body.ping || 1
            };

            // Encode the response
            let message = wm.wm.protobuf.PingResponse.encode(ping);

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
				}
            });
            
            // Crown holder data available
            if(car_crown.length !== 0){ 
                let counter = 0;

                // Loop GID_RUNAREA
                for(let i=0; i<19; i++){ 

                    // 14 - 16 are dummy area, 17 is C1 Closed
                    if(i >= 14){ 
                        i = 18; // GID_RUNAREA_HIROSHIMA
                    }

                    // Crown holder for certain area available
                    if(car_crown[counter].area === i){ 

                        // Get user's data
                        let car = await prisma.car.findFirst({
                            where: {
                                carId: car_crown[counter].carId
                            },
                            include: {
                                gtWing: true
                            }
                        });

                        // If regionId is 0 or not set, game will crash after defeating the ghost
                        if(car!.regionId === 0)
                        {
                            /* Region Id
                            01 = Hokkaido 北海道
                            02 = Aomori 青森
                            03 = Iwate 岩手
                            04 = Miyagi 宮城
                            05 = Akita 秋田
                            06 = Yamagata 山形
                            07 = Fukushima 福島
                            08 = Ibaraki 茨城
                            09 = Tochigi 栃木
                            10 = Gunma 群馬
                            11 = Saitama 埼玉
                            12 = Chiba 千葉
                            13 = Tokyo 東京
                            19 = Yamanashi 山梨
                            */ 
                            car!.regionId = i + 1; // Change car region id
                        }

                        // Set the tunePower used when capturing ghost crown
                        car!.tunePower = car_crown[counter].tunePower; 

                        // Set the tunePower used when capturing ghost crown
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

                        let playedPlace = wm.wm.protobuf.Place.create({ 
                            placeId: 'JPN0123',
                            shopName: Config.getConfig().shopName,
                            regionId: 18,
                            country: 'JPN'
                        });

                        // Push the car data to the crown holder data
                        list_crown.push(wmsrv.wm.protobuf.Crown.create({  
                            carId: car_crown[counter].carId,
                            area: car_crown[counter].area, // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE & GID_RUNAREA_HIROSHIMA
                            unlockAt: car_crown[counter].playedAt,
                            car: {
                                ...car!,
                                lastPlayedPlace: playedPlace
                            }
                        }));

                        if(counter < car_crown.length-1){
                            counter++;
                        }
                    }
                    // Crown holder for certain area not available
                    else{ 

                        // Push the default data by the game to the crown holder data
                        list_crown.push(wmsrv.wm.protobuf.Crown.create({ 
                            carId: i,
                            area: i, // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE & GID_RUNAREA_HIROSHIMA
                            unlockAt: 0,
                        }));
                    }
                }
            }
            // There is no user's crown holder data available
            else{ 

                // Loop GID_RUNAREA
                for(let i=0; i<19; i++){ 

                    // 14 - 16 are dummy area, 17 is C1 Closed
                    if(i >= 14){ 
                        i = 18; // GID_RUNAREA_HIROSHIMA
                    }

                    // Push the default data by the game to the crown holder data
                    list_crown.push(wmsrv.wm.protobuf.Crown.create({ 
                        carId: i,
                        area: i, // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE & GID_RUNAREA_HIROSHIMA
                        unlockAt: 0,
                    }));
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
    }
}
