import { isRateLimited } from "@sentry/utils";
import { prisma } from "..";
import { Config } from "../config";
import * as wm from "../wmmt/wm.proto";

// *** CONSTANTS ***

// Scratch Sheets
let scratchSheets = [
    [ // Sheet 1
        [201, 4], // R2

        // Window Stickers
        [25, 8], [25, 8], [25, 8], [25, 8], [25, 8], // BAT
        [25, 6], [25, 6], [25, 6], [25, 6], [25, 6], // SPEAR
        [25, 24], [25, 24], [25, 24], [25, 24], [25, 24], // PULSE
        [25, 3], [25, 3], [25, 3], [25, 3], [25, 3], // CIRCLE
        [25, 14], [25, 14], [25, 14], [25, 14], [25, 14], // TRIBAL
    
        // Rival Markers
        [26, 18], [26, 18], [26, 18], [26, 18], // LIGHTNING
        [26, 2], [26, 2], [26, 2], [26, 2], // NEON
        [26, 31], [26, 31], [26, 31], [26, 31], // V
        [26, 40], [26, 40], [26, 40], [26, 40], // NEW DRIVER
        [26, 1], [26, 1], [26, 1], [26, 1], // FIRE
        [26, 17], [26, 17], [26, 17], [26, 17], // TROPICAL
    ], 
    [ // Sheet 2
        [201, 3], //  Corolla
        
        // Window Stickers
        [25, 11], [25, 11], [25, 11], [25, 11], [25, 11], // Thunderbolt
        [25, 4], [25, 4], [25, 4], [25, 4], [25, 4], // Circle 2
        [25, 28], [25, 28], [25, 28], [25, 28], [25, 28], // Wangan URL
        [25, 5], [25, 5], [25, 5], [25, 5], [25, 5], // Triangle
        [25, 16], [25, 16], [25, 16], [25, 16], [25, 16], // Cards

        // Rival Markers
        [26, 9], [26, 9], [26, 9], [26, 9], // GRAFFITI
        [26, 6], [26, 6], [26, 6], [26, 6], // CASUAL
        [26, 19], [26, 19], [26, 19], [26, 19], // WALL
        [26, 29], [26, 29], [26, 29], [26, 29], // BAT
        [26, 2], [26, 2], [26, 2], [26, 2], // ANIMAL
        [26, 8], [26, 8], [26, 8], [26, 8], // PAINT SPLASH
    ], 
    [ // Sheet 3 (Incomplete)
        [201, 1], // Hiace Van

        // Window Stickers
        [25, 13], [25, 13], [25, 13], [25, 13], [25, 13], // Arrow
        [25, 9], [25, 9], [25, 9], [25, 9], // Star
        [25, 7], [25, 7], [25, 7], [25, 7], // Snake
        [25, 18], [25, 18], [25, 18], [25, 18], // Heart
        [25, ], [25, ], [25, ], [25, ], // ????

        // Rival Markers
        [26, 36], [26, 36], [26, 36], [26, 36], // Pinstripe
        [26, 5], [26, 5], [26, 5], [26, 5], // Dangerous
        [26, 14], [26, 14], [26, 14], [26, 14], // Relief
        [26, 34], [26, 34], [26, 34], [26, 34], // Diamond
        [26, 4], [26, 4], [26, 4], [26, 4], // Metal
        [26, 10], [26, 10], [26, 10], [26, 10], // Japonism
        [26, 20], [26, 20], [26, 20], [26, 20], // Reggae
    ], 
    [ // Sheet 4 (Incomplete)
        [201, 2], // Pajero Evolution

        // Window Stickers
        [25, 21], [25, 21], [25, 21], [25, 21], [25, 21], // Plum Blossoms
        [25, 12], [25, 12], [25, 12], [25, 12], // Illumination
        [25, 10], [25, 10], [25, 10], [25, 10], // Shooting Star
        [25, 20], [25, 20], [25, 20], [25, 20], // Raimo
        [25, ], [25, ], [25, ], [25, ], // ????

        // Rival Markers
        [26, 7], [26, 7], [26, 7], [26, 7], // Flowers
        [26, 16], [26, 16], [26, 16], [26, 16], // Wood
        [26, 24], [26, 24], [26, 24], [26, 24], // Studded
        [26, 33], [26, 33], [26, 33], [26, 33], // Heart
        [26, 15], [26, 15], [26, 15], [26, 15], // Camo
        [26, 21], [26, 21], [26, 21], [26, 21], // Decoration
        [26, 30], [26, 30], [26, 30], [26, 30], // Effect
    ], 
    [ // Sheet 5 (Incomplete)
        [201, 5], // Nismo GT-R (Black)

        // Window Stickers
        [25, 26], [25, 26], [25, 26], [25, 26], [25, 26], // Paint
        [25, 29], [25, 29], [25, 29], [25, 29], // Galaga
        [25, 23], [25, 23], [25, 23], [25, 23], // Maze
        [25, 2], [25, 2], [25, 2], [25, 2], // Fire Pattern 2
        [25, ], [25, ], [25, ], [25, ], // ????

        // Rival Markers
        [26, 39], [26, 39], [26, 39], [26, 39], // Silver Accessory
        [26, 22], [26, 22], [26, 22], [26, 22], // Tropical 2
        [26, 25], [26, 25], [26, 25], [26, 25], // Casual 2
        [26, 28], [26, 28], [26, 28], [26, 28], // Guitar Pick
        [26, 12], [26, 12], [26, 12], [26, 12], // Mechanical
        [26, 23], [26, 23], [26, 23], [26, 23], // Monogram
        [26, 27], [26, 27], [26, 27], [26, 27], // Carbon
    ], 
    [ // Sheet 6 (Incomplete)
        [201, 6], // Fairlady Z (Nismo)

        // Window Stickers
        [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], // Equaliser
        [25, 17], [25, 17], [25, 17], [25, 17], // Cards 2
        [25, 30], [25, 30], [25, 30], [25, 30], // Pac-Man
        [25, 22], [25, 22], [25, 22], [25, 22], // Seigaiha
        [25, ], [25, ], [25, ], [25, ], // ????

        // Rival Markers
        [26, 38], [26, 38], [26, 38], [26, 38], // Hex
        [26, 13], [26, 13], [26, 13], [26, 13], // Cosmos
        [26, 35], [26, 35], [26, 35], [26, 35], // Fire Pattern
        [26, 32], [26, 32], [26, 32], [26, 32], // Feather
        [26, 11], [26, 11], [26, 11], [26, 11], // Silvercraft
        [26, 26], [26, 26], [26, 26], [26, 26], // Graffiti 2
        [26, 37], [26, 37], [26, 37], [26, 37], // Arrow of Light
    ], 
    [ // Sheet 7 (Incomplete)
        [201, 16], // Aristo (Taxi)

        // Window Stickers
        [25, 32], [25, 32], [25, 32], [25, 32], [25, 32], // Emotion
        [25, 17], [25, 17], [25, 17], [25, 17], // Pine
        [25, 30], [25, 30], [25, 30], [25, 30], // Love
        // [25, 22], [25, 22], [25, 22], [25, 22], // Square
        [25, 35], [25, 35], [25, 35], [25, 35], [25, 35], // Trap

        // Rival Markers
        [26, 38], [26, 38], [26, 38], [26, 38], // Shuriken
        [26, 13], [26, 13], [26, 13], [26, 13], // Electronics
        [26, 35], [26, 35], [26, 35], [26, 35], // Paint Splash 2
        [26, 32], [26, 32], [26, 32], [26, 32], // Katana
        [26, 11], [26, 11], [26, 11], [26, 11], // Steel
        [26, 26], [26, 26], [26, 26], [26, 26], // Wall 2
    ], 
]

