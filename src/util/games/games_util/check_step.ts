// Import Proto
import { wm } from "../../../wmmt/wm.proto";


// Save story result
export async function checkCurrentStep(body: wm.protobuf.SaveGameResultRequest)
{
    // Get current step for updating the user's ghost level
    let currentStep = 0;
    currentStep = body.car!.tunePower! + body.car!.tuneHandling!; 

    // Set current ghost level based on current step
    let ghostLevel = 1;
    if(currentStep >= 0 && currentStep <= 5)
    {
        ghostLevel = 1
    }
    else if(currentStep >= 6 && currentStep <= 10)
    {
        ghostLevel = 2
    }
    else if(currentStep >= 11 && currentStep <= 15)
    {
        ghostLevel = 3
    }
    else if(currentStep >= 16 && currentStep <= 20)
    {
        ghostLevel = 4
    }
    else if(currentStep >= 21 && currentStep <= 26)
    {
        ghostLevel = 5
    }
    else if(currentStep >= 27 && currentStep <= 28)
    {
        ghostLevel = 6
    }
    else if(currentStep >= 29 && currentStep <= 30)
    {
        ghostLevel = 7
    }
    else if(currentStep === 31)
    {
        ghostLevel = 8
    }
    else if(currentStep >= 32 && currentStep <= 33)
    {
        ghostLevel = 9
    }
    else if(currentStep === 34)
    {
        ghostLevel = 10
    }

    // Return the value to 'BASE_PATH/src/util/games/story.ts'
    return {ghostLevel}
}