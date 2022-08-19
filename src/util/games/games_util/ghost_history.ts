// Import Proto
import { prisma } from "../../..";
import { Config } from "../../../config";
import { wm } from "../../../wmmt/wm.proto";


// Save ghost history battle
export async function saveGhostHistory(body: wm.protobuf.SaveGameResultRequest)
{
    console.log('Saving Ghost Battle History');
    
    let saveExGhostHistory: any = {};
    
    if (body.car?.carId !== null && body.car?.carId !== undefined) { 
        saveExGhostHistory.carId = body.car?.carId!;
    }
    if (body.car?.tunePower !== null && body.car?.tunePower !== undefined) { 
        saveExGhostHistory.tunePower = body.car?.tunePower!;
    }
    if (body.car?.tuneHandling !== null && body.car?.tuneHandling !== undefined) {
        saveExGhostHistory.tuneHandling = body.car?.tuneHandling!;
    }
    if (body.playedAt !== null && body.playedAt !== undefined){
        saveExGhostHistory.playedAt = body.playedAt!;
    }

    // Get shop name
    saveExGhostHistory.playedShopName = Config.getConfig().shopName; 

    // Get how many opponents available
    for(let i=0; i<body.rgResult!.opponents!.length; i++)
    { 
        // First opponent data
        if(i == 0)
        { 
            // Get first opponent carId
            saveExGhostHistory.opponent1CarId = body.rgResult!.opponents![0].carId; 

            // Get first opponent tunePower
            saveExGhostHistory.opponent1TunePower = body.rgResult!.opponents![0].tunePower; 

            // Get first opponent tunePower
            saveExGhostHistory.opponent1TuneHandling = body.rgResult!.opponents![0].tuneHandling; 

            // Get the advantage distance between first opponent and user
            saveExGhostHistory.opponent1Result = body.rgResult!.opponents![0].result; 
        }

        // Second opponent data
        else if(i == 1)
        { 
            // Get second opponent carId
            saveExGhostHistory.opponent2CarId = body.rgResult!.opponents![1].carId; 

            // Get second opponent tunePower
            saveExGhostHistory.opponent2TunePower = body.rgResult!.opponents![1].tunePower; 

            // Get second opponent tuneHandling
            saveExGhostHistory.opponent2TuneHandling = body.rgResult!.opponents![1].tuneHandling; 

            // Get the advantage distance between second opponent and user
            saveExGhostHistory.opponent2Result = body.rgResult!.opponents![1].result; 
        }

        // Third opponent data
        else if(i == 2)
        { 
            // Get third opponent carId
            saveExGhostHistory.opponent3CarId = body.rgResult!.opponents![2].carId;  

            // Get third opponent tunePower
            saveExGhostHistory.opponent3TunePower = body.rgResult!.opponents![2].tunePower; 

            // Get third opponent tuneHandling
            saveExGhostHistory.opponent3TuneHandling = body.rgResult!.opponents![2].tuneHandling; 

            // Get the advantage distance between third opponent and user
            saveExGhostHistory.opponent3Result = body.rgResult!.opponents![2].result; 
        }
    }

    // Get played Area
    if(body.rgResult?.path !== null && body.rgResult?.path !== undefined)
    {
        if(body.rgResult?.path >= 0 && body.rgResult?.path <= 9){ // GID_PATH_C1
            saveExGhostHistory.area = Number(0);
        }
        else if(body.rgResult?.path >= 10 && body.rgResult?.path <= 15){ // GID_PATH_N9
            saveExGhostHistory.area = Number(1);
        }
        else if(body.rgResult?.path >= 16 && body.rgResult?.path <= 17){ // GID_PATH_WTEAST
            saveExGhostHistory.area = Number(2);
        }
        else if(body.rgResult?.path >= 18 && body.rgResult?.path <= 19){ // GID_PATH_WT_UP_DOWN
            saveExGhostHistory.area = Number(3);
        }
        else if(body.rgResult?.path >= 20 && body.rgResult?.path <= 26){ // GID_PATH_WG
            saveExGhostHistory.area = Number(4);
        }
        else if(body.rgResult?.path >= 27 && body.rgResult?.path <= 33){ // GID_PATH_KG
            saveExGhostHistory.area = Number(5);
        }
        else if(body.rgResult?.path >= 34 && body.rgResult?.path <= 37){ // GID_PATH_YS
            saveExGhostHistory.area = Number(6);
        }
        else if(body.rgResult?.path >= 38 && body.rgResult?.path <= 48){ // GID_PATH_KG_SHINYAMASHITA_MINATOMIRAI
            saveExGhostHistory.area = Number(7);
        }
        else if(body.rgResult?.path === 49){ // GID_PATH_NGR
            saveExGhostHistory.area = Number(8);
        }
        else if(body.rgResult?.path >= 50 && body.rgResult?.path <= 53){ // GID_PATH_OS
            saveExGhostHistory.area = Number(9);
        }
        else if(body.rgResult?.path >= 54 && body.rgResult?.path <= 55){ // GID_PATH_KB
            saveExGhostHistory.area = Number(10);
        }
        else if(body.rgResult?.path >= 58 && body.rgResult?.path <= 61){ // GID_PATH_FK
            saveExGhostHistory.area = Number(11);
        }
        else if(body.rgResult?.path >= 62 && body.rgResult?.path <= 63){ // GID_PATH_HK
            saveExGhostHistory.area = Number(12);
        }
        else if(body.rgResult?.path >= 64 && body.rgResult?.path <= 65){ // GID_PATH_TP
            saveExGhostHistory.area = Number(13);
        }
        else if(body.rgResult?.path >= 56 && body.rgResult?.path <= 57){ // GID_PATH_HS
            saveExGhostHistory.area = Number(18);
        }
    }
    
    await prisma.ghostBattleRecord.create({
        data: saveExGhostHistory
    });
}


