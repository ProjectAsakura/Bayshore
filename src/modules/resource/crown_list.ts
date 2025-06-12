import { prisma } from "../..";

//Import Proto
import wmsrv from "../../wmmt/service.proto";


// Get Crown List
export async function getCrownList()
{
    // Empty list of crown records
    let list_crown: wmsrv.wm.protobuf.Crown[] = [];

    // Get the current date/time (unix epoch)
    let date = Math.floor(new Date().getTime() / 1000);

    // Get the crown holder data
    let car_crown = await prisma.carCrown.findMany({ 
        orderBy: {
            area: 'asc'
        },
        distinct: ['area']
    });
    
    // Crown holder data available
    if(car_crown.length !== 0)
    { 
        let counter = 0;  

        // Loop GID_RUNAREA
        for(let i=0; i<15; i++) // set to loop 14 times is enough
        { 
            // After Kobe is Hiroshima then Fukuoka and the rest
            if(i >= 14)
            { 
                i = 18; // GID_RUNAREA_HIROSHIMA
            }

            // Crown holder for certain area available
            if(car_crown[counter].area === i)
            { 
                // Get user's data
                let car = await prisma.car.findFirst({
                    where: {
                        carId: car_crown[counter].carId
                    },
                    include: {
                        gtWing: true,
                        lastPlayedPlace: true
                    }
                });

                // Set the tunePower and tuneHandling used when capturing ghost crown
                car!.tunePower = car_crown[counter].tunePower; 
                car!.tuneHandling = car_crown[counter].tuneHandling; 

                // Acquired crown timestamp - 1 day (prevent locking)
                car!.lastPlayedAt = car_crown[counter].playedAt - 172800;

                // Acquired crown timestamp - 1 day (prevent locking)
                car_crown[counter].playedAt = car_crown[counter].playedAt - 172800;

                // PlayedAt still bigger than current date (prevent locking)
                if(car_crown[counter].playedAt > date)
                {
                    car_crown[counter].playedAt = date;
                }
                // PlayedAt still smaller than 1674579600
                else if(car_crown[counter].playedAt < 1674579600)
                {
                    car_crown[counter].playedAt = 1674579600;
                }

                // Error handling if regionId is below 1 or above 47
                if(car!.regionId < 1 || car!.regionId > 47)
                {
                    car!.regionId = Math.floor(Math.random() * 10) + 10;
                }

                // Push the car data to the crown holder data
                // GID_RUNAREA_HIROSHIMA
                if(car_crown[counter].area === 18)
                {
                    let listCrown = wmsrv.wm.protobuf.Crown.create({  
                        carId: car_crown[counter].carId,
                        area: car_crown[counter].area,
                        unlockAt: car_crown[counter].playedAt,
                        car: car!
                    });

                    // Push it after Kobe
                    list_crown.splice(11, 0, listCrown);
                }
                // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE
                else
                {
                    list_crown.push(wmsrv.wm.protobuf.Crown.create({  
                        carId: car_crown[counter].carId,
                        area: car_crown[counter].area,
                        unlockAt: car_crown[counter].playedAt,
                        car: car!
                    }));
                }
                
                if(counter < car_crown.length-1)
                {
                    counter++;
                }
            }
            // Crown holder for certain area not available
            else
            { 
                // Push the default data by the game to the crown holder data
                // GID_RUNAREA_HIROSHIMA
                if(i === 18)
                {
                    let listCrown = wmsrv.wm.protobuf.Crown.create({  
                        carId: 999999999-i,
                        area: i,
                        unlockAt: date - 1000,
                    });

                    // Push it after Kobe
                    list_crown.splice(11, 0, listCrown);
                }
                // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE
                else
                {
                    list_crown.push(wmsrv.wm.protobuf.Crown.create({ 
                        carId: 999999999-i,
                        area: i,
                        unlockAt: date - 1000,
                    }));
                }
            }
        }
    }
    // There is no user's crown holder data available
    else
    {
        // Loop GID_RUNAREA
        for(let i=0; i<15; i++) // set to loop 14 times is enough
        { 
            // After Kobe is Hiroshima then Fukuoka and the rest
            if(i >= 14)
            { 
                i = 18; // GID_RUNAREA_HIROSHIMA
            }

            // Push the default data by the game to the crown holder data
            // GID_RUNAREA_HIROSHIMA
            if(i === 18)
            {
                let listCrown = wmsrv.wm.protobuf.Crown.create({  
                    carId: 999999999-i,
                    area: i,
                    unlockAt: date - 1000,
                });

                // Push it after Kobe
                list_crown.splice(11, 0, listCrown);
            }
            // GID_RUNAREA_C1 - GID_RUNAREA_TURNPIKE
            else
            {
                list_crown.push(wmsrv.wm.protobuf.Crown.create({ 
                    carId: 999999999-i,
                    area: i,
                    unlockAt: date - 1000,
                }));
            }
        }
    }

    return { list_crown }
}