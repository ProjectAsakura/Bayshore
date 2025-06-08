import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";
import wmproto  from "../../wmmt/wm.proto";


// OCM Tallying
export async function ocmTallying(body: wm.protobuf.LoadGhostCompetitionInfoRequest, periodId: number, ended: boolean)
{
    // OCM is still on going
    if(ended === false)
    {
        periodId = periodId - 1;

        // Current day is main draw and tallying qualifying period
        if(periodId === 0)
        {
            console.log('Tallying data from Qualifying');

            // Get user that playing OCM qualifying day
            let gbRecordTally = await prisma.oCMGhostBattleRecord.findMany({ 
                where:{
                    ocmMainDraw: false,
                    competitionId: body.competitionId,
                    periodId: periodId
                },
                orderBy:{
                    result: 'desc',
                }
            });
            let arr = [];
            
            // gbRecordTally is set
            if(gbRecordTally)
            {
                let top1advantage = null;
                let currentResult = 0;

                for(let i=0; i<gbRecordTally.length; i++)
                {
                    // Get the Top 1 Advantage
                    if(top1advantage === null)
                    {
                        top1advantage = gbRecordTally[i].result;

                        let getTrail = await prisma.oCMGhostTrail.findFirst({
                            where:{
                                carId: gbRecordTally[i].carId,
                                competitionId: body.competitionId,
                                periodId: periodId
                            }
                        })

                        if(getTrail)
                        {
                            await prisma.oCMTop1GhostTrail.create({
                                data: {
                                    carId: getTrail.carId,
                                    area: getTrail.area,
                                    ramp: getTrail.ramp,
                                    path: getTrail.path,
                                    trail: getTrail.trail,
                                    competitionId: getTrail.competitionId,
                                    periodId: getTrail.periodId + 1,
                                    playedAt: getTrail.playedAt,
                                    tunePower: getTrail.tunePower,
                                    tuneHandling: getTrail.tuneHandling,
                                    ocmMainDraw: true
                                }
                            })
                        }
                    }

                    // User is lose VS Top 1 Qualifying Ghost (minus advantage like -10 meter)
                    if(top1advantage > 0)
                    {
                        if(gbRecordTally[i].result <= 0)
                        {
                            currentResult = top1advantage + Math.abs(gbRecordTally[i].result);

                            currentResult = -Math.abs(currentResult);
                        }
                        else
                        {
                            currentResult = gbRecordTally[i].result - top1advantage;
                        }
                    }
                    else
                    {
                        currentResult = top1advantage +  Math.abs(gbRecordTally[i].result);

                        currentResult = -Math.abs(currentResult);
                    }

                    // Pushing carId to array
                    arr.push(gbRecordTally[i].carId); 

                    // Moving data to OCM Tally
                    let data : any = {
                        carId: gbRecordTally[i].carId,
                        result: currentResult,
                        tunePower: gbRecordTally[i].tunePower,
                        tuneHandling: gbRecordTally[i].tuneHandling,
                        competitionId: body.competitionId,
                        periodId: periodId + 1
                    }

                    // Create the data
                    await prisma.oCMTally.create({
                        data: data
                    });

                    if(i === 0){
                        console.log('Making OCM Top 1 Ghost Data');

                        // Create Top 1 ghost data
                        await prisma.oCMTop1Ghost.create({
                            data: data
                        });
                    }
                } 
            }

            // Check if someone is retiring or use cheat engine time up
            let checkPlayRecord = await prisma.oCMPlayRecord.findMany({ 
                where:{
                    competitionId: body.competitionId,
                    NOT: {
                        carId:{ in: arr }
                    }
                }
            });

            if(checkPlayRecord)
            {
                for(let i=0; i<checkPlayRecord.length; i++)
                {
                    // Moving data to OCM Tally
                    let dataLeft : any = {
                        carId: checkPlayRecord[i].carId,
                        result: -9999999,
                        tunePower: 17,
                        tuneHandling: 17,
                        competitionId: body.competitionId,
                        periodId: periodId + 1
                    }

                    // Create the data
                    await prisma.oCMTally.create({
                        data: dataLeft
                    });
                }
            }
        }
        // Current day is main draw period 2 (and so on..) and tallying main draw period 1 (and so on..)
        else
        {
            console.log('Tallying data from previous Period');

            // Get user that playing OCM qualifying day
            let OCMTally = await prisma.oCMTally.findMany({ 
                where:{
                    competitionId: body.competitionId,
                    periodId: periodId
                },
                orderBy:{
                    result: 'desc',
                }
            });
            
            // gbRecordTally is set
            if(OCMTally)
            {
                let top1advantage = null;
                let currentResult = 0;
                for(let i=0; i<OCMTally.length; i++)
                {
                    // Get the Top 1 Advantage
                    if(top1advantage === null)
                    {
                        top1advantage = OCMTally[0].result;

                        let getTrail = await prisma.oCMGhostTrail.findFirst({
                            where:{
                                carId: OCMTally[0].carId,
                                competitionId: body.competitionId,
                            },
                            orderBy:{
                                playedAt: 'desc'
                            }
                        })

                        if(getTrail)
                        {
                            console.log('Creating Trail');
                            await prisma.oCMTop1GhostTrail.create({
                                data: {
                                    carId: getTrail.carId,
                                    area: getTrail.area,
                                    ramp: getTrail.ramp,
                                    path: getTrail.path,
                                    trail: getTrail.trail,
                                    competitionId: getTrail.competitionId,
                                    periodId: periodId + 1,
                                    playedAt: getTrail.playedAt,
                                    tunePower: getTrail.tunePower,
                                    tuneHandling: getTrail.tuneHandling,
                                    ocmMainDraw: true
                                }
                            })
                        }
                    }

                    // Get the Top 1 Advantage
                    if(top1advantage > 0)
                    {
                        if(OCMTally[i].result <= 0)
                        {
                            currentResult = top1advantage + Math.abs(OCMTally[i].result);

                            currentResult = -Math.abs(currentResult);
                        }
                        else
                        {
                            currentResult = OCMTally[i].result - top1advantage;
                        }
                    }
                    else
                    {
                        currentResult = top1advantage +  Math.abs(OCMTally[i].result);

                        currentResult = -Math.abs(currentResult);
                    }

                    // Moving data to OCM Tally
                    let data : any = {
                        carId: OCMTally[i].carId,
                        result: currentResult,
                        tunePower: OCMTally[i].tunePower,
                        tuneHandling: OCMTally[i].tuneHandling,
                        competitionId: body.competitionId,
                        periodId: periodId + 1
                    }

                    let checkOCMTally = await prisma.oCMTally.findFirst({
                        where: {
                            carId: OCMTally[i].carId,
                            competitionId: body.competitionId,
                        }
                    });

                    if(checkOCMTally)
                    {
                        // Update the tally data
                        await prisma.oCMTally.update({
                            where:{
                                dbId: checkOCMTally?.dbId
                            },
                            data: data
                        });
                    }
                    

                    if(i === 0)
                    {
                        console.log('Making OCM Top 1 Ghost Data');

                        // Create Top 1 ghost data
                        await prisma.oCMTop1Ghost.create({
                            data: data
                        });
                    }
                }
            }
        }
    }
    // OCM is ended
    else
    {
        console.log('Tallying data for end of OCM');

        // Get user that playing OCM qualifying day
        let OCMTally = await prisma.oCMTally.findMany({ 
            where:{
                competitionId: body.competitionId,
                periodId: periodId
            },
            orderBy:{
                result: 'desc',
            }
        });
        
        // gbRecordTally is set
        if(OCMTally)
        {
            let top1advantage = null;
            let currentResult = 0;
            for(let i=0; i<OCMTally.length; i++)
            {
                // Get the Top 1 Advantage
                if(top1advantage === null)
                {
                    top1advantage = OCMTally[0].result;

                    let getTrail = await prisma.oCMGhostTrail.findFirst({
                        where:{
                            carId: OCMTally[0].carId,
                            competitionId: body.competitionId,
                            ocmMainDraw: true
                        }
                    })

                    if(getTrail)
                    {
                        await prisma.oCMTop1GhostTrail.create({
                            data: {
                                carId: getTrail.carId,
                                area: getTrail.area,
                                ramp: getTrail.ramp,
                                path: getTrail.path,
                                trail: getTrail.trail,
                                competitionId: getTrail.competitionId,
                                periodId: 999999999,
                                playedAt: getTrail.playedAt,
                                tunePower: getTrail.tunePower,
                                tuneHandling: getTrail.tuneHandling,
                                ocmMainDraw: true
                            }
                        })
                    }
                }

                // Get the Top 1 Advantage
                if(top1advantage > 0)
                {
                    if(OCMTally[i].result <= 0)
                    {
                        currentResult = top1advantage + Math.abs(OCMTally[i].result);

                        currentResult = -Math.abs(currentResult);
                    }
                    else
                    {
                        currentResult = OCMTally[i].result - top1advantage;
                    }
                }
                else
                {
                    currentResult = top1advantage +  Math.abs(OCMTally[i].result);

                    currentResult = -Math.abs(currentResult);
                }

                // Moving data to OCM Tally
                let data : any = {
                    carId: OCMTally[i].carId,
                    result: currentResult,
                    tunePower: OCMTally[i].tunePower,
                    tuneHandling: OCMTally[i].tuneHandling,
                    competitionId: body.competitionId,
                    periodId: 999999999
                }

                let checkOCMTally = await prisma.oCMTally.findFirst({
                    where: {
                        carId: OCMTally[i].carId,
                        competitionId: body.competitionId,
                    }
                });

                if(checkOCMTally)
                {
                    // Update the tally data
                    await prisma.oCMTally.update({
                        where:{
                            dbId: checkOCMTally?.dbId
                        },
                        data: data
                    });
                }
                

                if(i === 0)
                {
                    console.log('Making OCM Top 1 Ghost Data');

                    // Create Top 1 ghost data
                    await prisma.oCMTop1Ghost.create({
                        data: data
                    });
                }
            }
        }
    }
}


