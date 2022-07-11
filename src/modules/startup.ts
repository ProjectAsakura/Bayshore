import { Application } from "express";
import {Module} from "module";
import {ClientLogType, ErrorCode, Place, PlaceList, RegisterSystemInfoRequest, RegisterSystemInfoResponse} from "../proto/wm";

export default class StartupModule extends Module {
    register(app: Application): void {
        app.post('/method/register_system_info', (req, res) => {
            let msg = {
                error: ErrorCode.ERR_SUCCESS,
                regionId: 1,
                placeId: "123",
                allowedClientLogTypes: [],
                ghostSelectionMinRedoWait: 30,
                ghostSelectionMaxRedoWait: 4000,
                inviteFriendCampaignSchedule: undefined,
                featureVersion: {
                    version: 9,
                    year: 2022,
                    month: 7,
                    pluses: 0,
                    releaseAt: 0 // idk what this is
                },
                latestCompetitionId: 0,
                competitionSchedule: undefined,
                scratchNotes: "" // null
            }
            let resp = RegisterSystemInfoResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .status(200);
            r.send(Buffer.from(end));
        })

        app.get('/resource/place_list', (req, res) => {
            console.log('place list');
            let places: Place[] = [];
            places.push({
                placeId: "123",
                regionId: 1,
                shopName: "WMMT6",
                country: "JPN"
            });
            let resp = PlaceList.encode({places});
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .status(200);
            r.send(resp);
        })
    }
}