import { Config } from "../../config";
import { prisma } from "../..";

// Import Util
import * as scratch from "../terminal/scratch";


// Create Car With Item
export async function createCarWithItem(userItemId: number)
{
    console.log(`Item used - ID ${userItemId}`);

    // Remove the user item from the database
    let item = await prisma.userItem.delete({
        where: {
            userItemId: userItemId
        }
    });
    let tune = 0;
    let itemId = item.itemId;

    console.log('Item deleted!');

    switch(item.category)
    {
        case 203: // Car Tune Ticket

            // Switch on item id
            switch(item.itemId)
            {
                // Discarded Vehicle Card
                case 1: tune = 1; break;
                case 2: tune = 1; break;
                case 3: tune = 1; break;

                // Fully Tuned Ticket
                case 5: tune = 2; break;

                default: // Unknown item type, throw unsupported error
                    throw Error("Unsupported itemId: " + item.itemId); 
            }
            break;

        case 201: // Special Car Ticket

            // Fully tuned special cars
            if (scratch.fullyTunedCars.includes(item.itemId))
            {
                // Car is fully tuned
                tune = 2;
            }
            // Basic tuned special cars
            if (scratch.basicTunedCars.includes(item.itemId))
            {
                // If gift cars fully tuned is set
                if (Config.getConfig().gameOptions.giftCarsFullyTuned)
                {
                    // Car is fully tuned
                    tune = 2;
                }
                else // Gift cars fully tuned not set
                {
                    // Car is basic tuned
                    tune = 1;
                }
            }
            // Stock tuned special cars
            if (scratch.stockTunedCars.includes(item.itemId))
            {
                // If gift cars fully tuned is set
                if (Config.getConfig().gameOptions.giftCarsFullyTuned)
                {
                    // Car is fully tuned
                    tune = 2;
                }
                else // Gift cars fully tuned not set
                {
                    // Car is stock
                    tune = 0;
                }
            }
            break;
    }
    console.log(`Item category was ${item.category} and item game ID was ${itemId}`);

    return { tune, itemId }
}