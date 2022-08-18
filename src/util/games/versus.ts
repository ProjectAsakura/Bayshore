import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";


// Save versus battle result
export async function saveVersusBattleResult(body: wm.protobuf.SaveGameResultRequest)
{
    if (!(body.retired)) 
    {
        // Get the vs result for the car
        let vsResult = body?.vsResult;

        // storyResult is set
        if (vsResult)
        {
            // Check if vsTripleStarMedals is not 0
            let vsTripleStarMedals = undefined;
            if(vsResult.vsTripleStarMedals && vsResult.vsTripleStarMedals !== 0){
                vsTripleStarMedals = vsResult.vsTripleStarMedals!;
            }

            // Check if vsDoubleStarMedals is not 0
            let vsDoubleStarMedals = undefined;
            if(vsResult.vsDoubleStarMedals && vsResult.vsDoubleStarMedals !== 0){
                vsDoubleStarMedals = vsResult.vsDoubleStarMedals!;
            }

            // Check if vsSingleStarMedals is not 0
            let vsSingleStarMedals = undefined;
            if(vsResult.vsSingleStarMedals && vsResult.vsSingleStarMedals !== 0){
                vsSingleStarMedals = vsResult.vsSingleStarMedals!;
            }

            // Check if vsPlainMedals is not 0
            let vsPlainMedals = undefined;
            if(vsResult.vsPlainMedals && vsResult.vsPlainMedals !== 0){
                vsPlainMedals = vsResult.vsPlainMedals!;
            }

            // vs result update data
            let data : any = {
                vsPlayCount: vsResult.vsPlayCount || undefined, 
                vsBurstCount: vsResult.vsBurstCount || undefined, 
                vsStarCount: vsResult.vsStarCount || undefined, 
                vsCoolOrWild: vsResult.vsCoolOrWild || undefined,
                vsSmoothOrRough: vsResult.vsSmoothOrRough || undefined, 
                vsTripleStarMedals: vsTripleStarMedals || undefined,
                vsDoubleStarMedals: vsDoubleStarMedals || undefined, 
                vsSingleStarMedals: vsSingleStarMedals || undefined, 
                vsPlainMedals: vsPlainMedals || undefined, 
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