import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";


// Save time attack result
export async function saveTimeAttackResult(body: wm.protobuf.SaveGameResultRequest)
{
    let cheatedTime: boolean = false;

    // If the game was not retired / timed out
    if (!(body.retired || body.timeup)) 
    {
        console.log('Game not retired / timed out, continuing ...')

        // Get the current time attack record for the car
        let currentRecord = await prisma.timeAttackRecord.findFirst({
            where: { 
                carId: body.carId, // , model: body.car!.model!, 
                course: body.taResult!.course
            }
        });

        // Check the time
        if((body.taResult?.course === 0 && body.taResult?.time <= 169000) ||    // C1 Inward (2'49"000)
           (body.taResult?.course === 1 && body.taResult?.time <= 168000) ||    // C1 Outward (2'48"000)
           (body.taResult?.course === 2 && body.taResult?.time <= 210000) ||    // NBL CCW (3'30"000)
           (body.taResult?.course === 3 && body.taResult?.time <= 266000) ||    // NBL CW (4'26"000)
           (body.taResult?.course === 4 && body.taResult?.time <= 205000) ||    // Shibuya/Shinjuku (3'25"000)
           (body.taResult?.course === 5 && body.taResult?.time <= 250000) ||    // Ikebukuro/Yamate Tunnel (4'10"000)
           (body.taResult?.course === 6 && body.taResult?.time <= 232000) ||    // Wangan Eastbound (3'52"000)
           (body.taResult?.course === 7 && body.taResult?.time <= 231000) ||    // Wangan Westbound (3'51"000)
           (body.taResult?.course === 8 && body.taResult?.time <= 165000) ||    // Yokohane Downline (2'45"000)
           (body.taResult?.course === 9 && body.taResult?.time <= 172000) ||    // Yokohane Upline (2'52"000)
           (body.taResult?.course === 10 && body.taResult?.time <= 215000) ||   // Yaesu Inward (3'35"000)
           (body.taResult?.course === 11 && body.taResult?.time <= 189000) ||   // Yaesu Outward (3'09"000)
           (body.taResult?.course === 12 && body.taResult?.time <= 180000) ||   // Minato Mirai Inward (3'00"000)
           (body.taResult?.course === 13 && body.taResult?.time <= 180000) ||   // Minato Mirai Outward (3'00"000)
           (body.taResult?.course === 14 && body.taResult?.time <= 181000) ||   // Nagoya (3'01"000)
           (body.taResult?.course === 15 && body.taResult?.time <= 225000) ||   // Osaka (3'45"000)
           (body.taResult?.course === 16 && body.taResult?.time <= 243000) ||   // Kobe (4'03"000)
           (body.taResult?.course === 17 && body.taResult?.time <= 206000) ||   // Fukuoka (3'26"000)
           (body.taResult?.course === 18 && body.taResult?.time <= 144000) ||   // Hakone Outbound (2'24"000)
           (body.taResult?.course === 19 && body.taResult?.time <= 143000) ||   // Hakone Inbound (2'23"000)
           (body.taResult?.course === 20 && body.taResult?.time <= 168000) ||   // Mt. Taikan Uphill (2'48"000)
           (body.taResult?.course === 21 && body.taResult?.time <= 174000) ||   // Mt. Taikan Downhill (2'54"000)
           (body.taResult?.course === 22 && body.taResult?.time <= 718000) ||   // Metro Hwy Tokyo (11'58"000)
           (body.taResult?.course === 23 && body.taResult?.time <= 546000) ||   // Metro Hwy Kanagawa (9'06"000)
           (body.taResult?.course === 24 && body.taResult?.time <= 209000))     // Hiroshima (3'29"000)
        {
            cheatedTime = true;
        }

        // Not Cheated Time
        if(cheatedTime === false)
        {
            // Record already exists 
            if (currentRecord)
            {
                // If the existing record is faster, do not continue
                if (body.taResult!.time < currentRecord.time)
                {
                    console.log('Updating time attack record...');

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
        // else {} cheated time, ignore it
    }
}