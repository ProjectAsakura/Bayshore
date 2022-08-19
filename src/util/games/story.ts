import Long from "long";
import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";

// Import Util
import * as common from "../common";
import * as check_step from "../games/games_util/check_step";


// Save story result
export async function saveStoryResult(body: wm.protobuf.SaveGameResultRequest, car: any)
{
    // If the game was not retired / timed out
    if (!(body.retired || body.timeup)) 
    {
        // Get the story result for the car
        let storyResult = body?.stResult;

        // storyResult is set
        if (storyResult)
        {
            // Story update data
            let data : any = {
                stClearDivCount: storyResult.stClearDivCount || undefined, 
                stPlayCount: storyResult.stPlayCount || undefined, 
                stClearCount: storyResult.stClearCount || undefined, 
                stConsecutiveWins: storyResult.stConsecutiveWins || undefined, 
                tuningPoints: storyResult.tuningPoint || 0, 
                stCompleted100Episodes: storyResult.stCompleted_100Episodes || undefined, 
            }

            // If the current consecutive wins is greater than the previous max
            if (body.stResult!.stConsecutiveWins! > car!.stConsecutiveWinsMax) 
            {
                // Update the maximum consecutive wins;
                data.stConsecutiveWinsMax = body.stResult!.stConsecutiveWins!;
            }

            // If the lose bits are set, and are long data
            if (Long.isLong(storyResult.stLoseBits))
            {
                // Convert them to BigInt and add to the data
                data.stLoseBits = common.getBigIntFromLong(storyResult.stLoseBits);

                // If a loss has been recorded
                if (data.stLoseBits > 0)
                {
                    // End the win streak
                    data.stConsecutiveWins = 0;
                }
            }

            // Check if clearBits is not null, and not lose the story
            if (storyResult.stClearBits !== null && storyResult.stClearBits !== undefined 
                && data.stLoseBits === 0) 
            {
                data.stClearBits = storyResult.stClearBits;
            }

            // Calling check step function (BASE_PATH/src/util/games/games_util/check_step.ts)
            let check_steps = await check_step.checkCurrentStep(body);

            // Set the ghost level to the correct level
            data.ghostLevel = check_steps.ghostLevel;

            // Update the car properties
            await prisma.car.update({
                where: {
                    carId: body.carId
                },
                data: data
            });
        }
    }
}