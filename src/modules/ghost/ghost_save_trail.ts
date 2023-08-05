import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";


// Save OCM ghost battle result
export async function saveOCMGhostTrail(body: wm.protobuf.RegisterGhostTrailRequest)
{
    console.log('Checking OCM Ghost Battle trail history');

    // Get current date
    let date = Math.floor(new Date().getTime() / 1000);

    // Get current active OCM Event
    let ocmEventDate = await prisma.oCMEvent.findFirst({
        where: {
            // qualifyingPeriodStartAt is less than current date
            qualifyingPeriodStartAt: { lte: date },

            // competitionEndAt is greater than current date
            competitionEndAt: { gte: date },
        },
        orderBy:{
            competitionId: 'desc'
        }
    });

    if(ocmEventDate)
    {
        // Get OCM Period ID
        let OCM_periodId = await prisma.oCMPeriod.findFirst({ 
            where:{
                competitionDbId: ocmEventDate.dbId,
                competitionId: ocmEventDate.competitionId,

                // StartAt is less than current date
                startAt: { lte: date },

                // CloseAt is greater than current date
                closeAt: { gte: date }
            },
            select:{
                periodId: true
            }
        });

        let ocmMainDraws: boolean = false;
        let periodId = 0;

        // Current date is OCM main draw
        if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
        {
            periodId = OCM_periodId!.periodId;
            ocmMainDraws = true;
        }
        // Current date is OCM qualifying day
		else if(ocmEventDate!.qualifyingPeriodStartAt < date && ocmEventDate!.qualifyingPeriodCloseAt > date)
        { 
            ocmMainDraws = false;
        }

        // Get the ghost result for the car
        let ghostResult = body?.ghost;

        // Declare data
        let data : any;

        // ghostResult is set
        if (ghostResult)
        {
            // Ghost update data
            let grArea: number = 0;
            let grRamp: number = 0;
            let grPath: number = 0;

            if(ghostResult.area)
            {
                grArea = ghostResult.area;
            }
            if(ghostResult.ramp)
            {
                grRamp = ghostResult.ramp;
            }
            if(ghostResult.path)
            {
                grPath = ghostResult.path;
            }

            data = {
                carId: Number(ghostResult.car.carId),
                area: grArea, 
                ramp: grRamp, 
                path: grPath, 
                trail: body.trail || undefined,
                competitionId: ocmEventDate!.competitionId,
                playedAt: ghostResult.car.lastPlayedAt || undefined,
                tunePower: ghostResult.car.tunePower || undefined,
                tuneHandling: ghostResult.car.tuneHandling || undefined,
                ocmMainDraw: ocmMainDraws
            }

            // Check OCM Ghost Battle Record if playing OCM Ghost Battle Mode
            let gtCount = await prisma.oCMGhostTrail.findFirst({
                where:{
                    carId: ghostResult.car.carId!,
                    competitionId: ocmEventDate!.competitionId,
                    area: ghostResult.area!,
                },
                orderBy: {
                    playedAt: 'desc'
                }
            });

            // Record exist, update it
            if(gtCount)
            {
                console.log('OCM Ghost Trail history found');
                console.log('Updating OCM ghost trail to the newest trail');

                // Update the data
                await prisma.oCMGhostTrail.update({
                    where: {
                        dbId: gtCount.dbId
                    },
                    data: {
                        ...data,
                        periodId: periodId
                    }
                });
            }
            // Record does not exist, create new
            else
            {
                console.log('No OCM ghost trail history');
                console.log('Creating new OCM ghost trail entry');

                // Create new data
                await prisma.oCMGhostTrail.create({
                    data: {
                        ...data,
                        periodId: periodId
                    }
                });
            }
        }
    }
}


// Save Crown ghost battle result
export async function saveCrownGhostTrail(body: wm.protobuf.RegisterGhostTrailRequest)
{
    console.log('Checking Crown Ghost Battle trail history');

    // Get the ghost result for the car
    let ghostResult = body?.ghost;

    // Declare data
    let data : any;

    // ghostResult is set
    if (ghostResult)
    {
        // Ghost update data
        let grArea: number = 0;
        let grRamp: number = 0;
        let grPath: number = 0;
        
        if(ghostResult.area)
        {
            grArea = ghostResult.area;
        }
        if(ghostResult.ramp)
        {
            grRamp = ghostResult.ramp;
        }
        if(ghostResult.path)
        {
            grPath = ghostResult.path;
        }
        
        data = {
            carId: Number(ghostResult.car.carId),
            area: grArea, 
            ramp: grRamp, 
            path: grPath, 
            trail: body.trail || undefined,
            time: body.time || undefined,
            driveData: body.driveData?.data || undefined,
            driveDMergeSerial: body.driveData?.mergeSerial || undefined,
            trendBinaryByArea: body.trendBinaryByArea?.data || undefined,
            byAreaMergeSerial: body.trendBinaryByArea?.mergeSerial || undefined,
            trendBinaryByCar: body.trendBinaryByCar?.data || undefined,
            byCarMergeSerial: body.trendBinaryByCar?.mergeSerial || undefined,
            trendBinaryByUser: body.trendBinaryByUser?.data || undefined,
            byUserMergeSerial: body.trendBinaryByUser?.mergeSerial || undefined,
            playedAt: ghostResult.car.lastPlayedAt || undefined,
            tunePower: ghostResult.car.tunePower || undefined,
            tuneHandling: ghostResult.car.tuneHandling || undefined,
            crownBattle: true,
        }

        // Check Crown Ghost Battle Record if playing Crown Ghost Battle Mode
        let gtCount = await prisma.ghostTrail.findFirst({
            where:{
                area: ghostResult.area!,
                crownBattle: true,
            },
            orderBy: {
                playedAt: 'desc'
            }
        });

        // Record exist, update it
        if(gtCount)
        {
            console.log('Crown Trail history found');
            console.log('Updating crown trail to the newest trail');

            // Update the data
            await prisma.ghostTrail.update({
                where: {
                    dbId: gtCount.dbId
                },
                data: data
            });
        }
        // Record does not exist, create new
        else
        {
            console.log('No crown trail history');
            console.log('Creating new crown trail entry');

            // Create new data
            await prisma.ghostTrail.create({
                data: data
            });
        }

        // Update crown randomized ramp and path to the correct value
        console.log('Updating crown\'s area records to the correct value')
        await prisma.carCrown.update({
            where: {
                area: ghostResult.area!
            },
            data: {
                area: ghostResult.area!,
                ramp: ghostResult.ramp!,
                path: ghostResult.path!,
                playedAt: ghostResult.car.lastPlayedAt!
            }
        });
    }
}

