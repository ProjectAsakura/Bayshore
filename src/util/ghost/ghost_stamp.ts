import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";

// Import Util
import * as ghost_get_area_from_path from "../ghost/ghost_util/ghost_get_area_from_path";


export async function sendStamp(body: wm.protobuf.SaveGameResultRequest)
{
    console.log('Sending Stamp');

    let rgResult = body.rgResult

    if(rgResult)
    {
        // Stamp must bigger than 0
        if(rgResult.rgStamp === 0)
        {
            rgResult.rgStamp = 1;
        }

        let area;
        if(rgResult.path)
        {
            let getArea = await ghost_get_area_from_path.getArea(rgResult.path);

            area = getArea.area;
        }

        // Check how many opponents available
        for(let i=0; i<rgResult.opponents!.length; i++)
        {
            let checkCar = await prisma.car.findFirst({
                where:{
                    carId: rgResult.opponents![i].carId,
                    NOT:{
                        userId: body.car!.userId!
                    }
                },
                include:{
                    gtWing: true,
                    lastPlayedPlace: true
                }
            })

            if(checkCar)
            {
                let returnCounts = 1;

                let dataChallenger: any = {
                    carId: body.carId,
                    challengerCarId: rgResult.opponents![i].carId,
                    stamp: rgResult.rgStamp,
                    result: rgResult.opponents![i].result,
                    area: area
                }
    
                let dataStampTarget: any = {
                    carId: body.carId,
                    stampTargetCarId: rgResult.opponents![i].carId,
                    returnCount: returnCounts,
                    locked: false,
                    recommended: true
                } 

                // Check available stamp
                let stampTarget = await prisma.carStampTarget.findFirst({
                    where:{
                        carId: body.carId,
                        stampTargetCarId: rgResult.opponents![i].carId,
                    }
                })

                if(stampTarget)
                {
                    dataStampTarget.returnCount = stampTarget.returnCount + 1;

                    console.log('Updating stamp entry');

                    await prisma.carChallenger.update({
                        where:{
                            id: stampTarget.id
                        },
                        data: dataChallenger
                    })

                    await prisma.carStampTarget.update({
                        where:{
                            id: stampTarget.id
                        },
                        data: dataStampTarget
                    })
                }
                else
                {
                    console.log('Creating new stamp entry');

                    await prisma.carChallenger.create({
                        data: dataChallenger
                    })
    
                    await prisma.carStampTarget.create({
                        data: dataStampTarget
                    })
                }
            }
        } 
    }
}


export async function shuttleReturnStamp(body: wm.protobuf.SaveGameResultRequest)
{
    console.log('Returning Stamp');

    let rgResult = body.rgResult

    if(rgResult)
    {
        // Stamp must bigger than 0
        if(rgResult.rgStamp === 0)
        {
            rgResult.rgStamp = 1;
        }

        // Check how many opponents available
        for(let i=0; i<rgResult.opponents!.length; i++)
        {
            let checkCar = await prisma.car.findFirst({
                where:{
                    carId: rgResult.opponents![i].carId,
                    NOT:{
                        userId: body.car!.userId!
                    }
                },
                include:{
                    gtWing: true,
                    lastPlayedPlace: true
                }
            })

            if(checkCar)
            {
                // Check opponents target
                let opponentTarget = await prisma.carStampTarget.findFirst({
                    where:{
                        stampTargetCarId: body.carId,
                        carId: rgResult.opponents![i].carId,
                    }
                })

                if(opponentTarget)
                {
                    await prisma.carStampTarget.update({
                        where: {
                            id: opponentTarget.id
                        },
                        data:{
                            locked: true,
                            recommended: false
                        }
                    })
                }
            }
        }
    }
}