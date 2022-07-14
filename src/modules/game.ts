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
		
		app.post('/method/load_scratch_information', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				currentSheet: 21,
				numOfScratched: 0,
            }
            let resp = wm.wm.protobuf.LoadScratchInformationResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		app.post('/method/update_car', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }
            let resp = wm.wm.protobuf.UpdateCarResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		//banapass loading
		
		app.post('/method/start_transfer', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				userId: 0,
				
            }
            let resp = wm.wm.protobuf.StartTransferResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
		
		
		

		
		app.post('/method/load_user', (req, res) => {
		//everything after this should be replaced with values from a database, but thats above my pay grade :P
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				unlockAt: 1563072119,
				accessCode: "12345678901234567890",
				banapassportAmId: 69,
				mbid: 69,
				userId: 69,
				numOfOwnedCars: 1,
				spappState: wm.wm.protobuf.SmartphoneAppState.SPAPP_UNREGISTERED,
				transferState: wm.wm.protobuf.TransferState.TRANSFERRED,
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
						level: 20,
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
						transferred: false,
						driveLastPlayedAt: 0,
					},
				],
				unusedCarTickets: [
					{
						category: wm.wm.protobuf.ItemCategory.CAT_CAR_TICKET,
						itemId: 1,
					},
				],
				tutorials: [
					true, //TUTORIAL_ID_STORY
					true, //TUTORIAL_ID_TIME_ATTACK
					true, //TUTORIAL_ID_GHOST
					true, //TUTORIAL_ID_GHOST_CHALLENGE
					true, //TUTORIAL_ID_GHOST_LEVEL
					true, //TUTORIAL_ID_UNUSED_5
					true, //TUTORIAL_ID_GHOST_SEARCH
					true, //TUTORIAL_ID_GHOST_COMPETITION
					true, //TUTORIAL_ID_HP600_CARD
					true, //TUTORIAL_ID_UNUSED_9
					true, //TUTORIAL_ID_COMPETITION_QUALIFIED
					true, //TUTORIAL_ID_COMPETITION_TERMINAL
					true, //TUTORIAL_ID_COMPETITION_NOTICE
					true, //TUTORIAL_ID_COMPETITION_FINISHED
					true, //TUTORIAL_ID_UNUSED_14
					true, //TUTORIAL_ID_UNUSED_15
					true, //TUTORIAL_ID_UNUSED_16
					true, //TUTORIAL_ID_UNUSED_17
					true, //TUTORIAL_ID_UNUSED_18
					true, //TUTORIAL_ID_UNUSED_19
					true, //TUTORIAL_ID_GHOST_STAMP
					true, //TUTORIAL_ID_GHOST_STAMP_DECLINED
					true, //TUTORIAL_ID_GHOST_STAMP_FRIENDS
					true, //TUTORIAL_ID_TERMINAL_SCRATCH
					true, //TUTORIAL_ID_TURN_SCRATCH_SHEET
					true, //TUTORIAL_ID_INVITE_FRIEND_CAMPAIGN
					true, //TUTORIAL_ID_CAR_COUPON_FULL_TUNED_RECEIVABLE
					true, //TUTORIAL_ID_VS_CONTINUE_TICKET
					true, //TUTORIAL_ID_UNUSED_28
					true, //TUTORIAL_ID_UNUSED_29
					true, //TUTORIAL_ID_UNUSED_30
					true, //TUTORIAL_ID_DRESS_UP
					true, //TUTORIAL_ID_MULTI_GHOST
					true, //TUTORIAL_ID_STORY_NEW_FEATURE
					true, //TUTORIAL_ID_GHOST_NEW_FEATURE
					true, //TUTORIAL_ID_GHOST_REGION_MAP
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
				noticeWindow: [],
				noticeWindowMessage: [],
				transferNotice: {
					needToSeeTransferred: false,
					totalMaxiGold: 0,
					numOfPorscheCars: 0,
					porscheModels: [],
					hasR35: false,
				},
				restrictedModels: [],
				announceFeature: false,
				announceMobile: false,
				availableTickets: [
					{
						category: wm.wm.protobuf.ItemCategory.CAT_CAR_TICKET,
						itemId: 1,
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
						level: 20,
						windowSticker: false,
						rivalMarker: 0,
						lastPlayedAt: 0,
						aura: 0,
						auraMotif: 0,
						ghostLevel: 1,
						country: "JPN",
						searchCode: "",
				},
				tuningPoint: 0,
				odometer: 0,
				playCount: 10,
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
				vsPlayCount: 69699696,
				vsBurstCount: 69696969,
				vsStarCount: 696969,
				vsStarCountMax: 6969696,
				vsCoolOrWild: 0,
				vsSmoothOrRough: 0,
				vsTripleStarMedals: 69699696,
				vsDoubleStarMedals: 0,
				vsSingleStarMedals: 0,
				vsPlainMedals: 0,
				rgPlayCount: 6000,
				rgWinCount: 6000,
				rgTrophy: 6000,
				rgPreviousVersionPlayCount: 6000,
				rgScore: 1,
				rgStamp: 100,
				rgAcquireAllCrowns: true,
				dressupLevel: 63,
				dressupPoint: 0,
				stPlayCount: 0,
				stClearBits: 0,
				stClearDivCount: 0,
				stClearCount: 0,
				stLoseBits: 0,
				stConsecutiveWins: 699999,
				stConsecutiveWinsMax: 420,
				stCompleted_100Episodes: false,
				auraMotifAutoChange: false,
				screenshotCount: 0,
				transferred: true,
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
				ghostBattleCount: 9999,
				ghostBattleWinCount: 9999,
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
				stampSheetCount: 100,
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