// Save Crown ghost battle result
export async function saveNormalGhostTrail(body: wm.protobuf.RegisterGhostTrailRequest)
{
    console.log('Checking Normal Ghost Battle trail history');

    // Get the ghost result for the car
    let ghostResult = body?.ghost;

    // Declare data
    let data : any;

    // ghostResult is set
    if (ghostResult)
    {
        // Ghost update data
        let grArea: number = 0;
        let grRamp: number = 0;
        let grPath: number = 0;
        if(ghostResult.area)
        {
            grArea = ghostResult.area;
        }
        if(ghostResult.ramp)
        {
            grRamp = ghostResult.ramp;
        }
        if(ghostResult.path)
        {
            grPath = ghostResult.path;
        }
        
        data = {
            carId: Number(ghostResult.car.carId),
            area: grArea, 
            ramp: grRamp, 
            path: grPath, 
            trail: body.trail || undefined,
            time: Number(body.time) || undefined,
            driveData: body.driveData?.data || undefined,
            driveDMergeSerial: body.driveData?.mergeSerial || undefined,
            trendBinaryByArea: body.trendBinaryByArea?.data || undefined,
            byAreaMergeSerial: body.trendBinaryByArea?.mergeSerial || undefined,
            trendBinaryByCar: body.trendBinaryByCar?.data || undefined,
            byCarMergeSerial: body.trendBinaryByCar?.mergeSerial || undefined,
            trendBinaryByUser: body.trendBinaryByUser?.data || undefined,
            byUserMergeSerial: body.trendBinaryByUser?.mergeSerial || undefined,
            playedAt: ghostResult.car.lastPlayedAt || undefined,
            tunePower: ghostResult.car.tunePower || undefined,
            tuneHandling: ghostResult.car.tuneHandling || undefined,
            crownBattle: false,
        }

        // Check Normal Ghost Battle Record if playing Crown Ghost Battle Mode
        let gtCount = await prisma.ghostTrail.findFirst({
            where:{
                carId: ghostResult.car.carId!,
                area: ghostResult.area!,
                path: ghostResult.path!,
                crownBattle: false,
            },
            orderBy: {
                playedAt: 'desc'
            }
        });

        // Record exist, update it
        if(gtCount)
        {
            console.log('Trail history found');
            console.log('Updating trail to the newest trail');

            // Update the data
            let gdbId = gtCount.dbId;
            await prisma.ghostTrail.update({
                where: {
                    dbId: gdbId
                },
                data: data
            });
        }
        // Record does not exist, create new
        else
        {
            console.log('No trail history');
            console.log('Creating new trail entry');

            // Create new data
            await prisma.ghostTrail.create({
                data: data
            });
        }
    }
}


// Save path and tuning  result
export async function savePathAndTuning(body: wm.protobuf.RegisterGhostTrailRequest)
{
    console.log('Saving Car Path and Tuning');

    // Get the ghost result for the car
    let ghostResult = body?.ghost;

    // ghostResult is set
    if (ghostResult)
    {
        //Check Car Path and Tuning Record for certain area
        let cPaT_count = await prisma.carPathandTuning.findFirst({
            where:{
                carId: ghostResult.car.carId!,
                area: ghostResult.area!,
                path: ghostResult.path!,
            },
            orderBy: {
                lastPlayedAt: 'desc'
            }
        });

        // Record (Car Path and Tuning) exist, update it
        if(cPaT_count)
        {
            console.log('Updating path and tuning record');

            await prisma.carPathandTuning.update({
                where: {
                    dbId: cPaT_count.dbId
                },
                data:{
                    carId: ghostResult.car.carId!,
                    area: ghostResult.area!,
                    ramp: ghostResult.ramp!,
                    path: ghostResult.path!,
                    tunePower: ghostResult.car.tunePower!,
                    tuneHandling: ghostResult.car.tuneHandling!,
                    lastPlayedAt: ghostResult.car.lastPlayedAt!
                }
            });
        }
        // Record (Car Path and Tuning) does not exist, create new
        else
        {
            console.log('Creating new path and tuning record');

            await prisma.carPathandTuning.create({
                data: {
                    carId: ghostResult.car.carId!,
                    area: ghostResult.area!,
                    ramp: ghostResult.ramp!,
                    path: ghostResult.path!,
                    tunePower: ghostResult.car.tunePower!,
                    tuneHandling: ghostResult.car.tuneHandling!,
                    lastPlayedAt: ghostResult.car.lastPlayedAt!
                }
            });
        }
    }
}