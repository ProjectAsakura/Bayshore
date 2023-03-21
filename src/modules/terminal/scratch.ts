import { prisma } from "../..";
import { Config } from "../../config";

//Import Proto
import * as wm from "../../wmmt/wm.proto";

// *** CONSTANTS ***

// Scratch Sheets
let scratchSheets = [
    [ // Sheet 1
        [201, 4], // R2

        // Rival Markers
        [26, 40], [26, 40], [26, 40], [26, 40], // NEW DRIVER
        [26, 18], [26, 18], [26, 18], [26, 18], // LIGHTNING
        [26, 1], [26, 1], [26, 1], [26, 1], // FIRE
        [26, 3], [26, 3], [26, 3], [26, 3], // NEON
        [26, 17], [26, 17], [26, 17], [26, 17], // TROPICAL
        [26, 31], [26, 31], [26, 31], [26, 31], // V

        // Window Stickers
        [25, 24], [25, 24], [25, 24], [25, 24], [25, 24], // PULSE
        [25, 8], [25, 8], [25, 8], [25, 8], [25, 8], // BAT
        [25, 3], [25, 3], [25, 3], [25, 3], [25, 3], // CIRCLE
        [25, 6], [25, 6], [25, 6], [25, 6], [25, 6], // SPEAR
        [25, 14], [25, 14], [25, 14], [25, 14], [25, 14], // TRIBAL
    ], 
    [ // Sheet 2
        [201, 3], //  Corolla

        // Rival Markers
        [26, 29], [26, 29], [26, 29], [26, 29], // BAT
        [26, 9], [26, 9], [26, 9], [26, 9], // GRAFFITI
        [26, 2], [26, 2], [26, 2], [26, 2], // ANIMAL
        [26, 6], [26, 6], [26, 6], [26, 6], // CASUAL
        [26, 8], [26, 8], [26, 8], [26, 8], // PAINT SPLASH
        [26, 19], [26, 19], [26, 19], [26, 19], // WALL

        // Window Stickers
        [25, 28], [25, 28], [25, 28], [25, 28], [25, 28], // WANGAN URL
        [25, 11], [25, 11], [25, 11], [25, 11], [25, 11], // THUNDER BOLT
        [25, 5], [25, 5], [25, 5], [25, 5], [25, 5], // TRIANGLE
        [25, 4], [25, 4], [25, 4], [25, 4], [25, 4], // CIRCLE 2
        [25, 16], [25, 16], [25, 16], [25, 16], [25, 16], // CARDS
    ],
    [ // Sheet 3
        [201, 1], // Hiace Van

        // Rival Markers
        [26, 34], [26, 34], [26, 34], [26, 34], // DIAMOND
        [26, 36], [26, 36], [26, 36], [26, 36], // PINSTRIPE
        [26, 4], [26, 4], [26, 4], [26, 4], // METAL
        [26, 5], [26, 5], [26, 5], [26, 5], // DANGEROUS
        [26, 10], [26, 10], [26, 10], [26, 10], // JAPANESE PATTERN
        [26, 14], [26, 14], [26, 14], [26, 14], // RELIEF
        [26, 20], [26, 20], [26, 20], [26, 20], // REGGAE

        // Window Stickers
        [25, 13], [25, 13], [25, 13], [25, 13], [25, 13], // ARROW
        [25, 7], [25, 7], [25, 7], [25, 7], // SNAKE
        [25, 9], [25, 9], [25, 9], [25, 9], // STAR
        [25, 18], [25, 18], [25, 18], [25, 18], // HEART
        [25, 1], [25, 1], [25, 1], [25, 1], // FIRE PATTERN		
    ], 
    [ // Sheet 4
        [201, 2], // Pajero Evolution

        // Rival Markers
        [26, 33], [26, 33], [26, 33], [26, 33], // HEART
        [26, 7], [26, 7], [26, 7], [26, 7], // FLOWERS
        [26, 15], [26, 15], [26, 15], [26, 15], // CAMO
        [26, 16], [26, 16], [26, 16], [26, 16], // WOOD
        [26, 21], [26, 21], [26, 21], [26, 21], // DECORATION
        [26, 24], [26, 24], [26, 24], [26, 24], // STUDDED
        [26, 30], [26, 30], [26, 30], [26, 30], // EFFECT

        // Window Stickers
        [25, 21], [25, 21], [25, 21], [25, 21], [25, 21], // PLUM BLOSSOMS
        [25, 10], [25, 10], [25, 10], [25, 10], // SHOOTING STAR
        [25, 12], [25, 12], [25, 12], [25, 12], // ILLUMINATION
        [25, 20], [25, 20], [25, 20], [25, 20], // RAIMON
        [25, 27], [25, 27], [25, 27], [25, 27], // LONGHORN
    ], 
    [ // Sheet 5
        [201, 5], // Nismo GT-R (Black)

        // Rival Markers
        [26, 28], [26, 28], [26, 28], [26, 28], // GUITAR PICK
        [26, 39], [26, 39], [26, 39], [26, 39], // SILVER ACCESSORY
        [26, 12], [26, 12], [26, 12], [26, 12], // MECHANICAL
        [26, 22], [26, 22], [26, 22], [26, 22], // TROPICAL 2
        [26, 23], [26, 23], [26, 23], [26, 23], // MONOGRAM
        [26, 25], [26, 25], [26, 25], [26, 25], // CASUAL 2
        [26, 27], [26, 27], [26, 27], [26, 27], // CARBON

        // Window Stickers
        [25, 26], [25, 26], [25, 26], [25, 26], [25, 26], // PAINT
        [25, 23], [25, 23], [25, 23], [25, 23], // MAZE
        [25, 29], [25, 29], [25, 29], [25, 29], // GALAGA
        [25, 2], [25, 2], [25, 2], [25, 2], // FIRE PATTERN 2
        [25, 19], [25, 19], [25, 19], [25, 19], // ANGEL HEART
    ], 
    [ // Sheet 6
        [201, 6], // Fairlady Z (Nismo)

        // Rival Markers
        [26, 32], [26, 32], [26, 32], [26, 32], // FEATHER
        [26, 38], [26, 38], [26, 38], [26, 38], // HEX
        [26, 11], [26, 11], [26, 11], [26, 11], // SILVERCRAFT
        [26, 13], [26, 13], [26, 13], [26, 13], // COSMOS
        [26, 26], [26, 26], [26, 26], [26, 26], // GRAFFITI 2
        [26, 35], [26, 35], [26, 35], [26, 35], // FIRE PATTERN
        [26, 37], [26, 37], [26, 37], [26, 37], // ARROW OF LIGHT

        // Window Stickers
        [25, 25], [25, 25], [25, 25], [25, 25], [25, 25], // EQUALIZER
        [25, 30], [25, 30], [25, 30], [25, 30], // PAC-MAN
        [25, 17], [25, 17], [25, 17], [25, 17], // CARDS 2
        [25, 22], [25, 22], [25, 22], [25, 22], // SEIGAIHA
        [25, 15], [25, 15], [25, 15], [25, 15], // TRIBAL 2
    ], 
    [ // Sheet 7
        [201, 16], // Aristo (Taxi)

        // Rival Markers
        [26, 71], [26, 71], [26, 71], [26, 71], // KATANA
        [26, 73], [26, 73], [26, 73], [26, 73], // SHURIKEN
        [26, 41], [26, 41], [26, 41], [26, 41], // STEEL
        [26, 69], [26, 69], [26, 69], [26, 69], // ELECTRONICS
        [26, 66], [26, 66], [26, 66], [26, 66], // WALL 2
        [26, 47], [26, 47], [26, 47], [26, 47], // PAINT SPLASH 2

        // Window Stickers
        [25, 31], [25, 31], [25, 31], [25, 31], [25, 31], // LOVE
        [25, 32], [25, 32], [25, 32], [25, 32], [25, 32], // EMOTION
        [25, 33], [25, 33], [25, 33], [25, 33], [25, 33], // SQUARE
        [25, 34], [25, 34], [25, 34], [25, 34], [25, 34], // PINE
        [25, 35], [25, 35], [25, 35], [25, 35], [25, 35], // TRAP
    ],
    [ // Sheet 8
        [201, 17], // Driving School Mazda 6 MPS

        // Rival Markers
        [26, 74], [26, 74], [26, 74], [26, 74], // HEAVY METAL
        [26, 79], [26, 79], [26, 79], [26, 79], // LOVE YOU
        [26, 59], [26, 59], [26, 59], [26, 59], // METRO POLICE
        [26, 60], [26, 60], [26, 60], [26, 60], // WOOFER
        [26, 61], [26, 61], [26, 61], [26, 61], // DIGITAL
        [26, 62], [26, 62], [26, 62], [26, 62], // PUNK

        // Window Stickers
        [25, 36], [25, 36], [25, 36], [25, 36], [25, 36], // WING
        [25, 37], [25, 37], [25, 37], [25, 37], [25, 37], // TRIBAL 3
        [25, 38], [25, 38], [25, 38], [25, 38], [25, 38], // TRIBAL 4
        [25, 39], [25, 39], [25, 39], [25, 39], [25, 39], // TECHNO
        [25, 40], [25, 40], [25, 40], [25, 40], [25, 40], // TECHNO 2
    ],
    [ // Sheet 9
        [201, 18], // Toyota Celsior Taxi

        // Rival Markers
        [26, 70], [26, 70], [26, 70], [26, 70], // BUTTERFLY
        [26, 77], [26, 77], [26, 77], [26, 77], // DRAGON
        [26, 54], [26, 54], [26, 54], [26, 54], // ROAD
        [26, 57], [26, 57], [26, 57], [26, 57], // GRAFFITI 3
        [26, 55], [26, 55], [26, 55], [26, 55], // CAMO 2
        [26, 56], [26, 56], [26, 56], [26, 56], // PINSTRIPE 2
        [26, 45], [26, 45], [26, 45], [26, 45], // ID TAG

        // Window Stickers
        [25, 41], [25, 41], [25, 41], [25, 41], [25, 41], // MUSTACHE
        [25, 42], [25, 42], [25, 42], [25, 42], // FLASH
        [25, 43], [25, 43], [25, 43], [25, 43], // SCRATCH
        [25, 44], [25, 44], [25, 44], [25, 44], // ANTIQUE
        [25, 45], [25, 45], [25, 45], [25, 45], // THORNS
    ],
    [ // Sheet 10
        [201, 19], // High lift Toyota Hiace (KZH100G)

        // Rival Markers
        [26, 76], [26, 76], [26, 76], [26, 76], // FANG
        [26, 78], [26, 78], [26, 78], [26, 78], // HAWK
        [26, 49], [26, 49], [26, 49], [26, 49], // OGRE TILE
        [26, 43], [26, 43], [26, 43], [26, 43], // DANGEROUS 2
        [26, 67], [26, 67], [26, 67], [26, 67], // DANGEROUS 3
        [26, 64], [26, 64], [26, 64], [26, 64], // FIRE PATTERN 2
        [26, 46], [26, 46], [26, 46], [26, 46], // ANIMAL 2

        // Window Stickers
        [25, 46], [25, 46], [25, 46], [25, 46], [25, 46], // SKID MARK
        [25, 47], [25, 47], [25, 47], [25, 47], // ARROW 2
        [25, 48], [25, 48], [25, 48], [25, 48], // CHECKERED FLAG
        [25, 49], [25, 49], [25, 49], [25, 49], // CHECKERED FLAG 2
        [25, 50], [25, 50], [25, 50], [25, 50], // PUZZLE
    ],
    [ // Sheet 11
        [201, 20], // R35 Pure Edition 2017

        // Rival Markers
        [26, 75], [26, 75], [26, 75], [26, 75], // HELMET
        [26, 72], [26, 72], [26, 72], [26, 72], // HAMAYA ARROW
        [26, 42], [26, 42], [26, 42], [26, 42], // JAPANESE PATTERN 2
        [26, 63], [26, 63], [26, 63], [26, 63], // LEATHER
        [26, 48], [26, 48], [26, 48], [26, 48], // MARINE
        [26, 65], [26, 65], [26, 65], [26, 65], // CAMO 3
        [26, 68], [26, 68], [26, 68], [26, 68], // MECHANICAL 2

        // Window Stickers
        [25, 51], [25, 51], [25, 51], [25, 51], [25, 51], // PUZZLE 2
        [25, 52], [25, 52], [25, 52], [25, 52], // WAVE
        [25, 53], [25, 53], [25, 53], [25, 53], // FANG
        [25, 54], [25, 54], [25, 54], [25, 54], // LOCK-ON
        [25, 55], [25, 55], [25, 55], [25, 55], // CHAIN
    ],
    [ // Sheet 12
        [201, 21], // Honda NSX-R (NA2)

        // Rival Markers
        [26, 80], [26, 80], [26, 80], [26, 80], // SPEECH BUBBLE
        [26, 51], [26, 51], [26, 51], [26, 51], // COMIC
        [26, 50], [26, 50], [26, 50], [26, 50], // GLITTER
        [26, 52], [26, 52], [26, 52], [26, 52], // FOREST
        [26, 53], [26, 53], [26, 53], [26, 53], // BANDANA
        [26, 44], [26, 44], [26, 44], [26, 44], // STICKER
        [26, 58], [26, 58], [26, 58], [26, 58], // CRYSTAL

        // Window Stickers
        [25, 56], [25, 56], [25, 56], [25, 56], [25, 56], // STREET
        [25, 57], [25, 57], [25, 57], [25, 57], // NO ENTRY
        [25, 58], [25, 58], [25, 58], [25, 58], // BARCODE
        [25, 59], [25, 59], [25, 59], [25, 59], // ZIPPER
        [25, 60], [25, 60], [25, 60], [25, 60], // WANGAN URL 2
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
function getRandomScratchSheet (sheetNo: number) 
{
    // Scratch items list
    let items : number[][] = [];
    let sheetNumber:number = Number(sheetNo % scratchCars.length);
    
    // Add the scratch car for the given index
    items.push([201, scratchCars[sheetNumber]]);

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