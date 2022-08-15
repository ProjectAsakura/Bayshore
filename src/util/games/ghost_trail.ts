import { prisma } from "../..";
import { OCMTop1GhostTrail } from "@prisma/client";

// Import Proto
import * as ghost_ocm_area from "../games/games_util/ghost_ocm_area";


// Save ghost battle result
export async function getOCMGhostTrail(carId: number, trailId: number)
{
    // Get current date
    let date = Math.floor(new Date().getTime() / 1000);

    // Get current active OCM Event
    let ocmEventDate = await prisma.oCMEvent.findFirst({
        orderBy: [
            {
                dbId: 'desc'
            },
            {
                competitionEndAt: 'desc',
            },
        ],
    });

    let ghost_trails: OCMTop1GhostTrail | null;
    // Current date is OCM main draw
    if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
    {
        // Get Current OCM Period
        let OCMCurrentPeriod = await prisma.oCMPeriod.findFirst({ 
            where: {
                competitionDbId: ocmEventDate!.dbId,
                startAt: 
                {
                    lte: date, // competitionStartAt is less than current date
                },
                closeAt:
                {
                    gte: date, // competitionCloseAt is greater than current date
                }
            }
        });

        ghost_trails = await prisma.oCMTop1GhostTrail.findFirst({ 
            where: {
                carId: carId,
                dbId: trailId,
                competitionId: ocmEventDate!.competitionId,
                periodId: OCMCurrentPeriod!.periodId
            },
            orderBy: {
                playedAt: 'desc'
            }
        });
    }
    // Current date is OCM qualifying day
    else if(ocmEventDate!.qualifyingPeriodStartAt < date && ocmEventDate!.qualifyingPeriodCloseAt > date)
    {
        ghost_trails = await prisma.oCMTop1GhostTrail.findFirst({ 
            where: {
                carId: carId,
                dbId: trailId,
                competitionId: ocmEventDate!.competitionId,
                periodId: 0
            },
            orderBy: {
                playedAt: 'desc'
            }
        });
    }
    else
    {
        ghost_trails = await prisma.oCMTop1GhostTrail.findFirst({ 
            where: {
                carId: carId,
                dbId: trailId,
                competitionId: ocmEventDate!.competitionId,
                periodId: 999999999
            },
            orderBy: {
                playedAt: 'desc'
            }
        });
    }

    let areaVal = 0;
    let rampVal = 0;
    let pathVal = 0;
    let playedAt = 0;
    let ghostTrail;

    // Trails data for certain area is available
    if(ghost_trails)
    {
        console.log('OCM Ghost Trail found');

        // Set to OCM starting ramp data
        areaVal = ghost_trails!.area;

        // Set to OCM starting ramp data
        rampVal = ghost_trails!.ramp;

        // Set to OCM starting path data
        pathVal = ghost_trails!.path;

        // Set to OCM starting path data
        playedAt = ghost_trails!.playedAt;

        // Set to OCM trail data
        ghostTrail = ghost_trails!.trail;
    }
    // Trails data for certain area is not available
    else
    {
        console.log('OCM Ghost Trail not found');

        // Calling OCM Area function (BASE_PATH/src/util/games/ghost_ocm.ts)
        let OCMArea = await ghost_ocm_area.OCMArea(ocmEventDate!.competitionId);

        // Set the value from OCMArea
        areaVal = OCMArea.areaVal;
        rampVal = OCMArea.rampVal;
        pathVal = OCMArea.pathVal;

        // Random value lmao, for default ghost trail stuff (any value maybe works)
        playedAt = date
        ghostTrail = new Uint8Array([1, 2, 3, 4]); 
    }

    return { areaVal, rampVal, pathVal, playedAt, ghostTrail }
}