// Terminal scratch cars only
export const scratchCars = [
    4, 3, 1, 2, 5, 6, 16, 17, 18, 19, 20, 21
]

// Fully tuned special cars
export const fullyTunedCars = [
    4, 3, 1, 2, 5, 6, 16, 17, 18, 19, 20, 21, 39
];

// Basic tuned special cars
export const basicTunedCars = [
    38
];

// Stock tuned special cars
export const stockTunedCars = [
    7, 8, 9, 10, 11, 12, 13, 14, 15, 
    22, 23, 24, 25, 26, 27, 37, 28, 
    29, 30, 31, 32, 33, 34, 35, 36
];

// Non-story racing meters
const nonStoryMeters = [

    // Meters are added
    // to scratch as a set

    // Namco / Special Meters
    [1,4],

    // VSORG / Other Meters
    [8, 9], 
    [10, 11], 
    [12, 13],
    [14, 15], 
    [16, 17],
    [18, 19], 
    [20, 21], 
    [22, 23], 
    [24, 25], 
    [26, 27]
];

// *** FUNCTIONS *** 

// Get a random integer within a range
function getRandom(a: number, b: number)
{
    // Return a random integer within the range
    return Math.floor(Math.random() * (b - a)) + a;
}

// Generates a random scratch sheet
// Contents: 
// 1 Random Scratch Car
// 25 Random Scratch Stickers
// 24 Random Scratch Versus Markers
function getRandomScratchSheet () 
{
    // Scratch items list
    let items : number[][] = [];
    
    // Add the random scratch car
    items.push([201, scratchCars[getRandom(0, scratchCars.length)]])

    // Add the random scratch stickers

    // Five different sticker styles
    for(let i=0; i<5; i++)
    {
        // Get a random versus marker
        let marker = getRandom(0, 61);

        // Five different instances
        for(let j=0; j<5; j++)
        {
            // Add marker to the list
            items.push([25, marker])
        }
    }

    // Add the random versus markers

    // Six different marker styles
    for(let i=0; i<6; i++)
    {
        // Get a random versus marker
        let marker = getRandom(0, 81);

        // Four different instances
        for(let j=0; j<4; j++)
        {
            // Add marker to the list
            items.push([26, marker])
        }
    }
    
    // Return the items list
    return items;
}

