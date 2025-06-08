import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";


// Save story result
export async function giveMeterRewards(body: wm.protobuf.SaveGameResultRequest)
{
    // Get user's available meter data
    let carItemCount = await prisma.carItem.count({ 
        where: {
            carId: body.carId,
            category: 15,
            itemId: {
                lte: 34,
                gte: 1,
            },
            NOT: {
                itemId: { in: [2, 3, 5, 6, 29, 30, 31, 32, 33 ,34] }, // Except story meter
            },
        },
    })
    let itemIdVal = 0;
    switch (carItemCount)
    {
        case 0:
            itemIdVal = 1; // Namco Meter
            break;

        case 1:
            itemIdVal = 4; // Special Meter
            break;

        default:
            if (carItemCount >= 2 && carItemCount <= 23) {
                itemIdVal = carItemCount + 5; // Metal 1 (Black) to Light Line 2 (Orange)
            }
    }

    if(itemIdVal !== 0){
        let itemCheck = await prisma.carItem.findFirst({
            where: {
                carId: body.carId,
                category: 15,
                itemId: itemIdVal,
                amount: 1
            }
        });

        if (!itemCheck) {
            console.log(`carID ${body.carId} do n*100 play, continue give reward... meter ID ${itemIdVal}`);
            await prisma.carItem.create({
                data: {
                    carId: body.carId,
                    category: 15,
                    itemId: itemIdVal,
                    amount: 1,
                    earnedAt: Math.floor(new Date().getTime() / 1000)
                }
            });
        }
    }
}