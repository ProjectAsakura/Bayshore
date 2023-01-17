import { prisma } from "../..";

// Import Proto
import * as ghost_ocm_area from "./ghost_ocm_area";
import * as ghost_area from "./ghost_area";


// Get OCM Ghost Trail
export async function getOCMGhostTrail(carId: number, trailId: number)
{
    // Get current date
    let date = Math.floor(new Date().getTime() / 1000);

    let ghost_trails = await prisma.oCMTop1GhostTrail.findFirst({ 
        where: {
            carId: carId,
            dbId: trailId,
        }
    });

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

        // Get current / previous active OCM Event
        let ocmEventDate = await prisma.oCMEvent.findFirst({
            where: {
                // qualifyingPeriodStartAt is less than current date
                qualifyingPeriodStartAt: { lte: date },

                // competitionEndAt is greater than current date
                competitionEndAt: { gte: date },
            },
            orderBy: 
            {
                competitionEndAt: 'desc',
            }
        });

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

        // Get the ramp and path id
        let ghost_areas = await ghost_area.GhostArea(areaId);

        // Set the value
        rampVal = ghost_areas.rampVal;
        pathVal = ghost_areas.pathVal;

        // Random value lmao, for default ghost trail stuff (any value maybe works)
        playedAt = date
        ghostTrail = new Uint8Array([1, 2, 3, 4]); 
    }

    return { areaId, rampVal, pathVal, playedAt, ghostTrail }
}