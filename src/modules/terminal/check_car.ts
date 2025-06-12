import { prisma } from "../..";


// Sends the server response to the client
export async function checkScratchCar(userId: number, visualModel: number)
{
    let checkUserItem: any;

    switch (visualModel)
    {
        case 55: // R2
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 4
                }
            })
            break;

        case 73: // Corolla
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 3
                }
            })
            break;

        case 98: // HIACE Van
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 1
                }
            })
            break;

        case 26: // Pajero Evolution
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 2
                }
            })
            break;

        case 118: // GT-R Nismo
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 5
                }
            })
            break;

        case 119: // Z34 Nismo
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 6
                }
            })
            break;

        case 72: // Aristo Taxi
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 16
                }
            })
            break;

        case 11: // Atenza Taxi
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 17
                }
            })
            break;

        case 66: // Celsior Taxi
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 18
                }
            })
            break;

        case 75: // HIACE Wagon
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 19
                }
            })
            break;

        case 132: // GT-R Pure Edition
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 20
                }
            })
            break;

        case 129: // NSX-R
            checkUserItem = await prisma.userItem.findMany({
                where:{
                    userId: userId,
                    category: 201,
                    itemId: 21
                }
            })
            break;

        default:
            checkUserItem = [];
            break;
    }

    // Check if user item is available or not
    if(checkUserItem.length > 0)
    {
        for(let i=0; i<checkUserItem.length; i++)
        {
            await prisma.userItem.delete({
                where:{
                    userItemId: checkUserItem[i].userItemId
                }
            })
        }
        

        console.log('Item used - ID '+ checkUserItem[0].itemId);
        console.log('Item deleted!');
        console.log(`Item category was ${checkUserItem[0].category} and item game ID was ${checkUserItem[0].itemId}`);
    }
}