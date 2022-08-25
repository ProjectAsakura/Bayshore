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
        /*where: {
            itemId: { notIn: [2, 3, 5, 6, 29, 30, 31, 32, 33 ,34] },
        },*/
    })
    let itemIdVal = 0;
    if(carItemCount === 0){
        itemIdVal = 1; // Namco Meter
    }
    else if(carItemCount === 1){
        itemIdVal = 4; // Special Meter
    }
    else if(carItemCount === 2){
        itemIdVal = 7; // Metal 1 (Black)
    }
    else if(carItemCount === 3){
        itemIdVal = 8; // Metal 2 (Red)
    }
    else if(carItemCount === 4){
        itemIdVal = 9; // Cyber 1 (Blue)
    }
    else if(carItemCount === 5){
        itemIdVal = 10; // Cyber 2 (Red)
    }
    else if(carItemCount === 6){
        itemIdVal = 11; // Aluminium 1 (Blue)
    }
    else if(carItemCount === 7){
        itemIdVal = 12; // Aluminium 1 (Red)
    }
    else if(carItemCount === 8){
        itemIdVal = 13; // Jungle 1 (Green)
    }
    else if(carItemCount === 9){
        itemIdVal = 14; // Jungle 2 (Brown)
    }
    else if(carItemCount === 10){
        itemIdVal = 15; // Dessert 1 (Red)
    }
    else if(carItemCount === 11){
        itemIdVal = 16; // Dessert 2 (Brown)
    }
    else if(carItemCount === 12){
        itemIdVal = 17; // Pirate 1 (Red)
    }
    else if(carItemCount === 13){
        itemIdVal = 18; // Pirate 2 (Blue)
    }
    else if(carItemCount === 14){
        itemIdVal = 19; // Fire Pattern 1 (Red)
    }
    else if(carItemCount === 15){
        itemIdVal = 20; // Fire Pattern 2 (Blue)
    }
    else if(carItemCount === 16){
        itemIdVal = 21; // Silver Access
    }
    else if(carItemCount === 17){
        itemIdVal = 22; // Gold Access
    }
    else if(carItemCount === 18){
        itemIdVal = 23; // Steampunk 1 (Gold)
    }
    else if(carItemCount === 19){
        itemIdVal = 24; // Steampunk 2 (Green)
    }
    else if(carItemCount === 20){
        itemIdVal = 25; // Dragon 1 (Gold)
    }
    else if(carItemCount === 21){
        itemIdVal = 26; // Dragon 2 (Blue)
    }
    else if(carItemCount === 22){
        itemIdVal = 27; // Light Line 1 (Blue)
    }
    else if(carItemCount === 23){
        itemIdVal = 28; // Light Line 2 (Orange)
    }

    if(itemIdVal !== 0){
        console.log(`carID ${body.carId} do n*100 play, continue give reward... meter ID ${itemIdVal}`);
        await prisma.carItem.create({
            data: {
                carId: body.carId,
                category: 15,
                itemId: itemIdVal,
                amount: 1
            }
        });
    }   
}