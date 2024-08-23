import { prisma } from "../..";
import { User } from "@prisma/client";
import { Config } from "../../config";
import Long from "long";

// Import Proto
import { wm } from "../../wmmt/wm.proto";
import * as wmproto from "../../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";
import * as car_tune from "./car_tune";


// Get Car Data
export async function getCar(carId: number)
{
    // Get the car (required data only) with the given id
    let car = await prisma.car.findFirst({
        where: {
            carId: carId
        },
        include: {
            settings: true,
            items: true,
            gtWing: true,
            lastPlayedPlace: true,
        }
    });

    // Error handling if car tune is more than 34 game default
    if(car!.tunePower + car!.tuneHandling > 34)
    {
        car!.tunePower = 17;
        car!.tuneHandling = 17;

        await prisma.car.update({
            where: {
                carId: car!.carId
            },
            data: {
                tunePower: 17,
                tuneHandling: 17
            }
        });
    }

    // Error handling if ghostLevel accidentally set to 0 or more than 11
    if (car!.ghostLevel < 1)
    {    
        car!.ghostLevel = 1;

        await prisma.car.update({
            where: {
                carId: car!.carId
            },
            data: {
                ghostLevel: 1
            }
        });
    }

    if (car!.ghostLevel > 12)
    {    
        if(car!.rgWinCount > 1000)
        {
            car!.ghostLevel = 11;

            await prisma.car.update({
                where: {
                    carId: car!.carId
                },
                data: {
                    ghostLevel: 11
                }
            });
        }
        else
        {
            car!.ghostLevel = 10;

            await prisma.car.update({
                where: {
                    carId: car!.carId
                },
                data: {
                    ghostLevel: 10
                }
            });
        }
    }

    // Convert the database lose bits to a Long
    let longLoseBits = Long.fromString(car!.stLoseBits.toString());

    return { ...car!, longLoseBits }
}


// Get Opponents Target
export async function getRegisteredTarget(carId: number)
{
    // Get Registered Target
    let getTarget = await prisma.ghostRegisteredFromTerminal.findFirst({
        where:{
            carId: carId
        }
    });
    let opponentGhost;
    let opponentTrailId;
    let opponentCompetitionId;
    let registeredargetAvailable: boolean = false;

    if(getTarget)
    {
        console.log('Registered Opponents Available');

        let getTargetTrail = await prisma.oCMTop1GhostTrail.findFirst({
            where:{
                carId: getTarget.opponentCarId,
                competitionId: Number(getTarget.competitionId)
            },
            orderBy:{
                periodId: 'desc'
            }
        });

        if(getTargetTrail)
        {
            let getTargetCar = await prisma.car.findFirst({
                where:{
                    carId: getTarget.opponentCarId
                },
                include:{
                    gtWing: true,
                    lastPlayedPlace: true
                }
            });

            opponentGhost = wmproto.wm.protobuf.GhostCar.create({
                car: {
                    ...getTargetCar!,
                    tunePower: getTargetTrail!.tunePower,
                    tuneHandling: getTargetTrail!.tuneHandling,
                },
                area: getTargetTrail!.area,
                ramp: getTargetTrail!.ramp,
                path: getTargetTrail!.path,
                nonhuman: false,
                type: wmproto.wm.protobuf.GhostType.GHOST_NORMAL,
                trailId: getTargetTrail!.dbId
            });
            opponentTrailId = Number(getTargetTrail!.dbId);
            opponentCompetitionId = Number(getTarget.competitionId);
        }

        registeredargetAvailable = true;
    }

    return { opponentGhost, opponentTrailId, opponentCompetitionId, registeredargetAvailable }
}


