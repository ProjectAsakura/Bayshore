import { Application } from "express";
import { Module } from "module";
import { prisma } from "..";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";


export default class StartupModule extends Module {
    register(app: Application): void {

        // Register system info upon booting
        app.post('/method/register_system_info', async (req, res) => {

            // Get the request body for the load stamp target request
            let body = wm.wm.protobuf.RegisterSystemInfoRequest.decode(req.body);

            // Get current date
            let date = Math.floor(new Date().getTime() / 1000);

            // Get current / previous active OCM Event
            let ocmEventDate = await prisma.oCMEvent.findFirst({
                where: {
					// qualifyingPeriodStartAt is less than current date
					qualifyingPeriodStartAt: { lte: date },
		
					// competitionEndAt is greater than current date
					competitionEndAt: { gte: date },
				},
                orderBy: {
                    competitionEndAt: 'desc',
                }
            });

            let pastEvent = 0;
            if(!(ocmEventDate))
            {
                ocmEventDate = await prisma.oCMEvent.findFirst({
                    orderBy:{
                        competitionId: 'desc'
                    }
                });

                pastEvent = 1;
            }

            // Declare GhostCompetitionSchedule
            let competitionSchedule;
            let lastCompetitionId: number = 0;
            if(ocmEventDate)
            {
                let pastDay = date - ocmEventDate.competitionEndAt

                if(pastDay < 604800)
                {
                    console.log("OCM Event Available");

                    // Creating GhostCompetitionSchedule
                    competitionSchedule = wm.wm.protobuf.GhostCompetitionSchedule.create({ 

                        // OCM Competition ID (1 = C1 (Round 16), 4 = Nagoya (Round 19), 8 = Hiroshima (Round 21))
                        competitionId: ocmEventDate.competitionId,

                        // OCM Qualifying Start Timestamp
                        qualifyingPeriodStartAt: ocmEventDate.qualifyingPeriodStartAt, 

                        // OCM Qualifying Close Timestamp
                        qualifyingPeriodCloseAt: ocmEventDate.qualifyingPeriodCloseAt,

                        // OCM Competition (Main Draw) Start Timestamp
                        competitionStartAt: ocmEventDate.competitionStartAt, 

                        // OCM Competition (Main Draw) Close Timestamp
                        competitionCloseAt: ocmEventDate.competitionCloseAt, 

                        // OCM Competition (Main Draw) End Timestamp
                        competitionEndAt: ocmEventDate.competitionEndAt, 

                        // idk what this is
                        lengthOfPeriod: ocmEventDate.lengthOfPeriod, 

                        // idk what this is
                        lengthOfInterval: ocmEventDate.lengthOfInterval, 

                        // Area for the event (GID_RUNAREA_*, 8 is GID_RUNAREA_NAGOYA)
                        area: ocmEventDate.area, 

                        // idk what this is
                        minigamePatternId: ocmEventDate.minigamePatternId 
                    });
                }

                if(pastEvent === 1)
                {
                    console.log("Previous OCM Event Available");

                    lastCompetitionId = ocmEventDate.competitionId
                }
            }
            
            // Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                regionId: body.allnetRegion0,
                placeId: body.regionName0,
                allowedClientLogTypes: [],
                ghostSelectionMinRedoWait: 30,
                ghostSelectionMaxRedoWait: 4000,
                featureVersion: {
                    version: 9,
                    year: 2022,
                    month: 7,
                    pluses: 0,
                    releaseAt: 0 // idk what this is
                },
                latestCompetitionId: lastCompetitionId || null,
                competitionSchedule: competitionSchedule || null // OCM Event Available or not
            }

            // Encode the response
            let message = wm.wm.protobuf.RegisterSystemInfoResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
        })


        // Update Event Mode Serial
        app.post('/method/update_user_session', (req, res) => {

            let body = wm.wm.protobuf.UpdateUserSessionRequest.decode(req.body);

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots

            // Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }

            // Generate the response message
            let message = wm.wm.protobuf.UpdateUserSessionResponse.encode(msg);
            
            // Send the response to the client
            common.sendResponse(message, res);
        });

        // Ping
        app.post('/method/ping', (req, res) => {

            let body = wm.wm.protobuf.PingRequest.decode(req.body);

            // Response data
            let ping = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                pong: body.ping || 1
            };

            // Encode the response
            let message = wm.wm.protobuf.PingResponse.encode(ping);

            // Send the response to the client
            common.sendResponse(message, res);
        })

        
		app.post('/method/register_system_stats', async (req, res) => {

            let body = wm.wm.protobuf.RegisterSystemStatsRequest.decode(req.body);

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots

			// Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			}

			// Encode the response
			let message = wm.wm.protobuf.RegisterSystemStatsResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})


        app.post('/method/update_event_mode_serial', async (req, res) => {

            let body = wm.wm.protobuf.UpdateEventModeSerialRequest.decode(req.body);

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots

			// Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                serialError: wm.wm.protobuf.EventModeSerialErrorCode.SERIAL_NO_INPUT
			}

			// Encode the response
			let message = wm.wm.protobuf.UpdateEventModeSerialResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})


        app.post('/method/submit_client_log', async (req, res) => {

            let body = wm.wm.protobuf.SubmitClientLogRequest.decode(req.body);

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots

			// Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			}

			// Encode the response
			let message = wm.wm.protobuf.SubmitClientLogResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})
    }
}
