import { Application } from "express";
import { Module } from "../module";
import * as wm from "../wmmt/wm.proto";
import * as svc from "../wmmt/service.proto";

export default class GameModule extends Module {
    register(app: Application): void {
        app.post('/method/load_time_attack_record', (req, res) => {
            console.log('load TA records');
            let body = wm.wm.protobuf.LoadTimeAttackRecordRequest.decode(req.body);
            let ping = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            };
            let resp = wm.wm.protobuf.LoadTimeAttackRecordResponse.encode(ping);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
        //banapass loading
		app.post('/method/load_user', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				numOfOwnedCars: 1,
				spappState: 0,
				transferState: 0,
            }
            let resp = wm.wm.protobuf.LoadUserResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		app.post('/method/load_drive_information', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }
            let resp = wm.wm.protobuf.LoadDriveInformationResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		app.post('/method/create_car', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				userId: 69,
				carId: 8,
            }
            let resp = wm.wm.protobuf.CreateCarResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		app.post('/method/load_game_history', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				taRankingUpdatedAt: 0,
				ghostBattleCount: 69696969,
				ghostBattleWinCount: 420691337,
				stampSheetCount: 100,
            }
            let resp = wm.wm.protobuf.LoadGameHistoryResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		app.post('/method/save_game_result', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				/*
				carId: 8,
				gameMode: 4,
				playedAt: 0,
				playCount: 1,
				retired: false,
				timeup: false,
				odometer: 694201337,
				earnedCustomColor: false,
				confirmedTutorials: [],
				earnedItems: {
					category: wm.wm.protobuf.ICarItem[wm.wm.protobuf.ItemCategory.CAT_NUMBER_PLATE],
					itemId: 0,
				},
				earnedUserItems: {
					category: wm.wm.protobuf.ICarItem[wm.wm.protobuf.ItemCategory.CAT_NUMBER_PLATE],
					itemId: 1,
				},
				preservedTitles: "ur gay",
				neighborCars: 69,
				*/
            }
            let resp = wm.wm.protobuf.SaveGameResultResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		app.post('/method/update_user_session', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }
            let resp = wm.wm.protobuf.UpdateUserSessionResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		//ghost battle stuff
		app.post('/method/load_ghost_battle_info', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				stampSheetCount: 6969,
            }
            let resp = wm.wm.protobuf.LoadGhostBattleInfoResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })

		app.post('/method/lock_crown', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }
            let resp = svc.wm.protobuf.LockCrownResponse.encode(msg);
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