import { Application } from "express";
import { Module } from "../module";
import * as wm from "../wmmt/wm.proto";
import * as svc from "../wmmt/service.proto";
import { prisma } from "..";
import { User } from "@prisma/client";

export default class GameModule extends Module {
    register(app: Application): void {
		app.post('/method/save_game_result', async (req, res) => {
			let body = wm.wm.protobuf.SaveGameResultRequest.decode(req.body);
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				}
			});
			switch (body.gameMode) {
				case wm.wm.protobuf.GameMode.MODE_STORY:
					{
						let maxConsecutiveWins = car!.stConsecutiveWinsMax;
						if (maxConsecutiveWins > body.stResult!.stConsecutiveWins!) {
							maxConsecutiveWins = body.stResult!.stConsecutiveWins!;
						}
						await prisma.car.update({
							where: {
								carId: body.carId,
							},
							data: {
								title: body.car!.title!,
								level: body.car!.level!,
								tunePower: body.car!.tunePower!,
								tuneHandling: body.car!.tuneHandling!,
								stClearBits: body.stResult!.stClearBits!,
								tuningPoints: body.stResult!.tuningPoint!,
								stPlayCount: body.stResult!.stPlayCount,
								stClearCount: body.stResult!.stClearCount!,
								stClearDivCount: body.stResult!.stClearDivCount!,
								stCompleted100Episodes: body.stResult!.stCompleted_100Episodes!,
								stConsecutiveWins: body.stResult!.stConsecutiveWins!,
								stConsecutiveWinsMax: maxConsecutiveWins,
								odometer: body.odometer,
								playCount: body.playCount
							}
						})
						break;
					}
			}
			let user = await prisma.user.findFirst({
				where: {
					id: body.car!.userId!
				}
			});
			let storedTutorials = user!.tutorials;
			body.confirmedTutorials.forEach(
				(idx) => storedTutorials[idx] = true
			);
			await prisma.user.update({
				where: {
					id: body.car!.userId!
				},
				data: {
					tutorials: storedTutorials
				}
			});

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
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

		app.post('/method/load_user', async (req, res) => {
			let body = wm.wm.protobuf.LoadUserRequest.decode(req.body);
			let user = await prisma.user.findFirst({
				where: {
					chipId: body.cardChipId,
					accessCode: body.accessCode
				},
				include: {
					cars: {
						include: {
							state: true,
						}
					},
				}
			});
			if (!user) {
				console.log('no such user');
				let msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					numOfOwnedCars: 0,
					cars: [],
					spappState: wm.wm.protobuf.SmartphoneAppState.SPAPP_UNREGISTERED,
					transferState: wm.wm.protobuf.TransferState.NOT_REGISTERED
				};
				let user = await prisma.user.create({
					data: {
						chipId: body.cardChipId,
						accessCode: body.accessCode,
						tutorials: [
							false, //TUTORIAL_ID_STORY
							false, //TUTORIAL_ID_TIME_ATTACK
							false, //TUTORIAL_ID_GHOST
							false, //TUTORIAL_ID_GHOST_CHALLENGE
							false, //TUTORIAL_ID_GHOST_LEVEL
							false, //TUTORIAL_ID_UNUSED_5
							false, //TUTORIAL_ID_GHOST_SEARCH
							false, //TUTORIAL_ID_GHOST_COMPETITION
							false, //TUTORIAL_ID_HP600_CARD
							false, //TUTORIAL_ID_UNUSED_9
							false, //TUTORIAL_ID_COMPETITION_QUALIFIED
							false, //TUTORIAL_ID_COMPETITION_TERMINAL
							false, //TUTORIAL_ID_COMPETITION_NOTICE
							false, //TUTORIAL_ID_COMPETITION_FINISHED
							false, //TUTORIAL_ID_UNUSED_14
							false, //TUTORIAL_ID_UNUSED_15
							false, //TUTORIAL_ID_UNUSED_16
							false, //TUTORIAL_ID_UNUSED_17
							false, //TUTORIAL_ID_UNUSED_18
							false, //TUTORIAL_ID_UNUSED_19
							false, //TUTORIAL_ID_GHOST_STAMP
							false, //TUTORIAL_ID_GHOST_STAMP_DECLINED
							false, //TUTORIAL_ID_GHOST_STAMP_FRIENDS
							false, //TUTORIAL_ID_TERMINAL_SCRATCH
							false, //TUTORIAL_ID_TURN_SCRATCH_SHEET
							false, //TUTORIAL_ID_INVITE_FRIEND_CAMPAIGN
							false, //TUTORIAL_ID_CAR_COUPON_FULL_TUNED_RECEIVABLE
							false, //TUTORIAL_ID_VS_CONTINUE_TICKET
							false, //TUTORIAL_ID_UNUSED_28
							false, //TUTORIAL_ID_UNUSED_29
							false, //TUTORIAL_ID_UNUSED_30
							false, //TUTORIAL_ID_DRESS_UP
							false, //TUTORIAL_ID_MULTI_GHOST
							true, //TUTORIAL_ID_STORY_NEW_FEATURE
							true, //TUTORIAL_ID_GHOST_NEW_FEATURE
							true, //TUTORIAL_ID_GHOST_REGION_MAP
						],
					}
				});
				console.log('user made')
				if (!user) {
					msg.error = wm.wm.protobuf.ErrorCode.ERR_REQUEST;
				}
				let resp = wm.wm.protobuf.LoadUserResponse.encode(msg);
				let end = resp.finish();
				let r = res
					.header('Server', 'v388 wangan')
					.header('Content-Type', 'application/x-protobuf; revision=8053')
					.header('Content-Length', end.length.toString())
					.status(200);
				r.send(Buffer.from(end));
				return;
			}
			let carStates = user.cars.map(e => e.state);
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				numOfOwnedCars: user.cars.length,
				spappState: wm.wm.protobuf.SmartphoneAppState.SPAPP_UNREGISTERED,
				transferState: wm.wm.protobuf.TransferState.TRANSFERRED,
				carStates,
				cars: user.cars,
				userId: user.id,
				banapassportAmId: 1,
				mbId: 1,
				tutorials: user.tutorials
			}
			if (user.userBanned) {
				msg.error = wm.wm.protobuf.ErrorCode.ERR_ID_BANNED;
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
				availableTickets: []
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

		app.post('/method/update_car', async (req, res) => {
			let body = wm.wm.protobuf.UpdateCarRequest.decode(req.body);
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				},
				include: {
					settings: true
				}
			});
			await prisma.carSettings.update({
				where: {
					dbId: car?.carSettingsDbId,
				},
				data: {
					...body.setting
				}
			});

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

