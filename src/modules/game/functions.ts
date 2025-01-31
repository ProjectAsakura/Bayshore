import { prisma } from "../..";
import { Config } from "../../config";
import path from "path";
import fs from "fs";

// Import Proto
import { wm } from "../../wmmt/wm.proto";
import * as wmproto from "../../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";


// Get some item
export async function getItem(body: wm.protobuf.SaveGameResultRequest)
{
    // Get car item
    // Car item reward from the game is available
    if(body.earnedItems.length !== 0)
    {
        console.log('Car Item reward available, continuing ...');

        for(let i=0; i<body.earnedItems.length; i++){
            await prisma.carItem.create({
                data: {
                    carId: body.carId,
                    category: body.earnedItems[i].category,
                    itemId: body.earnedItems[i].itemId,
                    amount: 1
                }
            });
        }
    }

    // Get user item
    // User item reward from the game is available
    if(body.earnedUserItems.length !== 0)
    { 
        console.log('User Item reward available, continuing ...');

        for(let i=0; i<body.earnedUserItems.length; i++){
            let type = 0;

            if (body.earnedUserItems[i].category == 201) {
                type = 1
            } else {
                type = 0
            };

            await prisma.userItem.create({
                data: {
                    category: body.earnedUserItems[i].category,
                    itemId: body.earnedUserItems[i].itemId,
                    userId: body.car!.userId!,
                    earnedAt: 0,
                    type: type
                }
            });
        }
    }
}


// Update the Car
export async function updateCar(body: wm.protobuf.SaveGameResultRequest, car: any)
{
    // Check playet at timestamp
    let timestamps = 0;
    if(body.car?.lastPlayedAt !== undefined && body.car?.lastPlayedAt !== null)
    {
        if(body.car.lastPlayedAt !== 0)
        {
            timestamps = body.car.lastPlayedAt;
        }
        else
        {
            timestamps = Math.floor(new Date().getTime() / 1000);
        }
    }

    // Check P & H must not more than 34 (fully tuned value)
    let tunePower = 0;
    let tuneHandling = 0;
    let totalTune = body.car!.tunePower + body.car!.tuneHandling;
    if(totalTune <= 34)
    {
        tunePower = body.car!.tunePower;
        tuneHandling = body.car!.tuneHandling;
    }

    // Update car
    await prisma.car.update({
        where: {
            carId: body.carId,
        },
        data: {
            aura: body.car!.aura!,
            auraMotif: body.car!.auraMotif!,
            odometer: body.odometer,
            playCount: body.playCount,
            level: body.car!.level!,
            title: body.car!.title!,
            tunePower: tunePower,
            tuneHandling: tuneHandling,
            windowSticker: body.car!.windowSticker!,
            lastPlayedAt: timestamps,
            rgStamp: common.sanitizeInputNotZero(body.rgResult?.rgStamp),
            stampSheetCount: common.sanitizeInputNotZero(body.rgResult?.stampSheetCount)
        }
    })

    // Update car settings
    await prisma.carSettings.update({
        where: {
            dbId: car!.carSettingsDbId
        },
        data: {
            ...body.setting
        }
    });
}


// Update Car Order and Saving Tutorial
export async function updateOrderTutorial(body: wm.protobuf.SaveGameResultRequest)
{
    // Get User
    let user = await prisma.user.findFirst({
        where: {
            id: body.car!.userId!
        }
    });

    // User Available
    if (user)
    {
        // Get user tutorials
        let storedTutorials = user!.tutorials;

        // Update any seen tutorials
        body.confirmedTutorials.forEach(
            (idx) => storedTutorials[idx] = true
        );

        // Get the order of the user's cars
        let carOrder = user?.carOrder;

        // Get the index of the selected car
        let index = carOrder.indexOf(body.carId);

        // Only splice array when item is found
        if (index > -1) 
        { 
            carOrder.splice(index, 1); // 2nd parameter means remove one item only
        }

        // Add it back to the front
        carOrder.unshift(body.carId);

        // Otherwise, just ignore it

        // Update the values
        await prisma.user.update({
            where: {
                id: body.car!.userId!
            },
            data: {
                tutorials: storedTutorials, 
                carOrder: carOrder
            }
        });
    }
}


