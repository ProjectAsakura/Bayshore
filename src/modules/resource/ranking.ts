import { prisma } from "../..";

//Import Proto
import * as wmsrv from "../../wmmt/service.proto";


// Get TA Ranking
export async function getTimeAttackRanking()
{
    // Empty list ranking records
    let lists: wmsrv.wm.protobuf.Ranking.List[] = [];

    // Get TA Ranking
    for(let i=0; i<25; i++) // GID_TACOURSE ID
    { 

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
        if(ta_time.length > 0)
        { 
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
            if(ta_time.length < 11)
            {
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
        else
        {
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

    return { lists }
}

// Get VS Outrun Ranking
export async function getVSOutrunRanking()
{
    // Empty list ranking records
    let lists: wmsrv.wm.protobuf.Ranking.List[] = [];

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
    for(let i=0; i<car_vs.length; i++)
    { 
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
    if(car_vs.length < 20)
    { 
        // Take the remaining unfilled
        for(let j=car_vs.length; j<21; j++)
        { 
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

    return { lists }
}

// Get Ghost Trophies Ranking
export async function getTGhostTrophiesRanking()
{
    // Empty list ranking records
    let lists: wmsrv.wm.protobuf.Ranking.List[] = [];

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

    return { lists }
}