// OCM Competition (Main Draw) Day
export async function ocmCompetitionDay(body: wm.protobuf.LoadGhostCompetitionInfoRequest, competitionId: number, periodId: number)
{
    console.log("Competition ID: " +competitionId+ ", Period ID: " +periodId);
    let isQualified: boolean = false;

    // Get Top 1 qualifying car data
    let ocmTallyRecord = await prisma.oCMTally.findMany({ 
        where:{
            competitionId: competitionId,
        },
        orderBy: [
            {
                result: 'desc',
            },
            {
                periodId: 'desc'
            },
        ],
        distinct: ['carId'],
    });

    // Get user ranking
    let resultAdvantage = 0;
    let currentRank = 0;
    let topresult = []
    for(let i=0; i<ocmTallyRecord.length; i++)
    {
        if(ocmTallyRecord[i].carId == body.carId)
        {
            // Get main draw advantage (Current car advantage from qualifying day - Top 1 OCM Ghost advantage from qualifying day)
            resultAdvantage = ocmTallyRecord![i].result
            currentRank = i + 1;
            isQualified = true;
        }
        else
        {
            topresult.push(ocmTallyRecord[i].result);
        }
    }

    // Mini game braking point
    let msg: any;
    if(isQualified)
    { 
        // Response data
        msg = {
            error: wmproto.wm.protobuf.ErrorCode.ERR_SUCCESS,
            periodId: periodId,
            closed: false,
            topResults: topresult,
            qualified: isQualified,
            result: resultAdvantage,
            rank: currentRank
        };
    }
    // User not yet playing OCM Battle game mode
    else
    {
        // Response data
        msg = {
            error: wmproto.wm.protobuf.ErrorCode.ERR_SUCCESS,
            periodId: periodId,
            closed: false,
            qualified: false, // if this set to false, user cannot enter OCM Battle game mode
        };
    }

    // Return value
    return { msg }
}


