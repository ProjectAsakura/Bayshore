import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";


// Save time attack result
export async function saveTimeAttackResult(body: wm.protobuf.SaveGameResultRequest)
{
    // If the game was not retired / timed out
    if (!(body.retired || body.timeup)) {
        console.log('Game not retired / timed out, continuing ...')

        // Get the current time attack record for the car
        let currentRecord = await prisma.timeAttackRecord.findFirst({
            where: { 
                carId: body.carId, // , model: body.car!.model!, 
                course: body.taResult!.course
            }
        });

        // Record already exists 
        if (currentRecord)
        {
            // If the existing record is faster, do not continue
            if (body.taResult!.time < currentRecord.time){
                console.log('Updating time attack record...')
                await prisma.timeAttackRecord.update({
                    where: {
                        // Could be null - if it is null, this will insert.
                        dbId: currentRecord!.dbId
                    },
                    data: {
                        model: body.car!.model!,
                        time: body.taResult!.time,
                        section1Time: body!.taResult!.section_1Time,
                        section2Time: body!.taResult!.section_2Time,
                        section3Time: body!.taResult!.section_3Time,
                        section4Time: body!.taResult!.section_4Time,
                        section5Time: body!.taResult!.section_5Time,
                        section6Time: body!.taResult!.section_6Time,
                        section7Time: body!.taResult!.section_7Time,
                        tunePower: body!.car!.tunePower, 
                        tuneHandling: body!.car!.tuneHandling
                    }
                });
            }
        }
        else // Creating a new record
        {
            console.log('Creating new time attack record');

            await prisma.timeAttackRecord.create({
                data: {
                    carId: body.carId,
                    model: body.car!.model!,
                    time: body.taResult!.time,
                    isMorning: body.taResult!.isMorning,
                    course: body.taResult!.course,
                    section1Time: body!.taResult!.section_1Time,
                    section2Time: body!.taResult!.section_2Time,
                    section3Time: body!.taResult!.section_3Time,
                    section4Time: body!.taResult!.section_4Time,
                    section5Time: body!.taResult!.section_5Time,
                    section6Time: body!.taResult!.section_6Time,
                    section7Time: body!.taResult!.section_7Time,
                    tunePower: body!.car!.tunePower, 
                    tuneHandling: body!.car!.tuneHandling
                }
            });
        }
    }
}