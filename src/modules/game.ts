import { Application } from "express";
import { Module } from "../module";
import * as wm from "../wmmt/wm.proto";
import * as svc from "../wmmt/service.proto";
import { prisma } from "..";
import { User } from "@prisma/client";
import { Config } from "../config";

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
				case wm.wm.protobuf.GameMode.MODE_TIME_ATTACK:
					{
						if (!body.retired && !body.timeup) {
							let currentRecord = await prisma.timeAttackRecord.findFirst({
								where: {
									carId: body.carId,
									model: body.car!.model!,
								}
							});

							// Make sure we don't save a worse record!
							if (currentRecord && body.taResult!.time > currentRecord.time)
								break;

							if (!currentRecord) {
								console.log('Creating new time attack record');
								await prisma.timeAttackRecord.create({
									data: {
										carId: body.carId,
										model: body.car!.model!,
										time: body.taResult!.time,
										isMorning: body.taResult!.isMorning,
										course: body.taResult!.course,
										section1Time: body!.taResult!.section_1Time,
										section2Time: body!.taResult!.section_2Time,
										section3Time: body!.taResult!.section_3Time,
										section4Time: body!.taResult!.section_4Time,
										section5Time: body!.taResult!.section_5Time,
										section6Time: body!.taResult!.section_6Time,
										section7Time: body!.taResult!.section_7Time,
									}
								});
								break;
							}

							console.log('Updating time attack record...')
							await prisma.timeAttackRecord.update({
								where: {
									// Could be null - if it is null, this will insert.
									dbId: currentRecord!.dbId
								},
								data: {
									time: body.taResult!.time,
									section1Time: body!.taResult!.section_1Time,
									section2Time: body!.taResult!.section_2Time,
									section3Time: body!.taResult!.section_3Time,
									section4Time: body!.taResult!.section_4Time,
									section5Time: body!.taResult!.section_5Time,
									section6Time: body!.taResult!.section_6Time,
									section7Time: body!.taResult!.section_7Time,
								}
							});
						}
						break;
					}
			}
			await prisma.carSettings.update({
				where: {
					dbId: car!.carSettingsDbId
				},
				data: {
					...body.setting
				}
			});
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
					unusedTickets: true
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
				let ftTicketGrant = Config.getConfig().gameOptions.grantFullTuneTicketToNewUsers;
				if (ftTicketGrant > 0) {
					console.log(`Granting Full-Tune Ticket x${ftTicketGrant} to new user...`);
					for (let i=0; i<ftTicketGrant; i++) {
						await prisma.userItem.create({
							data: {
								userId: user.id,
								category: wm.wm.protobuf.ItemCategory.CAT_CAR_TICKET_FREE,
								itemId: 5
							}
						});
					}
					console.log('Done!');
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
			let tickets = user!.unusedTickets.map(x => {
				return {
					itemId: x.itemId,
					userItemId: x.dbId,
					category: x.category
				}
			});
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
				tutorials: user.tutorials,
				unusedCarTickets: tickets,
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

		app.post('/method/load_drive_information', async (req, res) => {
			let body = wm.wm.protobuf.LoadDriveInformationRequest.decode(req.body);
			let user = await prisma.user.findFirst({
				where: {
					id: body.userId,
				},
				include: {
					unusedTickets: true,
				}
			});
			let tickets = user!.unusedTickets.map(x => {
				return {
					itemId: x.itemId,
					userItemId: x.dbId,
					category: x.category
				}
			});
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
				availableTickets: tickets,
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

		app.post('/method/load_time_attack_record', async (req, res) => {
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
				let msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					wholeRanking: taRecordsOverall.map(a => a.time),
					modelRanking: taRecordsForModel.map(a => a.time)
				};
				let resp = wm.wm.protobuf.LoadTimeAttackRecordResponse.encode(msg);
				let end = resp.finish();
				let r = res
					.header('Server', 'v388 wangan')
					.header('Content-Type', 'application/x-protobuf; revision=8053')
					.header('Content-Length', end.length.toString())
					.status(200);
				r.send(Buffer.from(end));
				return;
			}
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				wholeRanking: taRecordsOverall.map(a => a.time),
				modelRanking: taRecordsForModel.map(a => a.time),
				personalBestTime: taRecordPb.time,
				pbSection1Time: taRecordPb.section1Time,
				pbSection2Time: taRecordPb.section2Time,
				pbSection3Time: taRecordPb.section3Time,
				pbSection4Time: taRecordPb.section4Time,
				pbSection5Time: taRecordPb.section5Time,
				pbSection6Time: taRecordPb.section6Time,
				pbSection7Time: taRecordPb.section7Time,
            };
            let resp = wm.wm.protobuf.LoadTimeAttackRecordResponse.encode(msg);
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
		});

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
			let fullTuneUsed = false;
			if (body.userItemId) {
				console.log(`Item used - ID ${body.userItemId}`);
				let item = await prisma.userItem.delete({
					where: {
						dbId: body.userItemId
					}
				});
				console.log(`Item category was ${item.category} and item game ID was ${item.itemId}`);
				if (item.category == wm.wm.protobuf.ItemCategory.CAT_CAR_TICKET_FREE &&
					item.itemId == 5)
				{
					// This is a full-tune ticket
					fullTuneUsed = true;
				}
				console.log('Item deleted!');
			}
			let carInsert = {
				userId: user.id,
				manufacturer: body.car.manufacturer!,
				defaultColor: body.car.defaultColor!,
				model: body.car.model!,
				visualModel: body.car.visualModel!,
				name: body.car.name!,
				title: body.car.title!,
				level: body.car.level!,
				tunePower: body.car.tunePower!,
				tuneHandling: body.car.tuneHandling!,
				carSettingsDbId: settings.dbId,
				carStateDbId: state.dbId
			};
			let additionalInsert = {}
			if (fullTuneUsed) {
				additionalInsert = {
					stClearBits: 0,
					stLoseBits: 0,
					stClearCount: 80,
					stClearDivCount: 4,
					stConsecutiveWins: 80,
					...carInsert
				};
			}
			let car = await prisma.car.create({
				data: {
					...carInsert,
					...additionalInsert
				}
			});

			console.log(`Created new car ${car.name} with ID ${car.carId}`);
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				carId: car.carId,
				car,
				...carInsert,
				...additionalInsert
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
					...car!
				},
				tuningPoint: car!.tuningPoints,
				setting: car!.settings,
				vsStarCountMax: car!.vsStarCount,
				rgPreviousVersionPlayCount: 0,
				stCompleted_100Episodes: car!.stCompleted100Episodes,
				auraMotifAutoChange: false,
				screenshotCount: 0,
				transferred: false,
				...car!
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