// OCM Qualifying Day
export async function ocmQualifyingDay(body: wm.protobuf.LoadGhostCompetitionInfoRequest, competitionId: number)
{
    // Get user's available OCM Battle Record
    let ocmRecord = await prisma.oCMPlayRecord.findFirst({
        where:{
            carId: body.carId,
            competitionId: competitionId
        },
        orderBy:{
            dbId: 'desc'
        }
    });

    let isQualified: boolean = true;
    let msg: any;

    if(ocmRecord)
    {
        // Get user's ghost battle record versus Top 1 OCM ghost
        let gbRecord = await prisma.oCMGhostBattleRecord.findFirst({ 
            where:{
                carId: body.carId,
                competitionId: competitionId,
                periodId: 0,
                ocmMainDraw: false
            },
            orderBy:{
                dbId: 'desc',
            }
        });

        // Mini game braking point
        if(gbRecord)
        {
            if(ocmRecord?.brakingPoint !== null && ocmRecord?.brakingPoint !== undefined)
            {
                // User is not braking and let the car crashed lmao
                if(ocmRecord!.brakingPoint === 0){ 
                    msg = {
                        error: wmproto.wm.protobuf.ErrorCode.ERR_SUCCESS,
                        periodId: 0,
                        closed: false,
                        qualified: isQualified,
                        result: gbRecord!.result
                    };
                }
                // User is pressing brake
                else
                { 
                    // Response data
                    msg = {
                        error: wmproto.wm.protobuf.ErrorCode.ERR_SUCCESS,
                        periodId: 0,
                        closed: false,
                        qualified: isQualified,
                        brakingPoint: ocmRecord!.brakingPoint,
                        result: gbRecord!.result
                    };
                }
            }
            else
            {
                // Response data
                msg = {
                    error: wmproto.wm.protobuf.ErrorCode.ERR_SUCCESS,
                    periodId: 0,
                    closed: false,
                    qualified: isQualified,
                    result: gbRecord!.result
                };
            }
        }
        // Record not found
        else
        {
            // Response data
            msg = {
                error: wmproto.wm.protobuf.ErrorCode.ERR_SUCCESS,
                periodId: 0,
                closed: false,
                qualified: true, // if this set to false, user cannot enter OCM Battle game mode
            };
        }
    }
    // User not yet playing OCM Battle game mode
    else
    {
        // Response data
        msg = {
            error: wmproto.wm.protobuf.ErrorCode.ERR_SUCCESS,
            periodId: 0,
            closed: false,
            qualified: true, // if this set to false, user cannot enter OCM Battle game mode
        };
    }

    return { msg }
}


