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
    [ // Sheet 3 
        [201, 1], // Hiace Van

        // Window Stickers
        [25, 13], [25, 13], [25, 13], [25, 13], [25, 13], // Arrow
        [25, 9], [25, 9], [25, 9], [25, 9], // Star
        [25, 7], [25, 7], [25, 7], [25, 7], // Snake
        [25, 18], [25, 18], [25, 18], [25, 18], // Heart
        [25, 1], [25, 1], [25, 1], [25, 1], // ????
        // Rival Markers
        [26, 36], [26, 36], [26, 36], [26, 36], // Pinstripe
        [26, 5], [26, 5], [26, 5], [26, 5], // Dangerous
        [26, 14], [26, 14], [26, 14], [26, 14], // Relief
        [26, 34], [26, 34], [26, 34], [26, 34], // Diamond
        [26, 4], [26, 4], [26, 4], [26, 4], // Metal
        [26, 10], [26, 10], [26, 10], [26, 10], // Japonism
        [26, 20], [26, 20], [26, 20], [26, 20], // Reggae
    ],
    [ // Sheet 4 
        [201, 2], // Pajero Evolution

        // Window Stickers
        [25, 21], [25, 21], [25, 21], [25, 21], [25, 21], // Plum Blossoms
        [25, 12], [25, 12], [25, 12], [25, 12], // Illumination
        [25, 10], [25, 10], [25, 10], [25, 10], // Shooting Star
        [25, 20], [25, 20], [25, 20], [25, 20], // Raimo
        [25, 27], [25, 27], [25, 27], [25, 27], // ????

        // Rival Markers
        [26, 7], [26, 7], [26, 7], [26, 7], // Flowers
        [26, 16], [26, 16], [26, 16], [26, 16], // Wood
        [26, 24], [26, 24], [26, 24], [26, 24], // Studded
        [26, 33], [26, 33], [26, 33], [26, 33], // Heart
        [26, 15], [26, 15], [26, 15], [26, 15], // Camo
        [26, 21], [26, 21], [26, 21], [26, 21], // Decoration
        [26, 30], [26, 30], [26, 30], [26, 30], // Effect
    ],
    [ // Sheet 5 
        [201, 5], // Nismo GT-R (Black)

        // Window Stickers
        [25, 26], [25, 26], [25, 26], [25, 26], [25, 26], // Paint
        [25, 29], [25, 29], [25, 29], [25, 29], // Galaga
        [25, 23], [25, 23], [25, 23], [25, 23], // Maze
        [25, 2], [25, 2], [25, 2], [25, 2], // Fire Pattern 2
        [25, 19], [25, 19], [25, 19], [25, 19], // ????

        // Rival Markers
        [26, 39], [26, 39], [26, 39], [26, 39], // Silver Accessory
        [26, 22], [26, 22], [26, 22], [26, 22], // Tropical 2
        [26, 25], [26, 25], [26, 25], [26, 25], // Casual 2
        [26, 28], [26, 28], [26, 28], [26, 28], // Guitar Pick
        [26, 12], [26, 12], [26, 12], [26, 12], // Mechanical
        [26, 23], [26, 23], [26, 23], [26, 23], // Monogram
        [26, 27], [26, 27], [26, 27], [26, 27], // Carbon
    ],
    [ // Sheet 6 
        [201, 6], // Fairlady Z (Nismo)

        // Window Stickers
        [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], // Equaliser
        [25, 17], [25, 17], [25, 17], [25, 17], // Cards 2
        [25, 30], [25, 30], [25, 30], [25, 30], // Pac-Man
        [25, 22], [25, 22], [25, 22], [25, 22], // Seigaiha
        [25, 15], [25, 15], [25, 15], [25, 15], // ????

        // Rival Markers
        [26, 38], [26, 38], [26, 38], [26, 38], // Hex
        [26, 13], [26, 13], [26, 13], [26, 13], // Cosmos
        [26, 35], [26, 35], [26, 35], [26, 35], // Fire Pattern
        [26, 32], [26, 32], [26, 32], [26, 32], // Feather
        [26, 11], [26, 11], [26, 11], [26, 11], // Silvercraft
        [26, 26], [26, 26], [26, 26], [26, 26], // Graffiti 2
        [26, 37], [26, 37], [26, 37], [26, 37], // Arrow of Light
    ],
    [ // Sheet 7 
        [201, 16], // Aristo (Taxi)

        // Window Stickers
        [25, 31], [25, 31], [25, 31], [25, 31], [25, 31], // Love
        [25, 32], [25, 32], [25, 32], [25, 32], [25, 32], // Emotion
        [25, 33], [25, 33], [25, 33], [25, 33], [25, 33], // Square
        [25, 34], [25, 34], [25, 34], [25, 34], [25, 34], // Pine
        [25, 35], [25, 35], [25, 35], [25, 35], [25, 35], // Trap

        // Rival Markers
        [26, 71], [26, 71], [26, 71], [26, 71], // Katana
        [26, 73], [26, 73], [26, 73], [26, 73], // Shuriken
        [26, 41], [26, 41], [26, 41], [26, 41], // Steel
        [26, 69], [26, 69], [26, 69], [26, 69], // Electronics
        [26, 66], [26, 66], [26, 66], [26, 66], // Wall 2
        [26, 47], [26, 47], [26, 47], [26, 47], // Paint Splash 2
    ],
	[ // Sheet 8 
        [201, 17], 

        // Window Stickers
        [25, 36], [25, 36], [25, 36], [25, 36], [25, 36], 
        [25, 37], [25, 37], [25, 37], [25, 37], [25, 37], 
        [25, 38], [25, 38], [25, 38], [25, 38], [25, 38], 
        [25, 39], [25, 39], [25, 39], [25, 39], [25, 39], 
        [25, 40], [25, 40], [25, 40], [25, 40], [25, 40], 

        // Rival Markers
        [26, 74], [26, 74], [26, 74], [26, 74], 
        [26, 79], [26, 79], [26, 79], [26, 79], 
        [26, 59], [26, 59], [26, 59], [26, 59], 
        [26, 60], [26, 60], [26, 60], [26, 60], 
        [26, 61], [26, 61], [26, 61], [26, 61], 
        [26, 62], [26, 62], [26, 62], [26, 62], 
    ],
	[ // Sheet 9 
        [201, 18], 

        // Window Stickers
        [25, 41], [25, 41], [25, 41], [25, 41], [25, 41], 
        [25, 42], [25, 42], [25, 42], [25, 42], 
        [25, 43], [25, 43], [25, 43], [25, 43], 
        [25, 44], [25, 44], [25, 44], [25, 44], 
        [25, 45], [25, 45], [25, 45], [25, 45],

        // Rival Markers
        [26, 70], [26, 70], [26, 70], [26, 70],
        [26, 77], [26, 77], [26, 77], [26, 77], 
        [26, 54], [26, 54], [26, 54], [26, 54], 
        [26, 57], [26, 57], [26, 57], [26, 57], 
        [26, 55], [26, 55], [26, 55], [26, 55],
        [26, 56], [26, 56], [26, 56], [26, 56],
        [26, 45], [26, 45], [26, 45], [26, 45],
    ],
	[ // Sheet 10
        [201, 19], 

        // Window Stickers
        [25, 46], [25, 46], [25, 46], [25, 46], [25, 46], 
        [25, 47], [25, 47], [25, 47], [25, 47], 
        [25, 48], [25, 48], [25, 48], [25, 48], 
        [25, 49], [25, 49], [25, 49], [25, 49], 
        [25, 50], [25, 50], [25, 50], [25, 50], 

        // Rival Markers
        [26, 76], [26, 76], [26, 76], [26, 76],
        [26, 78], [26, 78], [26, 78], [26, 78], 
        [26, 49], [26, 49], [26, 49], [26, 49],
        [26, 43], [26, 43], [26, 43], [26, 43], 
        [26, 67], [26, 67], [26, 67], [26, 67], 
        [26, 64], [26, 64], [26, 64], [26, 64], 
        [26, 46], [26, 46], [26, 46], [26, 46],
    ],
	[ // Sheet 11 
        [201, 20], 

        // Window Stickers
        [25, 51], [25, 51], [25, 51], [25, 51], [25, 51], 
        [25, 52], [25, 52], [25, 52], [25, 52], 
        [25, 53], [25, 53], [25, 53], [25, 53], 
        [25, 54], [25, 54], [25, 54], [25, 54], 
        [25, 55], [25, 55], [25, 55], [25, 55],  

        // Rival Markers
        [26, 75], [26, 75], [26, 75], [26, 75], 
        [26, 72], [26, 72], [26, 72], [26, 72], 
        [26, 42], [26, 42], [26, 42], [26, 42], 
        [26, 63], [26, 63], [26, 63], [26, 63], 
        [26, 48], [26, 48], [26, 48], [26, 48], 
        [26, 65], [26, 65], [26, 65], [26, 65], 
        [26, 68], [26, 68], [26, 68], [26, 68], 
    ],
	[ // Sheet 12
        [201, 21], 

        // Window Stickers
        [25, 56], [25, 56], [25, 56], [25, 56], [25, 56], 
        [25, 57], [25, 57], [25, 57], [25, 57], 
        [25, 58], [25, 58], [25, 58], [25, 58], 
        [25, 59], [25, 59], [25, 59], [25, 59], 
        [25, 60], [25, 60], [25, 60], [25, 60], 

        // Rival Markers
        [26, 80], [26, 80], [26, 80], [26, 80],
        [26, 51], [26, 51], [26, 51], [26, 51], 
        [26, 50], [26, 50], [26, 50], [26, 50], 
        [26, 52], [26, 52], [26, 52], [26, 52], 
        [26, 53], [26, 53], [26, 53], [26, 53],
        [26, 44], [26, 44], [26, 44], [26, 44], 
        [26, 58], [26, 58], [26, 58], [26, 58], 
    ]  
];

