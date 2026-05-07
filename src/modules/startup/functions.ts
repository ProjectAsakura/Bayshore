import { prisma } from "../..";

// Import Proto
import * as wm from "../../wmmt/wm.proto";


// Get Competition (OCM) Schedule
export async function competitionSchedule(date: any, competitionId: any)
{
    // Get the Competition (OCM) schedule
    let ghostCompetitionSchedule;

    // Request by compedtitionId
    if(competitionId)
    {
        ghostCompetitionSchedule = await prisma.oCMEvent.findFirst({
            where: {
                competitionId: competitionId
            },
            orderBy: {
                competitionId: 'desc'
            }
        });
    }
    // Request by date
    else
    {
        ghostCompetitionSchedule = await prisma.oCMEvent.findFirst({
            where: {
                // qualifyingPeriodStartAt is less than current date
                qualifyingPeriodStartAt: { lte: Number(date) },
    
                // competitionEndAt is greater than current date
                competitionEndAt: { gte: Number(date) },
            }
        });
    }

    // Other variable
    let competitionSchedule;
    let lastCompetitionId: number = 0;
    let additionalCompetitionMsg = {};

    // Currently no Active Competition (OCM) Event.. Getting Previous Competition (OCM) Event
    let pastEvent = 0;
    if(!ghostCompetitionSchedule)
    {
        ghostCompetitionSchedule = await prisma.oCMEvent.findFirst({
            orderBy:{
                competitionId: 'desc'
            }
        });

        pastEvent = 1;
    }
    
    // Previous / Current Competition (OCM) available
    if(ghostCompetitionSchedule)
    {
        console.log('Ghost Competition (OCM) Available');

        let pastDay = date - ghostCompetitionSchedule.competitionEndAt;

        if(pastDay < 604800)
        {
            // Creating GhostCompetitionSchedule
            competitionSchedule = wm.wm.protobuf.GhostCompetitionSchedule.create({ 

                // Competition ID
                competitionId: ghostCompetitionSchedule.competitionId,

                // Competition Qualifying Start Timestamp
                qualifyingPeriodStartAt: ghostCompetitionSchedule.qualifyingPeriodStartAt, 

                // Competition Qualifying Close Timestamp
                qualifyingPeriodCloseAt: ghostCompetitionSchedule.qualifyingPeriodCloseAt,

                // Competition (Main Draw) Start Timestamp
                competitionStartAt: ghostCompetitionSchedule.competitionStartAt, 

                // Competition (Main Draw) Close Timestamp
                competitionCloseAt: ghostCompetitionSchedule.competitionCloseAt, 

                // Competition (Main Draw) End Timestamp
                competitionEndAt: ghostCompetitionSchedule.competitionEndAt, 

                // Competition (Main Draw) length per periods
                lengthOfPeriod: ghostCompetitionSchedule.lengthOfPeriod, 

                // Competition (Main Draw) interval (for tallying) per periods
                lengthOfInterval: ghostCompetitionSchedule.lengthOfInterval, 

                // Area for the Competition Event (GID_RUNAREA_*)
                area: ghostCompetitionSchedule.area, 

                // idk what this is
                minigamePatternId: ghostCompetitionSchedule.minigamePatternId 
            });

            // hof menu while OCM is ongoing
            if(ghostCompetitionSchedule.competitionId > 1) {
                lastCompetitionId = ghostCompetitionSchedule.competitionId -1;
            }
        }

        // It's previous Competition (OCM) event
        if(pastEvent === 1)
        {
            // Get current date
			let dates = Math.floor(new Date().getTime() / 1000);

            let lastScheduleCompetitionId = await prisma.oCMEvent.findFirst({
                where: {
                    competitionCloseAt: { lte: dates }
                },
                orderBy:{
                    competitionId: 'desc'
                }
            });

            lastCompetitionId = lastScheduleCompetitionId?.competitionId || 0;
        }

        // Competition (OCM) Response Message
        additionalCompetitionMsg = {
            latestCompetitionId: lastCompetitionId,
            competitionSchedule: competitionSchedule,
        }
    }

    return { additionalCompetitionMsg, competitionSchedule }
}