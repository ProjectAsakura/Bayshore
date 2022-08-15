import { Application } from "express";
import { Module } from "module";
import { prisma } from "..";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";


export default class TimeAttackModule extends Module {
    register(app: Application): void {

        // Load time Attack Record
		app.post('/method/load_time_attack_record', async (req, res) => {

            // Get the request body for the load terminal information request
            let body = wm.wm.protobuf.LoadTimeAttackRecordRequest.decode(req.body);

			let taRecordsForModel = await prisma.timeAttackRecord.findMany({
				take: 100,
				where: {
					model: body.model,
					course: body.course
				},
				orderBy: {
					time: 'asc'
				}
			});
			let taRecordsOverall = await prisma.timeAttackRecord.findMany({
				take: 100,
				where: {
					course: body.course
				},
				orderBy: {
					time: 'asc'
				}
			});
			let taRecordPb = await prisma.timeAttackRecord.findFirst({
				where: {
					carId: body.carId,
					course: body.course
				},
				orderBy: {
					time: 'asc'
				}
			});
            
			if (!taRecordPb) {

                // Response data
				let msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					wholeRanking: taRecordsOverall.map(a => a.time),
					modelRanking: taRecordsForModel.map(a => a.time)
				};
                
				// Encode the response
                let message = wm.wm.protobuf.LoadTimeAttackRecordResponse.encode(msg);

                // Send the response to the client
                common.sendResponse(message, res);
				return;
			}

			// Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				wholeRanking: taRecordsOverall.map(a => a.time),
				modelRanking: taRecordsForModel.map(a => a.time),
				personalBestTime: taRecordPb.time,
				pbSection_1Time: taRecordPb.section1Time,
				pbSection_2Time: taRecordPb.section2Time,
				pbSection_3Time: taRecordPb.section3Time,
				pbSection_4Time: taRecordPb.section4Time,
				pbSection_5Time: taRecordPb.section5Time,
				pbSection_6Time: taRecordPb.section6Time,
				pbSection_7Time: taRecordPb.section7Time,
            };

			// Encode the response
            let message = wm.wm.protobuf.LoadTimeAttackRecordResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
        })
    }
}