// Terminal scratch cars only
export const scratchCars = [
    4, 3, 1, 2, 5, 6, 16, 17, 18, 19, 20, 21
];

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

// *** FUNCTIONS *** 

// Get a random integer within a range
function getRandom(a: number, b: number)
{
    // Return a random integer within the range
    return Math.floor(Math.random() * (b - a)) + a;
}

// Get the days since epoch
function daysSinceEpoch(date: Date)
{
    // Return the days since the epoch
    return Math.floor(Number(date)/8.64e7);
};

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

// Generates a random scratch sheet
// Contents: 
// 1 Random Scratch Car
// 25 Random Scratch Stickers
// 24 Random Scratch Versus Markers
function getRandomScratchSheet (carId: number) 
{
    // Scratch items list
    let items : number[][] = [];
    
    // Add the scratch car for the given index
    items.push([201, scratchCars[carId % scratchCars.length]]);

    // Add the random scratch stickers

    // Five different sticker styles
    for(let i=0; i<5; i++)
    {
        // Get a random versus marker
        let sticker = getRandom(0, 60);

        // Five different instances
        for(let j=0; j<5; j++)
        {
            // Add marker to the list
            items.push([25, sticker + 1])
        }
    }

    // Add the random versus markers

    // Six different marker styles
    for(let i=0; i<6; i++)
    {
        // Get a random versus marker
        let marker = getRandom(0, 80);

        // Four different instances
        for(let j=0; j<4; j++)
        {
            // Add marker to the list
            items.push([26, marker + 1])
        }
    }
    
    // Return the items list
    return items;
}



// Get the days passed between dates 'a' and 'b'
export function dayPassed(a: Date, b: Date)
{
    // Return 1 if a day has passed since the last scratch, 0 otherwise
    return daysSinceEpoch(a) > daysSinceEpoch(b) ? 0 : 1;
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
        
        case 0: // Same as actual game (randomised after last set)

            // If the sheet number has associated data
            if (scratchSheets.length >= sheetNo)
            {
                // Get the data for the requested sheet
                scratchItems = scratchSheets[sheetNo-1];
            }
            else // Sheet is out of range
            {
                // Generate a random (standard) scratch sheet
                // scratchItems = getRandomScratchSheet(sheetNo-1);
            }
            break;

        case 1: // Infinite random scratch sheets (Standard Items)

            // Generate a random (standard) scratch sheet
            scratchItems = getRandomScratchSheet(sheetNo-1);
            break;

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