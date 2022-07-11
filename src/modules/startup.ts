import { Application } from "express";
import {Module} from "module";
import {ClientLogType, ErrorCode, RegisterSystemInfoRequest, RegisterSystemInfoResponse} from "../proto/wm";

export default class StartupModule extends Module {
    register(app: Application): void {
        app.post('/method/register_system_info', (req, res) => {
            for (let i of req.rawHeaders) {
                console.log(i);
            }

            let b = RegisterSystemInfoRequest.decode(req.body);
            console.log(b);
            let msg = {
                error: ErrorCode.ERR_SUCCESS,
                regionId: b.allnetRegion0,
                placeId: b.allnetPlaceId.toString(),
                allowedClientLogTypes: [
                    ClientLogType.LOG_ERROR
                ],
                ghostSelectionMinRedoWait: 1,
                ghostSelectionMaxRedoWait: 3,
                inviteFriendCampaignSchedule: undefined,
                featureVersion: {
                    version: 304,
                    year: 2022,
                    month: 7,
                    pluses: 1,
                    releaseAt: 1657438767 // idk what this is
                },
                latestCompetitionId: 0,
                competitionSchedule: undefined,
                scratchNotes: "test" // null
            }
            let resp = RegisterSystemInfoResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('User-Agent', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053');
            r.write(Buffer.from(end));
            r.writeContinue(() => {
                console.log('writeContinue')
            });
        })
    }
}