// Get Opponents Target
export async function getOpponentsTarget(carId: number, registeredargetAvailable: boolean)
{
    // Check opponents stamp target
    // Will skip this if user's have Hall of Fame ghost registered
    let challenger;
    let challengerReturnCount = 1;
    let opponentTargetCount = 0;
    let numOfChallengers: number = 0;
    if(registeredargetAvailable === false)
    {
        // Check opponents target
        opponentTargetCount = await prisma.carStampTarget.count({
            where:{
                stampTargetCarId: carId,
                recommended: true,
            },
            orderBy:{
                locked: 'desc'
            }
        });

        if(opponentTargetCount > 0)
        {
            console.log('Challengers Available');

            // Randomize pick
            let random: number = 1;
            let randomArray: number[] = [];
            let maxNumber = 5;

            if(opponentTargetCount < 5)
            { 
                maxNumber = opponentTargetCount;
            }

            // Randomize it 5 times
            while(randomArray.length < maxNumber)
            { 
                // Pick random car Id
                random = Math.floor(Math.random() * opponentTargetCount);

                // Try randomize it again if it's 0, and fix if more than car length
                if(random < 1 || random >= opponentTargetCount)
                {
                    random = Math.floor(Math.random() * opponentTargetCount);
                }

                // Random Number not yet selected
                if(randomArray.indexOf(random) === -1)
                {
                    // Push current number to array
                    randomArray.push(random);
                }
            }

            // Pick the array number
            let pickRandom = Math.floor(Math.random() * randomArray.length);
            random = randomArray[pickRandom];

            // Check opponents target
            let opponentTarget = await prisma.carStampTarget.findMany({
                where:{
                    stampTargetCarId: carId,
                    recommended: true,
                },
                orderBy: [
                    {
                        id: 'asc'
                    },
                    {
                        recommended: 'desc'
                    }   
                ],
                skip: random,
                take: 1,
            });

            // Get Opponents Challengers
            let carChallengers = await prisma.carChallenger.findFirst({
                where: {
                    challengerCarId: opponentTarget[0].carId,
                    carId: carId
                },
                orderBy:{
                    id: 'desc'
                }
            });
        
            // Challengers Available
            if(carChallengers)
            {
                // Get Shuttle
                challengerReturnCount = opponentTarget[0].returnCount;

                // Get Car Target
                let carTarget = await prisma.car.findFirst({
                    where:{
                        carId: carChallengers.challengerCarId
                    },
                    include:{
                        gtWing: true,
                        lastPlayedPlace: true
                    }
                });

                // Car Target Available
                if(carTarget)
                {
                    // Get Advantage
                    let result = 0;
                    if(carChallengers.result > 0)
                    {
                        result = -Math.abs(carChallengers.result);
                    }
                    else{
                        result = Math.abs(carChallengers.result);
                    }

                    // Error handling if regionId is below 1 or above 47
                    if(carTarget!.regionId < 1 || carTarget!.regionId > 47)
                    {
                        carTarget!.regionId = Math.floor(Math.random() * 10) + 10;
                    }

                    // Push the data
                    challenger = wmproto.wm.protobuf.ChallengerCar.create({
                        car: carTarget,
                        stamp: carChallengers.stamp,
                        result: result, 
                        area: carChallengers.area
                    });
                }
            }

            // Get Number of Challengers
            numOfChallengers = opponentTargetCount + 1;
        }
    }
    

    return { challenger, challengerReturnCount, numOfChallengers }
}


