import { Config } from "../../config";
import { prisma } from "../..";

// Import Proto
import * as wmproto from "../../wmmt/wm.proto";

// Get Challenged Opponent History
export async function getOpponentHistory(carId: number)
{
    // Car History
    let findChallenger = await prisma.carChallenger.findMany({
        where: {
            challengerCarId: carId
        },
        orderBy:{
            lastPlayedAt: 'desc'
        },
        take: 20
    });
    let opponentHistory: wmproto.wm.protobuf.Car[] = [];
    let inserted = 0;
    
    if(findChallenger.length > 0)
    {
        for(let i=0; i<findChallenger.length; i++)
        {
            let car = await prisma.car.findFirst({
                where: {
                    carId: findChallenger[i].carId
                },
                include:{
                    gtWing: true,
                    lastPlayedPlace: true
                }
            });

            if(car)
            {
                // Error handling if regionId is below 1 or above 47
                if(car!.regionId < 1 || car!.regionId > 47)
                {
                    car!.regionId = Math.floor(Math.random() * 10) + 10;
                }

                opponentHistory.push(wmproto.wm.protobuf.Car.create({
                    ...car!
                }));

                inserted++;
            }

            if(inserted > 10)
            {
                break;
            }
        }
    }

    return { opponentHistory }
}


// Get Stamp Target
export async function getStampTarget(carId: number, arrayCarId: number[])
{
    // Get all of the friend cars for the carId provided
    let getStampTargets = await prisma.carStampTarget.findMany({
        where: {
            stampTargetCarId: carId,
            recommended: true,
            carId: { in: arrayCarId },
        },
        orderBy:{
            locked: 'desc'
        },
    });
    let stampTarget: wmproto.wm.protobuf.StampTargetCar[] = [];

    if(getStampTargets.length > 0)
    {
        for(let i=0; i<getStampTargets.length; i++)
        {
            let carTarget = await prisma.car.findFirst({
                where:{
                    carId: getStampTargets[i].carId
                },
                include:{
                    gtWing: true,
                    lastPlayedPlace: true
                }
            });

            // Error handling if regionId is below 1 or above 47
            if(carTarget!.regionId < 1 || carTarget!.regionId > 47)
            {
                carTarget!.regionId = Math.floor(Math.random() * 10) + 10;
            }

            stampTarget.push(
                wmproto.wm.protobuf.StampTargetCar.create({
                    car: carTarget!,
                    returnCount: getStampTargets[i].returnCount, 
                    locked: getStampTargets[i].locked, 
                    recommended: getStampTargets[i].recommended
                })
            );

            
        }
    }

    return { stampTarget }
}


// Get Challengers
export async function getChallengers(carId: number)
{
    // Get all of the challenger car for the carId provided except beated car
    let checkBeatedCar = await prisma.carStampTarget.findMany({
        where: {
            stampTargetCarId: carId,
            recommended: false
        },
        orderBy:{
            carId: 'asc'
        }
    });
    let challengers: wmproto.wm.protobuf.ChallengerCar[] = [];
    let arrChallengerCarId = [];
    let arrayCarId = [];

    // Push beated carId to array
    for(let i=0; i<checkBeatedCar.length; i++)
    {
        arrChallengerCarId.push(checkBeatedCar[i].carId);
    }

    // Find Opponent Challengers except beated car
    let getChallengers = await prisma.carChallenger.findMany({
        where: {
            carId: carId,
            NOT: {
                challengerCarId: { in: arrChallengerCarId }, // Except beated challenger id
            }
        },
        take: 10
    });

    if(getChallengers.length > 0)
    {
        for(let i=0; i<getChallengers.length; i++)
        {
            let carTarget = await prisma.car.findFirst({
                where:{
                    carId: getChallengers[i].challengerCarId
                },
                include:{
                    gtWing: true,
                    lastPlayedPlace: true
                }
            })

            let result = 0;
            if(getChallengers[i].result > 0)
            {
                result = -Math.abs(getChallengers[i].result);
            }
            else{
                result = Math.abs(getChallengers[i].result);
            }

            // Error handling if regionId is below 1 or above 47
            if(carTarget!.regionId < 1 || carTarget!.regionId > 47)
            {
                carTarget!.regionId = Math.floor(Math.random() * 10) + 10;
            }

            challengers.push(
                wmproto.wm.protobuf.ChallengerCar.create({
                    car: carTarget!,
                    stamp: getChallengers[i].stamp,
                    result: result, 
                    area: getChallengers[i].area
                })
            );

            arrayCarId.push(getChallengers[i].challengerCarId);
        }
    }

    return { challengers, arrayCarId }
}