// Fisher yates shuffle for the scratch card elements
function shuffleScratchSheet (array: number[][])
{
    // Loop over all of the array elements
    for (let i = array.length - 1; i > 0; i--) 
    {
        // Randomly swap items in the array
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // Return the sorted array
    return array;
}

// Async function for generating a new scratch sheet
export async function generateScratchSheet (userId: number, sheetNo: number)
{
    // Scratch items list
    let scratchItems : number[][] = [];

    // Get the scratch sheet type
    let scratchType = Config.getConfig().gameOptions.scratchType;

    // Switch on the scratch sheet type in the config
    switch(scratchType)
    {
        // More options maybe added in the future
        
        case 0: // Same as actual game

            // If the sheet number has associated data
            if (scratchSheets.length >= sheetNo)
            {
                // Get the data for the requested sheet
                scratchItems = scratchSheets[sheetNo-1];
            }
            else // Sheet is out of range
            {
                console.log("No data for sheet:", sheetNo);
            }
            
            break;

        case 1: // Infinite random scratch sheets (Standard Items)

            // Generate a random (standard) scratch sheet
            scratchItems = getRandomScratchSheet();

        default: // Not implemented
            console.log("Method not implemented: " + scratchType);
            break;
    }
    
    // If there is at LEAST one scratch item
    if (scratchItems.length > 0)
    {
        // Create a new scratch sheet for the user
        let sheet = await prisma.scratchSheet.create({
            data: {
                userId: userId, 
                sheetNo: sheetNo
            }
        });

        // Shuffle the scratch items list
        scratchItems = shuffleScratchSheet(scratchItems);

        // Populate the scratch sheet with the items
        for (let item of scratchItems) {
            await prisma.scratchSquare.create({
                data: {
                    sheetId: sheet.id, 
                    category: item[0], 
                    itemId: item[1],
                    earned: false
                }
            });
        }
    }
    else // No scratch items
    {
        console.log("No scratch items. Sheet not created");
    }
}

export async function getScratchItemList (userId: number, date: number)
{
    // Owned user items list
    let ownedUserItems : wm.wm.protobuf.UserItem[] = [];

    // Get all of the user's scratch items from the database
    let scratchUserItems = await prisma.userItem.findMany({
        where: {
            userId: userId, 
            type: 1 // Scratch Item
        }
    });

    // Loop over all of the returned items
    for(let item of scratchUserItems)
    {
        // Add all of the scratch items to the list
        ownedUserItems.push(wm.wm.protobuf.UserItem.create({
            category: item.category, 
            itemId: item.itemId, 
            userItemId: item.userItemId,
            earnedAt: item.earnedAt
            // no expiration date
        }));
    }

    // Return the owned user items list
    return ownedUserItems;
}

export async function getScratchSheetProto (userId: number)
{
    // Scratch sheet proto
    let scratchSheetProto : wm.wm.protobuf.ScratchSheet[] = [];

    // Get all of the scratch sheets for the user
    let scratchSheets = await prisma.scratchSheet.findMany({
        where: {
            userId: userId
        },
        include: {
            squares: {
                orderBy: {
                    id: 'asc'
                }
            }
        }
    });

    // Loop over all of the protos
    for(let sheet of scratchSheets)
    {
        // Get all of the scratch squares
        let scratchSquareProto : wm.wm.protobuf.ScratchSheet.ScratchSquare[] = [];

        // Loop over all of the squares
        for (let square of sheet.squares)
        {
            // Add the current square to the protobuf array
            scratchSquareProto.push(wm.wm.protobuf.ScratchSheet.ScratchSquare.create({
                category: square.category, 
                itemId: square.itemId, 
                earned: square.earned
            }));
        }

        // Add the scratch sheet to the sheets list
        scratchSheetProto.push(
            wm.wm.protobuf.ScratchSheet.create({
                squares: scratchSquareProto
            })
        );
    }

    // Return the scratch sheet proto object
    return scratchSheetProto;
}