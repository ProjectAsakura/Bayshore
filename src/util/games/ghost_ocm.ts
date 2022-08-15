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
        }
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
                        top1advantage = OCMTally[i].result;

                        let getTrail = await prisma.oCMGhostTrail.findFirst({
                            where:{
                                carId: OCMTally[i].carId,
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
                                    periodId: getTrail.periodId + 1,
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
                    

                    if(i === 0){
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
                    top1advantage = OCMTally[i].result;

                    let getTrail = await prisma.oCMGhostTrail.findFirst({
                        where:{
                            carId: OCMTally[i].carId,
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
                                periodId: getTrail.periodId + 1,
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
                

                if(i === 0){
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
        topresult.push(ocmTallyRecord[i].carId);
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
            result: 'asc'
        }
    });

    let participantLength = getCarParticipant.length;

    // Participant is less than 100
    if(participantLength < 101)
    {
        // 16th - C1
        if(competitionId === 1)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (Fantasy)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 204,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Unicorn)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 205,
                        amount: 1
                    }
                })
            }
        }
        // 17th - Osaka
        else if(competitionId === 2)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (Tread Pattern)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 210,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Griffon)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 211,
                        amount: 1
                    }
                })
            }
        }
        // 18th - Fukuoka
        else if(competitionId === 3)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (City)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 216,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Wyvern)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 217,
                        amount: 1
                    }
                })
            }
        }
        // 19th - Nagoya
        else if(competitionId === 4)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (Tribal)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 222,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Gargoyle)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 223,
                        amount: 1
                    }
                })
            }
        }
        // 6th - C1
        else if(competitionId === 5)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (Silver Craft)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 35,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Bear)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 36,
                        amount: 1
                    }
                })
            }
        }
        // 20th - Kobe
        else if(competitionId === 6)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (Gemstone)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 228,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Minotaur)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 229,
                        amount: 1
                    }
                })
            }
        }
        // 7th - Fukutoshin
        else if(competitionId === 7)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (Koi)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 41,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Crocodile)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 42,
                        amount: 1
                    }
                })
            }
        }
        // 21st - Hiroshima
        else if(competitionId === 8)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (Ukiyo-e)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 234,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Cerberus)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 235,
                        amount: 1
                    }
                })
            }
        }
        // 8th - Hakone
        else if(competitionId === 9)
        {
            for(let i=0; i<participantLength; i++)
            {
                // Participation Award (Studs)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 47,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Elephant)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 48,
                        amount: 1
                    }
                })
            }
        }
    }
    // Participant is more than 100
    else
    {
        // 16th - C1
        if(competitionId === 1)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (Fantasy)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 204,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Unicorn)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 205,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (Fantasy)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 204,
                        amount: 1
                    }
                })
            }
        }
        // 17th - Osaka
        else if(competitionId === 2)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (Tread Pattern)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 210,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Griffon)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 211,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (Tread Pattern)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 210,
                        amount: 1
                    }
                })
            }
        }
        // 18th - Fukuoka
        else if(competitionId === 3)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (City)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 216,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Wyvern)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 217,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (City)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 216,
                        amount: 1
                    }
                })
            }
        }
        // 19th - Nagoya
        else if(competitionId === 4)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (Tribal)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 222,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Gargoyle)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 223,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (Tribal)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 222,
                        amount: 1
                    }
                })
            }
        }
        // 6th - C1
        else if(competitionId === 5)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (Silver Craft)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 35,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Bear)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 36,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (Silver Craft)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 35,
                        amount: 1
                    }
                })
            }
        }
        // 20th - Kobe
        else if(competitionId === 6)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (Gemstone)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 228,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Minotaur)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 229,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (Gemstone)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 228,
                        amount: 1
                    }
                })
            }
        }
        // 7th - Fukutoshin
        else if(competitionId === 7)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (Koi)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 41,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Crocodile)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 42,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (Koi)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 41,
                        amount: 1
                    }
                })
            }
        }
        // 21st - Hiroshima
        else if(competitionId === 8)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (Ukiyo-e)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 234,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Cerberus)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 235,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (Ukiyo-e)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 234,
                        amount: 1
                    }
                })
            }
        }
        // 8th - Hakone
        else if(competitionId === 9)
        {
            for(let i=0; i<101; i++)
            {
                // Participation Award (Studs)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 47,
                        amount: 1
                    }
                })

                // Ranking within the top 100 (Elephant)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 48,
                        amount: 1
                    }
                })
            }

            for(let i=101; i<participantLength; i++)
            {
                // Participation Award (Studs)
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 47,
                        amount: 1
                    }
                })
            }
        }
    }
}