// Give nameplate reward
export async function ocmGiveNamePlateReward(competitionId: number)
{
    let getCarParticipant = await prisma.oCMTally.findMany({
        where:{
            competitionId: competitionId,
        },
        orderBy:{
            result: 'desc'
        }
    });

    if(getCarParticipant)
    {
        console.log('Giving OCM Rewards');

        let participantLength = getCarParticipant.length;
    
        // Participant is more than certain number (100 is default)
        if(participantLength > 100)
        {
            participantLength = 100;
        }

        let itemIdParticipant = 0;
        let itemIdGp = 0;
        switch (competitionId)
        {
            // 16th - C1
            case 1:
                itemIdParticipant = 204;
                itemIdGp = 205;
                break;

            // 17th - Osaka
            case 2:
                itemIdParticipant = 210;
                itemIdGp = 211;
                break;
                
            // 18th - Fukuoka
            case 3:
                itemIdParticipant = 216;
                itemIdGp = 217;
                break;
                
            // 19th - Nagoya
            case 4:
                itemIdParticipant = 222;
                itemIdGp = 223;
                break;
                
            // 6th - C1
            case 5:
                itemIdParticipant = 35;
                itemIdGp = 36;
                break;
                
            // 20th - Kobe
            case 6:
                itemIdParticipant = 228;
                itemIdGp = 229;
                break;
                
            // 7th - Fukutoshin
            case 7:
                itemIdParticipant = 41;
                itemIdGp = 42;
                break;
                
            // 21st - Hiroshima
            case 8:
                itemIdParticipant = 234;
                itemIdGp = 235;
                break;
                
            // 8th - Hakone
            case 9:
                itemIdParticipant = 47;
                itemIdGp = 48;
                break;
                
            // 1st - C1
            case 10:
                itemIdParticipant = 5;
                itemIdGp = 6;
                break;
                
            // 2nd - Osaka
            case 11:
                itemIdParticipant = 11;
                itemIdGp = 12;
                break;
                
            // 3rd - Fukuoka
            case 12:
                itemIdParticipant = 17;
                itemIdGp = 18;
                break;
                
            // 4th - Nagoya
            case 13:
                itemIdParticipant = 23;
                itemIdGp = 24;
                break;
                
            // 5th - Yaesu
            case 14:
                itemIdParticipant = 29;
                itemIdGp = 30;
                break;
                
            // 9th - Hakone (Mt. Taikan)
            case 15:
                itemIdParticipant = 53;
                itemIdGp = 54;
                break;
                
            // 10th - Sub-center(Shibuya/Shinjuku)
            case 16:
                itemIdParticipant = 93;
                itemIdGp = 94;
                break;
                
            // 11th - Sub-center(Ikebukuro)
            case 17:
                itemIdParticipant = 99;
                itemIdGp = 100;
                break;
                
            // 12th - Kobe
            case 18:
                itemIdParticipant = 105;
                itemIdGp = 106;
                break;
                
            // 13th - New Belt Line
            case 19:
                itemIdParticipant = 141;
                itemIdGp = 142;
                break;
                
            // 14th - Yokohama
            case 20:
                itemIdParticipant = 147;
                itemIdGp = 148;
                break;
                
            // 15th - Hiroshima
            case 21:
                itemIdParticipant = 153;
                itemIdGp = 154;
                break;
        }

        // Participation Award
        for(let i=0; i<getCarParticipant.length; i++)
        {
            let checkItem = await prisma.carItem.findFirst({
                where: {
                    carId: getCarParticipant[i].carId,
                    category: 17,
                    itemId: itemIdParticipant,
                    amount: 1
                }
            });

            if (!checkItem)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: itemIdParticipant,
                        amount: 1,
                        earnedAt: Math.floor(new Date().getTime() / 1000)
                    }
                })
            }
        }

        // Ranking within the top 100
        for(let i=0; i<participantLength; i++)
        {
            let checkItem = await prisma.carItem.findFirst({
                where: {
                    carId: getCarParticipant[i].carId,
                    category: 17,
                    itemId: itemIdGp,
                    amount: 1
                }
            });

            if (!checkItem)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: itemIdGp,
                        amount: 1,
                        earnedAt: Math.floor(new Date().getTime() / 1000)
                    }
                })
            }
        }

        console.log('OCM Rewards Given');
    }
}