export async function getCrownGhostTrail(carId: number, areaId: number)
{
    // Get current date
    let date = Math.floor(new Date().getTime() / 1000);

    // Get the trail data for certain area
    let ghost_trails = await prisma.ghostTrail.findFirst({
        where: {
            carId: carId,
            area: areaId,
            crownBattle: true,
        },
        orderBy: {
            playedAt: 'desc'
        }
    });

    let rampVal = 0;
    let pathVal = 0;
    let playedAt = 0;
    let ghostTrail: Uint8Array;

    // Trails data for certain area is available
    if(ghost_trails)
    {
        console.log('Crown Ghost Trail found');

        // Set to crown holder starting ramp data
        rampVal = ghost_trails!.ramp;

        // Set to crown holder starting path data
        pathVal = ghost_trails!.path;

        let time = await prisma.carCrown.findFirst({
            where: {
                carId: carId,
                area: areaId
            },
            orderBy: {
                playedAt: 'desc'
            },
            select: {
                playedAt: true
            }
        });

        // Error handling if played At timestamp value is current date and timestamp is bigger than 9 July 2022 (using GMT+7 timestamp)
        if(time!.playedAt !== 0 && time!.playedAt >= 1657299600)
        {
            // Acquired crown timestamp - 1 day
            playedAt = time!.playedAt - 172800;
        }
        // Error handling if played At timestamp value is 0 or timestamp is less than 9 July 2022 (using GMT+7 timestamp)
        else if(time!.playedAt === 0 || time!.playedAt < 1657299600)
        {
            // Acquired crown timestamp become 9 July 2022 (using GMT+7 timestamp)
            playedAt = 1657299600;
        }

        // Set to crown holder trails data
        ghostTrail = ghost_trails!.trail;
    }
    // Trails data for certain area is not available
    else
    {
        console.log('Crown Ghost Trail not found');

        if(areaId === 0){ // GID_RUNAREA_C1
            rampVal = Math.floor(Math.random() * 4);
            pathVal = Math.floor(Math.random() * 10);
        }
        else if(areaId === 1){ // GID_RUNAREA_RING
            rampVal = Math.floor(Math.random() * 2) + 4;
            pathVal = Math.floor(Math.random() * 6) + 10;
        }
        else if(areaId === 2){ // GID_RUNAREA_SUBTOKYO_3_4
            rampVal = Math.floor(Math.random() * 2) + 6;
            pathVal = Math.floor(Math.random() * 2) + 16;
        }
        else if(areaId === 3){ // GID_RUNAREA_SUBTOKYO_5
            rampVal = Math.floor(Math.random() * 2) + 8;
            pathVal = Math.floor(Math.random() * 2) + 18;
        }
        else if(areaId === 4){ // GID_RUNAREA_WANGAN
            rampVal = Math.floor(Math.random() * 4) + 10;
            pathVal = Math.floor(Math.random() * 7) + 20;
        }
        else if(areaId === 5){ // GID_RUNAREA_K1
            rampVal = Math.floor(Math.random() * 4) + 14;
            pathVal = Math.floor(Math.random() * 7) + 27;
        }
        else if(areaId === 6){ // GID_RUNAREA_YAESU
            rampVal = Math.floor(Math.random() * 3) + 18;
            pathVal = Math.floor(Math.random() * 4) + 34;
        }
        else if(areaId === 7){ // GID_RUNAREA_YOKOHAMA
            rampVal = Math.floor(Math.random() * 4) + 21;
            pathVal = Math.floor(Math.random() * 11) + 38;
        }
        else if(areaId === 8){ // GID_RUNAREA_NAGOYA
            rampVal = 25;
            pathVal = 49;
        }
        else if(areaId === 9){ // GID_RUNAREA_OSAKA
            rampVal = 26;
            pathVal = Math.floor(Math.random() * 4) + 50;
        }
        else if(areaId === 10){ // GID_RUNAREA_KOBE
            rampVal = 28;
            pathVal = 55;
        }
        else if(areaId === 11){ // GID_RUNAREA_FUKUOKA
            rampVal = Math.floor(Math.random() * 4) + 29;
            pathVal = Math.floor(Math.random() * 4) + 58;
        }
        else if(areaId === 12){ // GID_RUNAREA_HAKONE
            rampVal = Math.floor(Math.random() * 2) + 33;
            pathVal = Math.floor(Math.random() * 2) + 62;
        }
        else if(areaId === 13){ // GID_RUNAREA_TURNPIKE
            rampVal = Math.floor(Math.random() * 2) + 35;
            pathVal = Math.floor(Math.random() * 2) + 64;
        }
        //14 - 16 are dummy area, 17 is GID_RUNAREA_C1_CLOSED
        else if(areaId === 18){ // GID_RUNAREA_HIROSHIMA
            rampVal = Math.floor(Math.random() * 2) + 37;
            pathVal = Math.floor(Math.random() * 2) + 56;
        }

        // Random value lmao, for default ghost trail stuff (any value maybe works)
        playedAt = date
        ghostTrail = new Uint8Array([1, 2, 3, 4]); 
    }

    return { areaId, rampVal, pathVal, playedAt, ghostTrail }
}