// Get User's Time Attack Record
export async function getTimeAttackRecord(body: wm.protobuf.LoadGameHistoryRequest)
{
    // Empty list of time attack records for the player's car
    let ta_records : wmproto.wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord[] = [];

    // Get the car's time attack records
    let records = await prisma.timeAttackRecord.findMany({
        where: {
            carId: body.carId
        }
    });

    // Loop over all of the records
    for(let record of records)
    {
        // This code could probably be done with less DB calls in the future

        // Calculate the total rank, total participants for the record
        let wholeData = await prisma.timeAttackRecord.findMany({
            where: {
                course: record.course
            }, 
            orderBy: {
                time: 'asc'
            }
        });

        // Get the overall number of participants
        let wholeParticipants = wholeData.length;

        // Whole rank (default: 1)
        let wholeRank = 1;

        // Loop over all of the participants
        for(let row of wholeData)
        {
            // If the car ID does not match
            if (row.carId !== body.carId)
            {
                // Increment whole rank
                wholeRank++; 
            }
            else // Model ID matches
            {
                // Break the loop
                break;
            }
        }

        // Calculate the model rank, model participants for the record
        let modelData = await prisma.timeAttackRecord.findMany({
            where: {
                course: record.course, 
                model: record.model
            }, 
            orderBy: {
                time: 'asc'
            }
        });

        // Get the overall number of participants (with the same car model)
        let modelParticipants = modelData.length;

        // Model rank (default: 1)
        let modelRank = 1;

        // Loop over all of the participants
        for(let row of modelData)
        {
            // If the car ID does not match
            if (row.carId !== body.carId)
            {
                // Increment whole rank
                modelRank++; 
            }
            else // Model ID matches
            {
                // Break the loop
                break;
            }
        }

        // Generate the time attack record object and add it to the list
        ta_records.push(wmproto.wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord.create({
            course: record.course, 
            time: record.time, 
            tunePower: record.tunePower,
            tuneHandling: record.tuneHandling,
            wholeParticipants: wholeParticipants, 
            wholeRank: wholeRank, 
            modelParticipants: modelParticipants, 
            modelRank: modelRank
        }));
    }

    // Get the current date/time (unix epoch)
    let date = Math.floor(new Date().getTime() / 1000);

    return { ta_records, date }
}