export async function saveOCMGhostHistory(body: wm.protobuf.SaveGameResultRequest)
{
    let updateNewTrail: boolean = true;
    let saveExGhostHistory: any = {};

    if (body.car?.carId !== null && body.car?.carId !== undefined) { 
        saveExGhostHistory.carId = body.car?.carId!;
    }
    if (body.car?.tunePower !== null && body.car?.tunePower !== undefined) { 
        saveExGhostHistory.tunePower = body.car?.tunePower!;
    }
    if (body.car?.tuneHandling !== null && body.car?.tuneHandling !== undefined) {
        saveExGhostHistory.tuneHandling = body.car?.tuneHandling!;
    }
    if (body.playedAt !== null && body.playedAt !== undefined){
        saveExGhostHistory.playedAt = body.playedAt!;
    }

    // Get shop name
    saveExGhostHistory.playedShopName = Config.getConfig().shopName; 

    // Get the advantage distance between first opponent and user
    saveExGhostHistory.result = body.rgResult!.opponents![0].result;

    // Get played Area
    if(body.rgResult?.path !== null && body.rgResult?.path !== undefined)
    {
        if(body.rgResult?.path >= 0 && body.rgResult?.path <= 9){ // GID_PATH_C1
            saveExGhostHistory.area = Number(0);
        }
        else if(body.rgResult?.path >= 10 && body.rgResult?.path <= 15){ // GID_PATH_N9
            saveExGhostHistory.area = Number(1);
        }
        else if(body.rgResult?.path >= 16 && body.rgResult?.path <= 17){ // GID_PATH_WTEAST
            saveExGhostHistory.area = Number(2);
        }
        else if(body.rgResult?.path >= 18 && body.rgResult?.path <= 19){ // GID_PATH_WT_UP_DOWN
            saveExGhostHistory.area = Number(3);
        }
        else if(body.rgResult?.path >= 20 && body.rgResult?.path <= 26){ // GID_PATH_WG
            saveExGhostHistory.area = Number(4);
        }
        else if(body.rgResult?.path >= 27 && body.rgResult?.path <= 33){ // GID_PATH_KG
            saveExGhostHistory.area = Number(5);
        }
        else if(body.rgResult?.path >= 34 && body.rgResult?.path <= 37){ // GID_PATH_YS
            saveExGhostHistory.area = Number(6);
        }
        else if(body.rgResult?.path >= 38 && body.rgResult?.path <= 48){ // GID_PATH_KG_SHINYAMASHITA_MINATOMIRAI
            saveExGhostHistory.area = Number(7);
        }
        else if(body.rgResult?.path === 49){ // GID_PATH_NGR
            saveExGhostHistory.area = Number(8);
        }
        else if(body.rgResult?.path >= 50 && body.rgResult?.path <= 53){ // GID_PATH_OS
            saveExGhostHistory.area = Number(9);
        }
        else if(body.rgResult?.path >= 54 && body.rgResult?.path <= 55){ // GID_PATH_KB
            saveExGhostHistory.area = Number(10);
        }
        else if(body.rgResult?.path >= 58 && body.rgResult?.path <= 61){ // GID_PATH_FK
            saveExGhostHistory.area = Number(11);
        }
        else if(body.rgResult?.path >= 62 && body.rgResult?.path <= 63){ // GID_PATH_HK
            saveExGhostHistory.area = Number(12);
        }
        else if(body.rgResult?.path >= 64 && body.rgResult?.path <= 65){ // GID_PATH_TP
            saveExGhostHistory.area = Number(13);
        }
        else if(body.rgResult?.path >= 56 && body.rgResult?.path <= 57){ // GID_PATH_HS
            saveExGhostHistory.area = Number(18);
        }
    }

    // Get current date
    let date = Math.floor(new Date().getTime() / 1000);

    // Get currently active OCM event
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

    // ----------Get available OCM Record (Qualifying or Main Draw)----------
    // Current date is OCM main draw
    let countGBR;
    if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
    {
        // Set OCM Main draw value to true 
        saveExGhostHistory.ocmMainDraw = true

        // Get the user's available OCM Battle Record data
        countGBR = await prisma.oCMTally.findFirst({ 
            where:{
                carId: saveExGhostHistory.carId,
                competitionId: ocmEventDate!.competitionId,
            }
        });
    }
    // Current date is OCM qualifying day
    else
    { 
        // Set OCM Main draw value to false 
        saveExGhostHistory.ocmMainDraw = false

        // Get the user's available OCM Battle Record data
        countGBR = await prisma.oCMGhostBattleRecord.findFirst({ 
            where:{
                carId: saveExGhostHistory.carId,
                ocmMainDraw: saveExGhostHistory.ocmMainDraw,
                area: saveExGhostHistory.area,
                competitionId: ocmEventDate!.competitionId,
                periodId: 0
            }
        });
    }
    // ----------------------------------------------------------------

    // User have OCM Battle Record data available
    if(countGBR)
    { 
        // Check if the newest advantage distance is bigger than the older advantage distance
        if(countGBR!.result < saveExGhostHistory.result)
        {
            console.log('OCM Ghost Tally found');
            // Current date is OCM Main Draw
            if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
            {
                // Get OCM Period ID
                let OCM_periodId = await prisma.oCMPeriod.findFirst({ 
                    where:{
                        competitionDbId: ocmEventDate!.dbId,
                        competitionId: ocmEventDate!.competitionId,
                        startAt: 
                        {
                            lte: date, // competitionStartAt is less than current date
                        },
                        closeAt:
                        {
                            gte: date, // competitionCloseAt is greater than current date
                        }
                    },
                    select:{
                        periodId: true
                    }
                });

                let checkGhost = await prisma.oCMGhostBattleRecord.findFirst({ 
                    where:{
                        carId: saveExGhostHistory.carId,
                        competitionId: ocmEventDate!.competitionId,
                    }
                });

                if(checkGhost)
                {
                    console.log('Updating OCM Ghost Battle Record entry');
                    
                    // Get the user's available OCM Battle Record data
                    let getGBR = await prisma.oCMGhostBattleRecord.findFirst({ 
                        where:{
                            carId: saveExGhostHistory.carId,
                            area: saveExGhostHistory.area,
                            competitionId: ocmEventDate!.competitionId,
                        }
                    });

                    // Update ghost battle record
                    await prisma.oCMGhostBattleRecord.update({
                        where:{
                            dbId: getGBR!.dbId
                        },
                        data: {
                            ...saveExGhostHistory,
                            competitionId: ocmEventDate!.competitionId,
                            periodId: OCM_periodId!.periodId
                        }
                    });  
                }
                else
                {
                    console.log('Creating new OCM Ghost Battle Record entry');

                    // Create new ghost battle record
                    await prisma.oCMGhostBattleRecord.create({
                        data: {
                            ...saveExGhostHistory,
                            competitionId: ocmEventDate!.competitionId,
                            periodId: OCM_periodId!.periodId
                        }
                    }); 
                }

                console.log('Updating OCM Tally Record');

                // Update the OCM Tally Record
                await prisma.oCMTally.update({
                    where:{
                        dbId: countGBR.dbId
                    },
                    data: {
                        periodId: OCM_periodId!.periodId,
                        result: body.rgResult!.opponents![0].result,
                        tunePower: body.car?.tunePower!,
                        tuneHandling: body.car?.tuneHandling!
                    }
                });
            }
            // Current date is OCM Qualifying
            else
            {
                // Update ghost battle record
                await prisma.oCMGhostBattleRecord.update({
                    where:{
                        dbId: countGBR.dbId
                    },
                    data: {
                        ...saveExGhostHistory,
                        competitionId: ocmEventDate!.competitionId,
                        periodId: 0
                    }
                });
            }
        }
        // Newest advantage distance is smaller than the older advantage distance
        else
        { 
            console.log('Result record is lower than previous record');

            // Don't update the User's OCM ghost trail
            updateNewTrail = false; 
        }
    }
    // User don't have OCM Battle Record data available
    else
    { 
        console.log('OCM Ghost Battle Record not found');
        console.log('Creating new OOCM Ghost Battle Record entry');

        // Current date is OCM Main Draw
        if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
        {
            // Get OCM Period ID
            let OCM_periodId = await prisma.oCMPeriod.findFirst({ 
                where:{
                    competitionDbId: ocmEventDate!.dbId,
                    competitionId: ocmEventDate!.competitionId
                },
                orderBy:{
                    periodId: 'desc'
                },
                select:{
                    periodId: true
                }
            });

            // Update ghost battle record
            await prisma.oCMGhostBattleRecord.create({
                data: {
                    ...saveExGhostHistory,
                    competitionId: ocmEventDate!.competitionId,
                    periodId: OCM_periodId!.periodId
                }
            });

            let ocmTallyfind = await prisma.oCMTally.findFirst({
                where:{
                    carId: saveExGhostHistory.carId,
                    competitionId: ocmEventDate!.competitionId,
                },
            });

            if(ocmTallyfind)
            {
                console.log('Updating OCM Tally Record');
                // Update the OCM Tally Record
                await prisma.oCMTally.update({
                    where:{
                        dbId: ocmTallyfind.dbId
                    },
                    data: {
                        periodId: OCM_periodId!.periodId,
                        result: body.rgResult!.opponents![0].result,
                        tunePower: body.car?.tunePower!,
                        tuneHandling: body.car?.tuneHandling!
                    }
                });
            }
        }
        // Current date is OCM Qualifying
        else
        {
            // Update ghost battle record
            await prisma.oCMGhostBattleRecord.create({
                data: {
                    ...saveExGhostHistory,
                    competitionId: ocmEventDate!.competitionId,
                    periodId: 0
                }
            });
        }
    }

    // Return the value to 'BASE_PATH/src/util/games/ghost.ts'
    return { updateNewTrail }
}