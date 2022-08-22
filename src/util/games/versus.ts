import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";

// Import Util
import * as common from "../common";


// Save versus battle result
export async function saveVersusBattleResult(body: wm.protobuf.SaveGameResultRequest)
{
    if (!(body.retired)) 
    {
        // Get the vs result for the car
        let vsResult = body?.vsResult;

        // vs result is set
        if (vsResult)
        {
            // vs result update data
            let data : any = {
                vsPlayCount: common.sanitizeInput(vsResult.vsPlayCount), 
                vsBurstCount: common.sanitizeInput(vsResult.vsBurstCount), 
                vsStarCount: common.sanitizeInput(vsResult.vsStarCount), 
                vsCoolOrWild: common.sanitizeInput(vsResult.vsCoolOrWild),
                vsSmoothOrRough: common.sanitizeInput(vsResult.vsSmoothOrRough), 
                vsTripleStarMedals: common.sanitizeInputNotZero(vsResult.vsTripleStarMedals),
                vsDoubleStarMedals: common.sanitizeInputNotZero(vsResult.vsDoubleStarMedals), 
                vsSingleStarMedals: common.sanitizeInputNotZero(vsResult.vsSingleStarMedals), 
                vsPlainMedals: common.sanitizeInputNotZero(vsResult.vsPlainMedals), 
            }

            await prisma.car.update({
                where: {
                    carId: body.carId
                },
                data: data
            });
        }
    }
}