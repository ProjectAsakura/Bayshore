import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";


// Save versus battle result
export async function saveVersusBattleResult(body: wm.protobuf.SaveGameResultRequest, car: any)
{
    if (!body.retired)
    {
        // Get the car
        let cars = body?.car;

        // Get the vs result for the car
        let vsResult = body?.vsResult;

        // vs result is set
        if (cars && vsResult)
        {
            // vs result update data
            let data : any = {
                wheel: common.sanitizeInput(cars.wheel), 
                wheelColor: common.sanitizeInput(cars.wheelColor), 
                aero: common.sanitizeInput(cars.aero), 
                bonnet: common.sanitizeInput(cars.bonnet),
                wing: common.sanitizeInput(cars.wing),
                mirror: common.sanitizeInput(cars.mirror),
                neon: common.sanitizeInput(cars.neon),
                trunk: common.sanitizeInput(cars.trunk),
                plate: common.sanitizeInput(cars.plate),
                plateColor: common.sanitizeInput(cars.plateColor),
                plateNumber: common.sanitizeInput(cars.plateNumber),
                vsPlayCount: common.sanitizeInput(vsResult.vsPlayCount), 
                aura: common.sanitizeInput(cars.aura),
                vsBurstCount: common.sanitizeInput(vsResult.vsBurstCount), 
                vsStarCount: common.sanitizeInputNotZero(vsResult.vsStarCount), 
                vsCoolOrWild: common.sanitizeInput(vsResult.vsCoolOrWild),
                vsSmoothOrRough: common.sanitizeInput(vsResult.vsSmoothOrRough), 
                vsTripleStarMedals: common.sanitizeInputNotZero(vsResult.vsTripleStarMedals),
                vsDoubleStarMedals: common.sanitizeInputNotZero(vsResult.vsDoubleStarMedals), 
                vsSingleStarMedals: common.sanitizeInputNotZero(vsResult.vsSingleStarMedals), 
                vsPlainMedals: common.sanitizeInputNotZero(vsResult.vsPlainMedals), 
            }

            // If the current versus star count is greater than the maximum
            if (data.vsStarCount && (car.vsStarCountMax < data.vsStarCount))
            {
                // Update the maximum versus star count
                data.vsStarCountMax = data.vsStarCount;
            }

            await prisma.car.update({
                where: {
                    carId: body.carId
                },
                data: data
            });

            // GT Wing stuff
            let dataGTWing: any = {
                pillar: common.sanitizeInput(body.car?.gtWing?.pillar), 
                pillarMaterial: common.sanitizeInput(body.car?.gtWing?.pillarMaterial), 
                mainWing: common.sanitizeInput(body.car?.gtWing?.mainWing), 
                mainWingColor: common.sanitizeInput(body.car?.gtWing?.mainWingColor), 
                wingTip: common.sanitizeInput(body.car?.gtWing?.wingTip), 
                material: common.sanitizeInput(body.car?.gtWing?.material), 
            };

            await prisma.carGTWing.update({
                where: {
                    dbId: body.carId
                }, 
                data: dataGTWing
            });
        }
    }
}