// Create Car
export async function createCar(body: wm.protobuf.CreateCarRequest)
{
    // Get the current date/time (unix epoch)
    let date = Math.floor(new Date().getTime() / 1000);

    // Retrieve user from card chip / user id
    let user: User | null;

    // User ID provided, use that
    if (body.userId) 
    {
        user = await prisma.user.findFirst({
            where: {
                id: body.userId
            },
        });
    } 
    // No user id, use card chip
    else 
    { 
        user = await prisma.user.findFirst({
            where: {
                chipId: body.cardChipId,
                accessCode: body.accessCode
            },
        });
    }

    // User not found, terminate
    if (!user) throw new Error();

    // Sets if full tune is used or not
    // let fullyTuned = false;

    // 0: Stock Tune
    // 1: Basic Tune (600 HP)
    // 2: Fully Tuned (840 HP)
    let tune = 0;
    let itemId = 0;

    // If a user item has been used
    if (body.userItemId) 
    {
        let carUtilFunctions = await car_tune.createCarWithItem(body.userItemId);

        tune = carUtilFunctions.tune;
        itemId = carUtilFunctions.itemId;
    }
    // Other cases, may occur if item is not detected as 'used'
    // User item not used, but car has 740 HP by default
    else if (body.car && body.car.tunePower == 17 && body.car.tuneHandling == 17)
    {
        // Car is fully tuned
        tune = 2;
    }
    // User item not used, but car has 600 HP by default
    else if (body.car && body.car.tunePower == 10 && body.car.tuneHandling == 10)
    {
        // Car is basic tuned
        tune = 1;
    }
    // User item not used, but gift cars fully tuned switch is set
    else if (Config.getConfig().gameOptions.giftCarsFullyTuned)
    {
        // List of event / exclusive car IDs
        let event_cars = [
            0x7A, // Mini
            0x82, // S660
            0x83, // S2000
            0x89, // NDERC
            0x8B, // GS130 (Starts at 20 Stories by default)
        ]; 

        // If the car visual model is not null and is in the list of event cars
        if (body.car.visualModel && event_cars.includes(body.car.visualModel))
        {
            // Set full tune used to be true
            tune = 2;
        }
    }

    // Randomize pick
    let random: number = 1;
    let randomArray: number[] = [];

    // Randomize it 5 times
    while(randomArray.length < 5)
    { 
        // Pick random car Id
        random = Math.floor(Math.random() * 47) + 1;

        // Try randomize it again if it's 0, and fix if more than car length
        if(random < 1 || random > 47)
        {
            random = Math.floor(Math.random() * 47) + 1;
        }

        // Random Number not yet selected
        if(randomArray.indexOf(random) === -1)
        {
            // Push current number to array
            randomArray.push(random);
        }
    }

    // Pick the array number
    let pickRandom = Math.floor(Math.random() * randomArray.length);
    random = randomArray[pickRandom];

    // Default car values
    let carInsert = {
        userId: user.id,
        manufacturer: body.car.manufacturer!,
        defaultColor: body.car.defaultColor!,
        model: body.car.model!,
        visualModel: body.car.visualModel!,
        name: body.car.name!,
        title: body.car.title!,
        level: body.car.level!,
        tunePower: body.car.tunePower!,
        tuneHandling: body.car.tuneHandling!,
        regionId: random,
        lastPlayedAt: date,
        lastPlayedPlaceId: 1, // Server Default
    };

    return { carInsert, tune, user, itemId }
}


// Get Window Sticker
export async function getWindowSticker(userId: number) 
{
    // Check if user have more than one cars
    let checkWindowSticker = await prisma.car.findFirst({
        where: {
            userId: userId
        },
        select: {
            windowStickerString: true,
            windowStickerFont: true
        }
    });
    let additionalWindowStickerInsert = {};

    // If more than one cars, get the window sticker string
    if(checkWindowSticker)
    {
        additionalWindowStickerInsert = {
            windowStickerString: checkWindowSticker.windowStickerString,
            windowStickerFont: checkWindowSticker.windowStickerFont,
        }
    }
    
    return { additionalWindowStickerInsert }
}


// Get Car Tune
export async function getCarTune(tune: number, carInsert: any)
{
    // Additional car values (for basic / full tune)
    let additionalInsert = {};

    switch(tune)
	{
        // 0: Stock, nothing extra

        case 1: // Basic Tune

            // Updated default values
            carInsert.level = 2; // C8
            carInsert.tunePower = 10; // 600 HP
            carInsert.tuneHandling = 10; // 600 HP

            // Additional basic tune values
            additionalInsert = {
                ghostLevel: 4,
                stClearBits: 0,
                stLoseBits: 0,
                stClearCount: 20,
                stClearDivCount: 1,
                stConsecutiveWins: 20,
                stConsecutiveWinsMax: 20
            };
        break;

        case 2: // Fully Tuned

            // Updated default values
            carInsert.level = 8; // C3
            carInsert.tunePower = 17; // 740 HP
            carInsert.tuneHandling = 17; // 740 HP

            // Additional full tune values
            additionalInsert = {
                ghostLevel: 10,
                stClearBits: 0,
                stLoseBits: 0,
                stClearCount: 80,
                stClearDivCount: 4,
                stConsecutiveWins: 80,
                stConsecutiveWinsMax: 80
            };
    }

    return { additionalInsert }
}


