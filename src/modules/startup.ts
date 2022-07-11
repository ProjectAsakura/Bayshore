import { Application } from "express";
import {Module} from "module";
import * as wm from "../wmmt/wm.proto";

export default class StartupModule extends Module {
    register(app: Application): void {
        app.post('/method/register_system_info', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                regionId: 1,
                placeId: "JPN0123",
                allowedClientLogTypes: [],
                ghostSelectionMinRedoWait: 30,
                ghostSelectionMaxRedoWait: 4000,
                featureVersion: {
                    version: 9,
                    year: 2022,
                    month: 7,
                    pluses: 0,
                    releaseAt: 0 // idk what this is
                }
            }
            let resp = wm.wm.protobuf.RegisterSystemInfoResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })

        app.get('/resource/place_list', (req, res) => {
            console.log('place list');
            let places: wm.wm.protobuf.Place[] = [];
            places.push(new wm.wm.protobuf.Place({
                placeId: "JPN0123",
                regionId: 1,
                shopName: "WMMT6",
                country: "JPN"
            }));
            let resp = wm.wm.protobuf.PlaceList.encode({places});
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
    }
}