// Get User's Ghost Battle Record
export async function getGhostBattleRecord(body: wm.protobuf.LoadGameHistoryRequest)
{
    // Get user ghost battle mode history data
    let ghostHistoryData = await prisma.ghostBattleRecord.findMany({
        where: {
            carId: body.carId,
        }, 
        orderBy: {
            playedAt: 'desc'
        },
        take: 3
    });

    // Empty list of ghost battle history records for the player's car
    let ghostBattle_records: wmproto.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord[] = [];
    for(let i=0; i<ghostHistoryData.length; i++)
    {
        // User car setting
        let carSetings = wmproto.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting.create({
            tunePower: ghostHistoryData![i].tunePower,
            tuneHandling: ghostHistoryData![i].tuneHandling,
        });

        // ----Ghost Opponent 1----
        let ghostOpponentCar = await prisma.car.findFirst({
            where: {
                carId: ghostHistoryData![i].opponent1CarId!
            }
        });

        // If opponent is default ghost or random ghost
        if(!(ghostOpponentCar))
        { 
            ghostOpponentCar = await prisma.car.findFirst({});
            ghostOpponentCar!.name = 'Ｓ６６０';
            ghostOpponentCar!.manufacturer = 12;
            ghostOpponentCar!.model = 105;
            ghostOpponentCar!.visualModel = 130;
            ghostOpponentCar!.regionId = 18;
            ghostOpponentCar!.country = 'IDN';
        }

        // Get Opponent 1 tune
        ghostOpponentCar!.tunePower = ghostHistoryData![i].opponent1TunePower!; 
        ghostOpponentCar!.tuneHandling = ghostHistoryData![i].opponent1TuneHandling!;

        // Get the Data
        let ghostOpponent = wmproto.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar.create({
            car: {
                ...ghostOpponentCar!
            },
            result: ghostHistoryData![i].opponent1Result!
        });
        // ------------------------

        // ----Ghost Opponent 2 & 3----
        // Empty list of ghost battle records for the player's car
        let ghostMob: wmproto.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar[] = [];

        // ----Ghost Opponent 2----
        if(ghostHistoryData[i]?.opponent2CarId !== null && ghostHistoryData[i]?.opponent2CarId !== undefined)
        {
            let ghostOpponentCar2 = await prisma.car.findFirst({
                where: {
                    carId: ghostHistoryData![i].opponent2CarId!
                }
            });

            // If opponent is default ghost or random ghost
            if(!(ghostOpponentCar2))
            {
                ghostOpponentCar2 = await prisma.car.findFirst({});
                ghostOpponentCar2!.name = 'Ｓ６６０';
                ghostOpponentCar2!.manufacturer = 12;
                ghostOpponentCar2!.model = 105;
                ghostOpponentCar2!.visualModel = 130;
                ghostOpponentCar2!.regionId = 18;
                ghostOpponentCar2!.country = 'IDN';
            }

            // Get Opponent 2 tune
            ghostOpponentCar2!.tunePower = ghostHistoryData![i].opponent2TunePower!;
            ghostOpponentCar2!.tuneHandling = ghostHistoryData![i].opponent2TuneHandling!;

            // Get the Data
            ghostMob.push(wmproto.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar.create({
                car: {
                    ...ghostOpponentCar2!
                },
                result: ghostHistoryData![i].opponent2Result!
            }));
        }
        // ------------------------

        // ----Ghost Opponent 3----
        if(ghostHistoryData[i]?.opponent3CarId !== null && ghostHistoryData[i]?.opponent3CarId !== undefined)
        {
            let ghostOpponentCar3 = await prisma.car.findFirst({
                where: {
                    carId: ghostHistoryData![i].opponent3CarId!
                }
            });

            // If opponent is default ghost or random ghost
            if(!(ghostOpponentCar3))
            { 
                ghostOpponentCar3 = await prisma.car.findFirst({});
                ghostOpponentCar3!.name = 'Ｓ６６０';
                ghostOpponentCar3!.manufacturer = 12;
                ghostOpponentCar3!.model = 105;
                ghostOpponentCar3!.visualModel = 130;
                ghostOpponentCar3!.regionId = 18;
                ghostOpponentCar3!.country = 'IDN';
            }

            // Get Opponent 3 tune
            ghostOpponentCar3!.tunePower = ghostHistoryData![i].opponent3TunePower!;
            ghostOpponentCar3!.tuneHandling = ghostHistoryData![i].opponent3TuneHandling!;

            // Get the Data
            ghostMob.push(wmproto.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar.create({
                car: {
                    ...ghostOpponentCar3!
                },
                result: ghostHistoryData![i].opponent3Result!
            }));
        }
        // ----------------------------
        
        // Push the ghost battle history data
        ghostBattle_records.push(wmproto.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.create({ 
            carSetting: carSetings,
            opponent: ghostOpponent,
            mobs: ghostMob || null,
            area: ghostHistoryData![i].area,
            playedAt: ghostHistoryData![i].playedAt,
            playedShopName: ghostHistoryData![i].playedShopName
        }));
    }

    return { ghostBattle_records }
}


// Save Screenshot
export async function saveScreenshot(body: wm.protobuf.SaveScreenshotRequest)
{
    // Check if screenshot feature enabled or not
    let enableScreenshot = Config.getConfig().gameOptions.enableScreenshot || 0;

    // Screenshot feature enabled
    if(enableScreenshot === 1)
    {
        let filename: string | undefined = undefined;

        filename = `${body.timestamp}_${body.carId}_${body.imageType}.png`;

        let dir = path.join('screenshot');

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        // Combine the filename with the save location
        let fullname = path.join('screenshot', filename);

        // Attempt to write to the file
        fs.writeFile(fullname, body.image, (err) => {
            if (err)
            {
                console.log(err);
            }   
            else 
            {
                console.log(`Screenshot saved successfully as '${filename}'`)
            }
        });
    }
}