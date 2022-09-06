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
        let stLoseBits = 0;

        // storyResult is set
        if (storyResult)
        {
            // Story update data
            let data : any = {
                stClearDivCount: common.sanitizeInputNotZero(storyResult.stClearDivCount), 
                stPlayCount: common.sanitizeInput(storyResult.stPlayCount), 
                stClearCount: common.sanitizeInputNotZero(storyResult.stClearCount), 
                stConsecutiveWins: common.sanitizeInput(storyResult.stConsecutiveWins), 
                tuningPoints: common.sanitizeInput(storyResult.tuningPoint), 
                stCompleted100Episodes: common.sanitizeInput(storyResult.stCompleted_100Episodes), 
            }

            // If the current consecutive wins is greater than the previous max
            if (storyResult.stConsecutiveWins! > car!.stConsecutiveWinsMax) 
            {
                // Update the maximum consecutive wins;
                data.stConsecutiveWinsMax = storyResult.stConsecutiveWins;
            }

            // If the lose bits are set, and are long data
            if (Long.isLong(storyResult.stLoseBits))
            {
                // Convert them to BigInt and add to the data
                data.stLoseBits = common.getBigIntFromLong(storyResult.stLoseBits);
                stLoseBits = data.stLoseBits

                // If a loss has been recorded
                if (stLoseBits > 0)
                {
                    // End the win streak
                    data.stConsecutiveWins = 0;
                }
            }

            // Check if clearBits is not null, and not lose the story
            if(storyResult.stClearBits !== null && storyResult.stClearBits !== undefined)
            {
                if(stLoseBits === 0) 
                {
                    data.stClearBits = storyResult.stClearBits;
                }
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