		// THE GAME DOES NOT FUCKING USE THIS
		/*
		app.post('/method/create_user', async (req, res) => {
			let body = wm.wm.protobuf.CreateUserRequest.decode(req.body);
			let user = await prisma.user.create({
				data: {
					chipId: body.cardChipId,
					accessCode: body.accessCode,
				}
			});

			let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				userId: user.id,
            }
            let resp = wm.wm.protobuf.CreateUserResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
		})
		*/

		app.post('/method/create_car', async (req, res) => {
			let body = wm.wm.protobuf.CreateCarRequest.decode(req.body);
			let user: User | null;
			if (body.userId) {
				user = await prisma.user.findFirst({
					where: {
						id: body.userId
					},
				});
			} else {
				user = await prisma.user.findFirst({
					where: {
						chipId: body.cardChipId,
						accessCode: body.accessCode
					},
				})
			}
			if (!user) throw new Error();
			let settings = await prisma.carSettings.create({
				data: {}
			});
			let state = await prisma.carState.create({
				data: {}
			})
			let car = await prisma.car.create({
				data: {
					userId: user.id,
					manufacturer: body.car.manufacturer!!,
					defaultColor: body.car.defaultColor!!,
					model: body.car.model!!,
					visualModel: body.car.visualModel!!,
					name: body.car.name!!,
					title: body.car.title!!,
					level: body.car.level!!,
					tunePower: body.car.tunePower!!,
					tuneHandling: body.car.tuneHandling!!,
					carSettingsDbId: settings.dbId,
					carStateDbId: state.dbId
				}
			})
			console.log(`Created new car ${car.name} with ID ${car.carId}`);
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				userId: body.userId,
				carId: car.carId,
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

		app.post('/method/load_car', async (req, res) => {
			let body = wm.wm.protobuf.LoadCarRequest.decode(req.body);
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				},
				include: {
					settings: true,
					items: true,
				}
			});
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				car: {
					...car!!
				},
				tuningPoint: car!!.tuningPoints,
				setting: car!!.settings,
				vsStarCountMax: car!!.vsStarCount,
				rgPreviousVersionPlayCount: 0,
				stCompleted_100Episodes: car!!.stCompleted100Episodes,
				auraMotifAutoChange: false,
				screenshotCount: 0,
				transferred: false,
				...car!!
			};
			let resp = wm.wm.protobuf.LoadCarResponse.encode(msg);
			let end = resp.finish();
			let r = res
				.header('Server', 'v388 wangan')
				.header('Content-Type', 'application/x-protobuf; revision=8053')
				.header('Content-Length', end.length.toString())
				.status(200);
			r.send(Buffer.from(end));
		});

		app.post('/method/load_game_history', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				taRankingUpdatedAt: 0,
				ghostBattleCount: 0,
				ghostBattleWinCount: 0,
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

		// TODO: make this actually save lmao
		app.post('/method/save_game_result', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
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
    }
}
