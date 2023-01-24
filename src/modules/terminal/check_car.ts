import { prisma } from "../..";


// Sends the server response to the client
export async function checkScratchCar(userId: number, visualModel: number)
{
    let checkUserItem: any;

    if(visualModel === 55) // R2
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 4
            }
        })
    }
    else if(visualModel === 73) // Corolla
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 3
            }
        })
    }
    else if(visualModel === 98) // HIACE Van
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 1
            }
        })
    }
    else if(visualModel === 26) // Pajero Evolution
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 2
            }
        })
    }
    else if(visualModel === 118) // GT-R Nismo
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 5
            }
        })
    }
    else if(visualModel === 119) // Z34 Nismo
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 6
            }
        })
    }
    else if(visualModel === 72) // Aristo Taxi
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 16
            }
        })
    }
    else if(visualModel === 11) // Atenza Taxi
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 17
            }
        })
    }
    else if(visualModel === 66) // Celsior Taxi
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 18
            }
        })
    }
    else if(visualModel === 75) // HIACE Wagon
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 19
            }
        })
    }
    else if(visualModel === 132) // GT-R Pure Edition
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 20
            }
        })
    }
    else if(visualModel === 129) // NSX-R
    {
        checkUserItem = await prisma.userItem.findMany({
            where:{
                userId: userId,
                category: 201,
                itemId: 21
            }
        })
    }
    else
    {
        checkUserItem = [];
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