// Car Order
export async function carOrder(carOrder: any, car: any, userId: number)
{
    // Add the new car to the front of the id
    carOrder.unshift(car.carId);

    // Add the car to the front of the order
    await prisma.user.update({
        where: {
            id: userId
        }, 
        data: {
            carOrder: carOrder
        }
    });

    console.log(`Created new car ${car.name} with ID ${car.carId}`);
}


// Update Car
export async function updateCar(body: wm.protobuf.UpdateCarRequest)
{
    // Get the ghost result for the car
    let cars = body?.car;

    // Declare data
    let data: any;

    // Get the current date/time (unix epoch)
    let date = Math.floor(new Date().getTime() / 1000);

    // Car is set
    if (cars)
    {
        // Car update data
        data = {
            customColor: common.sanitizeInput(cars.customColor),
            wheel: common.sanitizeInput(cars.wheel),
            wheelColor: common.sanitizeInput(cars.wheelColor), 
            aero: common.sanitizeInput(cars.aero),
            bonnet: common.sanitizeInput(cars.bonnet),
            wing: common.sanitizeInput(cars.wing),
            mirror: common.sanitizeInput(cars.mirror),
            neon: common.sanitizeInput(cars.neon),
            trunk: common.sanitizeInput(cars.trunk),
            plate: common.sanitizeInput(cars.plate),
            plateColor: common.sanitizeInput(cars.plateColor),
            plateNumber: common.sanitizeInput(cars.plateNumber),
            windowSticker: common.sanitizeInput(cars.windowSticker),
            windowDecoration: common.sanitizeInput(cars.windowDecoration), 
            rivalMarker: common.sanitizeInput(cars.rivalMarker),
            aura: common.sanitizeInput(cars.aura),
            auraMotif: common.sanitizeInput(cars.auraMotif),
            rgStamp: common.sanitizeInputNotZero(body.rgStamp),
            lastPlayedAt: date
        };

        // Update the car info
        await prisma.car.update({
            where: {
                carId: body.carId
            }, 
            data: data
        });
    }
}


// Update Car Setting
export async function updateCarSetting(body: wm.protobuf.UpdateCarRequest)
{
    // Get the car with the given id
    let car = await prisma.car.findFirst({
        where: {
            carId: body.carId
        },
        include: {
            settings: true,
            gtWing: true,
            lastPlayedPlace: true
        }
    });
    
    // Update the car settings
    await prisma.carSettings.update({
        where: {
            dbId: car?.carSettingsDbId,
        },
        data: {
            ...body.setting
        }
    });
}


// Update car Window Sticker
export async function updateCarWindowSticker(body: wm.protobuf.UpdateCarRequest)
{
    // Update the user data
    let userData = await prisma.car.findFirst({
        where:{
            carId: body.carId
        },
        select:{
            userId: true,
            windowStickerString: true
        }
    });

    // Newer window sticker string is different from the older one
    // Check if window sticker string is not null 
    // (windowStickerString value when changing custom color in driver unit is undefined)
    if(body.car?.windowStickerString)
    {
        if(userData!.windowStickerString !== body.car.windowStickerString){
            console.log('Updating Window Sticker');

            await prisma.car.updateMany({
                where: {
                    userId: userData!.userId
                }, 
                data: {
                    windowStickerString: body.car.windowStickerString,
                    windowStickerFont: body.car.windowStickerFont!
                }
            });
        }
    }
}


