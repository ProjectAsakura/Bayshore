import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "./util/common";
import * as startupFunctions from "./startup/functions";


export default class StartupModule {
    register(app: Application): void {

        // Register system info upon booting
        app.post('/method/register_system_info', async (req, res) => {

            // Get the request body for the load stamp target request
            let body = wm.wm.protobuf.RegisterSystemInfoRequest.decode(req.body);

            // Get current date
            let date = Math.floor(new Date().getTime() / 1000);

            // Get Competition (OCM) Event Date
            let getCompetitionSchedule = await startupFunctions.competitionSchedule(date, null);
            let additionalCompetitionMsg = getCompetitionSchedule.additionalCompetitionMsg;
            
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

                // Competition (OCM)
                ...additionalCompetitionMsg
            }

            // Encode the response
            let message = wm.wm.protobuf.RegisterSystemInfoResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
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
            common.sendResponse(message, res, req.rawHeaders);
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
            common.sendResponse(message, res, req.rawHeaders);
        })

        
        // Register System Stats
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
            common.sendResponse(message, res, req.rawHeaders);
		})


        // Update Event Mode Serial
        app.post('/method/update_event_mode_serial', async (req, res) => {

            let body = wm.wm.protobuf.UpdateEventModeSerialRequest.decode(req.body);

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots

			// Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                serialError: wm.wm.protobuf.EventModeSerialErrorCode.SERIAL_SUCCESS,
                eventModeSerial: body.eventModeSerial || '285013990002',
                startAt: 0,
                endAt: 2147483647
			}

			// Encode the response
			let message = wm.wm.protobuf.UpdateEventModeSerialResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})


        // Submit Client Log
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
            common.sendResponse(message, res, req.rawHeaders);
		})
    }
}
