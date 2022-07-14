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
		
		//terminal specific
		app.post('/method/load_terminal_information', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				prizeReceivable: false,
				transferNotice: {
					needToSeeTransferred: false
				},
				announceFeature: false,
				freeScratched: true
				
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
		
        //banapass loading
		app.post('/method/load_user', (req, res) => {
			//everything after this should be replaced with values from a database, but thats above my pay grade :P
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				accessCode: "12345678901234567890",
				banapassportAmId: 0,
				mbid: 0,
				userId: 0,
				numOfOwnedCars: 1,
				spappState: 0,
				transferState: 1,
				cars: [
					{
						carId: 8,
						userId: 0,
						regionId: 0,
						name: "a",
						manufacturer: 0,
						model: 0,
						visualModel: 8,
						defaultColor: 0,
						customColor: 0,
						wheel: 0,
						wheelColor: 0,
						aero: 0,
						bonnet: 0,
						wing: 0,
						mirror: 0,
						neon: 0,
						trunk: 0,
						plate: 0,
						plateColor: 0,
						plateNumber: 0,
						tunePower: 17,
						tuneHandling: 17,
						title: "Beli Kabel LAN",
						level: 0,
						windowSticker: false,
						rivalMarker: 0,
						lastPlayedAt: 0,
						aura: 0,
						auraMotif: 0,
						ghostLevel: 0,
						country: "JPN",
						searchCode: "a",
					},
				],
				carStates: [
					{
						hasOpponentGhost: false,
						toBeDeleted: false,
						eventJoined: false,
						transferred: true,
						driveLastPlayedAt: 0,
					},
				],
				unusedCarTickets: [
					{
						category: wm.wm.protobuf.ItemCategory.CAT_CAR_TICKET,
						itemId: 0,
					},
				],
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
				transferNotice: {
					needToSeeTransferred: false,
					totalMaxiGold: 0,
					numOfPorscheCars: 0,
					porscheModels: [],
					hasR35: false,
				},
				availableTickets: [
					{
						category: wm.wm.protobuf.ItemCategory.CAT_CAR_TICKET,
						itemId: 1
					}
				]
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
		
		app.post('/method/load_car', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				//everything after this should be replaced with values from a database, but thats above my pay grade :P
				car: {
					carId: 1,
					userId: 0,
					regionId: 0,
					name: "a",
					manufacturer: 0,
					model: 0,
					visualModel: 8,
					defaultColor: 0,
					customColor: 0,
					wheel: 0,
					wheelColor: 0,
					aero: 0,
					bonnet: 0,
					wing: 0,
					mirror: 0,
					neon: 0,
					trunk: 0,
					plate: 0,
					plateColor: 0,
					plateNumber: 0,
					tunePower: 17,
					tuneHandling: 17,
					title: "Beli Kabel LAN",
					level: 0,
					windowSticker: false,
					rivalMarker: 0,
					lastPlayedAt: 0,
					aura: 0,
					auraMotif: 0,
					ghostLevel: 0,
					country: "JPN",
					searchCode: "a",
				},
				tuningPoint: 34,
				odometer: 0,
				playCount: 3,
				earnedCustomColor: false,
				setting:
				{
					view: false,
					transmission: false,
					retire: true,
					meter: 1,
					navigationMap: true,
					volume: 1,
					bgm: 0,
					nameplate: 0,
					nameplateColor: 0,
					terminalBackground: 0,
				},
				vsPlayCount: 1,
				vsBurstCount: 1,
				vsStarCount: 1,
				vsStarCountMax: 1,
				vsCoolOrWild: 1,
				vsSmoothOrRough: 0,
				vsTripleStarMedals: 1,
				vsDoubleStarMedals: 0,
				vsSingleStarMedals: 0,
				vsPlainMedals: 0,
				rgPlayCount: 1,
				rgWinCount: 1,
				rgTrophy: 1,
				rgPreviousVersionPlayCount: 0,
				rgScore: 0,
				rgStamp: 1,
				rgAcquireAllCrowns: true,
				dressupLevel: 63,
				dressupPoint: 0,
				stPlayCount: 1,
				stClearBits: 0,
				stClearDivCount: 0,
				stClearCount: 1,
				stLoseBits: 0,
				stConsecutiveWins: 69,
				stConsecutiveWinsMax: 69,
				stCompleted_100Episodes: false,
				auraMotifAutoChange: false,
				screenshotCount: 0,
				transferred: false,
            }
            let resp = wm.wm.protobuf.LoadCarResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		app.post('/method/load_stamp_target', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }
            let resp = wm.wm.protobuf.LoadStampTargetResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		app.post('/method/save_scratch_sheet', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				currentSheet: 0,
				numOfScratched: 0,
            }
            let resp = wm.wm.protobuf.SaveScratchSheetResponse.encode(msg);
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
				carId: 1,
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