// Update Car Custom Wing
export async function updateCarCustomWing(body: wm.protobuf.UpdateCarRequest)
{
    // Update the GT Wing (custom wing) info
    // Get the GT Wing data for the car
    let gtWing = body.car?.gtWing;
    let dataGTWing: any;

    // GT Wing is set
    if (gtWing)
    {
        dataGTWing = {
            pillar: common.sanitizeInput(gtWing.pillar), 
            pillarMaterial: common.sanitizeInput(gtWing.pillarMaterial), 
            mainWing: common.sanitizeInput(gtWing.mainWing), 
            mainWingColor: common.sanitizeInput(gtWing.mainWingColor), 
            wingTip: common.sanitizeInput(gtWing.wingTip), 
            material: common.sanitizeInput(gtWing.material), 
        };

        await prisma.carGTWing.update({
            where: {
                dbId: body.carId
            }, 
            data: dataGTWing
        });
    }
    // Check if this is in getting new custom color screen or not
    else if(body.car?.carId !== null && body.car?.carId !== undefined)
    {
        // GT Wing not set
        if(gtWing === undefined || gtWing === null)
        {
            dataGTWing = {
                pillar: 0, 
                pillarMaterial: 0, 
                mainWing: 0, 
                mainWingColor: 0, 
                wingTip: 0, 
                material: 0, 
            };

            await prisma.carGTWing.update({
                where: {
                    dbId: body.carId
                }, 
                data: dataGTWing
            });
        }
    }
}


// Remove Used Ticket
export async function checkCreatedCar(body: wm.protobuf.CreateCarRequest, car: any, itemId: number)
{
    let cheated: boolean = false;

    let allCarVisualModel = [
        1, // ZR1T
        3, // CAMARO_MAT
        38, // Z31ANIV
        44, // R964
        45, // R997
        46, // RKC
        80, // MF10_MAT
        93, // R991
        99, // MXG
        100, // E89P
        102, // CAMAROT
        103, // R127P
        116, // ND5RC
        120, // RCT
        122, // R60
        125, // P400S
        126, // DIABLO
        130, // JW5
        131, // AP2
        133, // PS13
        137, // NDERC
        138, // UF31
        139, // GS130
    ];

    let carVisualModelWithoutItem = [
        1, // ZR1T
        3, // CAMARO_MAT
        38, // Z31ANIV
        44, // R964
        45, // R997
        46, // RKC
        80, // MF10_MAT
        93, // R991
        99, // MXG
        100, // E89P
        102, // CAMAROT
        103, // R127P
        116, // ND5RC
        120, // RCT
        125, // P400S
        126, // DIABLO
        133, // PS13
    ];

    // Check if user item id is not set and its a special car
    for(let i=0; i<allCarVisualModel.length; i++)
    {
        if(!(body.userItemId) && car.visualModel === allCarVisualModel[i])
        {
            cheated = true;

            return { cheated }
        }
    }

    // Check if user item id is set and its a special car cannot be created from ticket
    for(let i=0; i<carVisualModelWithoutItem.length; i++)
    {
        if(body.userItemId && car.visualModel === carVisualModelWithoutItem[i])
        {
            cheated = true;

            return { cheated }
        }
    }

    // Check if user item id is set and its a special car created from ticket
    if(car.visualModel === 122)
    {
        if(itemId < 7 || itemId > 15)
        {
            cheated = true;
        }
    }
    else if(car.visualModel === 130)
    {
        if(itemId < 22 || itemId > 27)
        {
            cheated = true;
        }
    }
    else if(car.visualModel === 131)
    {
        if(itemId < 28 || itemId > 36)
        {
            cheated = true;
        }
    }
    else if(car.visualModel === 137)
    {
        if(itemId !== 37)
        {
            cheated = true;
        }
    }
    else if(car.visualModel === 138)
    {
        if(itemId !== 39)
        {
            cheated = true;
        }
    }
    else if(car.visualModel === 139)
    {
        if(itemId !== 38)
        {
            cheated = true;
        }
    }
    else if(car.visualModel > 144)
    {
        cheated = true;
    }

    return { cheated }
}