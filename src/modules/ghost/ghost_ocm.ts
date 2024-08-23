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

        // 16th - C1
        if(competitionId === 1)
        {
            // Participation Award (Fantasy)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 204,
                        amount: 1
                    }
                })
            }

            // Ranking within the top 100 (Unicorn GP)
            for(let i=0; i<participantLength; i++)
            {
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
            // Participation Award (Tread Pattern)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 210,
                        amount: 1
                    }
                })
            }

            // Ranking within the top 100 (Griffon GP)
            for(let i=0; i<participantLength; i++)
            {
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
            // Participation Award (City)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 216,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (Wyvern GP)
            for(let i=0; i<participantLength; i++)
            {
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
            // Participation Award (Tribal)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 222,
                        amount: 1
                    }
                })
            }

            // Ranking within the top 100 (Gargoyle GP)
            for(let i=0; i<participantLength; i++)
            {
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
            // Participation Award (Silver Craft)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 35,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (Bear GP)
            for(let i=0; i<participantLength; i++)
            {
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
            // Participation Award (Gemstone)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 228,
                        amount: 1
                    }
                })    
            }

            // Ranking within the top 100 (Minotaur GP)
            for(let i=0; i<participantLength; i++)
            { 
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
            // Participation Award (Koi)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 41,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (Crocodile GP)
            for(let i=0; i<participantLength; i++)
            {
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
            // Participation Award (Ukiyo-e)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 234,
                        amount: 1
                    }
                })
            }

            // Ranking within the top 100 (Cerberus GP)
            for(let i=0; i<participantLength; i++)
            {
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
            // Participation Award (Studs)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 47,
                        amount: 1
                    }
                })  
            }

            // Ranking within the top 100 (Elephant GP)
            for(let i=0; i<participantLength; i++)
            {
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
        // 1st - C1
        else if(competitionId === 10)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 5,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 6,
                        amount: 1
                    }
                })
            }
        }
        // 2nd - Osaka
        else if(competitionId === 11)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 11,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 12,
                        amount: 1
                    }
                })
            }
        }
        // 3rd - Fukuoka
        else if(competitionId === 12)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 17,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 18,
                        amount: 1
                    }
                })
            }
        }
        // 4th - Nagoya
        else if(competitionId === 13)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 23,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 24,
                        amount: 1
                    }
                })
            }
        }
        // 5th - Yaesu
        else if(competitionId === 14)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 29,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 30,
                        amount: 1
                    }
                })
            }
        }
        // 9th - Hakone (Mt. Taikan)
        else if(competitionId === 15)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 53,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 54,
                        amount: 1
                    }
                })
            }
        }
        // 10th - Sub-center(Shibuya/Shinjuku)
        else if(competitionId === 16)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 93,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 94,
                        amount: 1
                    }
                })
            }
        }
        // 11th - Sub-center(Ikebukuro)
        else if(competitionId === 17)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 99,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 100,
                        amount: 1
                    }
                })
            }
        }
        // 12th - Kobe
        else if(competitionId === 18)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 105,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 106,
                        amount: 1
                    }
                })
            }
        }
        // 13th - New Belt Line
        else if(competitionId === 19)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 141,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 142,
                        amount: 1
                    }
                })
            }
        }
        // 14th - Yokohama
        else if(competitionId === 20)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 147,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 148,
                        amount: 1
                    }
                })
            }
        }
        // 15th - Hiroshima
        else if(competitionId === 21)
        {
            // Participation Award (// TODO: name this)
            for(let i=0; i<getCarParticipant.length; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 153,
                        amount: 1
                    }
                }) 
            }

            // Ranking within the top 100 (// TODO: name this GP)
            for(let i=0; i<participantLength; i++)
            {
                await prisma.carItem.create({
                    data:{
                        carId: getCarParticipant[i].carId,
                        category: 17,
                        itemId: 154,
                        amount: 1
                    }
                })
            }
        }

        console.log('OCM Rewards Given');
    }
}