// Get Ghost Car
export async function getGhostCar(car: any, area: number, ramp: number, path: number)
{
    // Empty list of ghost car records
    let lists_ghostcar: wmproto.wm.protobuf.GhostCar[] = [];
    let arr = [];
    let maxNumber = 0;

    // If all user car data available is more than 10 for certain level
    if(car.length > 10)
    { 
        maxNumber = 10 // Limit to 10 (game default)
    }
    // If no more than 10
    else
    {
        maxNumber = car.length;
    }

    // Choose the user's car data randomly to appear
    while(arr.length < maxNumber)
    { 
        // Randomize pick
        let random: number = 1;

        // Randomize it 5 times
        for(let i=0; i<5; i++)
        {
            random = Math.floor(Math.random() * car.length);
        }

        // Try randomize it again if it's 1
        if(random === 1)
        {
            random = Math.floor(Math.random() * car.length);
        }
        
        
        if(arr.indexOf(random) === -1)
        {
            // Push current number to array
            arr.push(random); 

            // Check if ghost trail for certain car is available
            let ghost_trails = await prisma.ghostTrail.findFirst({
                where: {
                    carId: car[random].carId,
                    area: area,
                    crownBattle: false
                },
                orderBy: {
                    playedAt: 'desc'
                }
            });

            // Error handling if regionId is below 1 or above 47
            if(car!.regionId < 1 || car!.regionId > 47)
            {
                car!.regionId = Math.floor(Math.random() * 10) + 10;
            }

            // Push user's car data without ghost trail
            if(!(ghost_trails))
            { 
                lists_ghostcar.push(wmproto.wm.protobuf.GhostCar.create({
                    car: car[random]
                }));
            }
            // Push user's car data with ghost trail
            else
            {
                // Set the tunePower used when playing certain area
                car[random].tunePower = ghost_trails!.tunePower;

                // Set the tuneHandling used when playing certain area
                car[random].tuneHandling = ghost_trails!.tuneHandling;

                // Push data to Ghost car proto
                lists_ghostcar.push(wmproto.wm.protobuf.GhostCar.create({
                    car: car[random],
                    nonhuman: false,
                    type: wmproto.wm.protobuf.GhostType.GHOST_NORMAL,
                    trailId: ghost_trails!.dbId!
                }));
            }
        }
    }

    return { lists_ghostcar }
}


// Check Ghost Car when using Search by Region
export async function checkGhostSearchByRegion(ghostLevel: number, regionId: number)
{
    // Get current date
    let date = Math.floor(new Date().getTime() / 1000);
    
    let playedPlace = wmproto.wm.protobuf.Place.create({ 
        placeId: Config.getConfig().placeId,
        regionId: Config.getConfig().regionId,
        shopName: Config.getConfig().shopName,
        country: Config.getConfig().country
    });

    let tunePowerDefault = 0
    let tuneHandlingDefault = 0;
    if(ghostLevel === 1)
    {
        tunePowerDefault = 1;
        tuneHandlingDefault = 4;
    }
    else if(ghostLevel === 2)
    {
        tunePowerDefault = 5;
        tuneHandlingDefault = 5;
    }
    else if(ghostLevel === 3)
    {
        tunePowerDefault = 8;
        tuneHandlingDefault = 7;
    }
    else if(ghostLevel === 4)
    {
        tunePowerDefault = 10;
        tuneHandlingDefault = 10;
    }
    else if(ghostLevel === 5)
    {
        tunePowerDefault = 15;
        tuneHandlingDefault = 10;
    }
    else if(ghostLevel === 6)
    {
        tunePowerDefault = 18;
        tuneHandlingDefault = 10;
    }
    else if(ghostLevel === 7)
    {
        tunePowerDefault = 20;
        tuneHandlingDefault = 10;
    }
    else if(ghostLevel === 8)
    {
        tunePowerDefault = 21;
        tuneHandlingDefault = 10;
    }
    else if(ghostLevel === 9)
    {
        tunePowerDefault = 22;
        tuneHandlingDefault = 10;
    }
    else if(ghostLevel === 10)
    {
        tunePowerDefault = 24;
        tuneHandlingDefault = 10;
    }
    else if(ghostLevel === 11)
    {
        tunePowerDefault = 24;
        tuneHandlingDefault = 24;
    }

    // Generate default S660 car data
    let car = wmproto.wm.protobuf.Car.create({ 
        carId: 999999999, // Don't change this
        name: 'Ｓ６６０',
        regionId: regionId, // IDN (福井)
        manufacturer: 12, // HONDA
        model: 105, // S660 [JW5]
        visualModel: 130, // S660 [JW5]
        defaultColor: 0,
        customColor: 0,
        wheel: 20,
        wheelColor: 0,
        aero: 0,
        bonnet: 0,
        wing: 0,
        mirror: 0,
        neon: 0,
        trunk: 0,
        plate: 0,
        plateColor: 0,
        plateNumber: 0,
        tunePower: tunePowerDefault,
        tuneHandling: tuneHandlingDefault,
        rivalMarker: 32,
        aura: 551,
        windowSticker: true,
        windowStickerString: 'ＢＡＹＳＨＯＲＥ',
        windowStickerFont: 0,
        title: 'No Ghost for this Region',
        level: 65, // SSSSS
        lastPlayedAt: date,
        country: 'JPN',
        lastPlayedPlace: playedPlace
    });

    // Push data to Ghost car proto
    let lists_ghostcar: wmproto.wm.protobuf.GhostCar[] = [];
    lists_ghostcar.push(wmproto.wm.protobuf.GhostCar.create({
        car: car,
        nonhuman: true,
        type: wmproto.wm.protobuf.GhostType.GHOST_DEFAULT,
    }));

    return { lists_ghostcar }
}