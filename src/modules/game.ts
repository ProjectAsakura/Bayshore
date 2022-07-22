import { Application } from "express";
import { Module } from "../module";
import * as wm from "../wmmt/wm.proto";
import * as svc from "../wmmt/service.proto";
import { prisma } from "..";
import { Car, User } from "@prisma/client";
import { Config } from "../config";
import Long from "long";
import { userInfo } from "os";
import { config } from "dotenv";

export default class GameModule extends Module {
    register(app: Application): void {
		app.post('/method/save_game_result', async (req, res) => {
			let body = wm.wm.protobuf.SaveGameResultRequest.decode(req.body);
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				}
			});
			console.log(body);
			let storyLose: boolean = false;
			switch (body.gameMode) {
				case wm.wm.protobuf.GameMode.MODE_STORY:
					{
						if (!(body.retired)) {
							let maxConsecutiveWins = car!.stConsecutiveWinsMax;
							if (maxConsecutiveWins < body.stResult!.stConsecutiveWins!) {
								maxConsecutiveWins = body.stResult!.stConsecutiveWins!;
							}
							let divcount = body.stResult?.stClearDivCount;
							let saveEx: any = {};
							if (body.stResult?.stLoseBits !== null && body.stResult?.stLoseBits !== undefined) {
								let actualLoseBits = BigInt(0);
								if (body.stResult?.stLoseBits! instanceof Long) {
									actualLoseBits = actualLoseBits | BigInt(body.stResult?.stLoseBits.high);
									actualLoseBits = actualLoseBits << BigInt(32);
									actualLoseBits = actualLoseBits | BigInt(body.stResult?.stLoseBits.low);
									saveEx.stLoseBits = Number(actualLoseBits);
									if(saveEx.stLoseBits > 0){
										storyLose = true;
									}
								}
							} else {
								saveEx.stLoseBits = car?.stLoseBits;
							}
							if (divcount !== null && divcount !== undefined && divcount !== 0) {
								console.log(body.stResult?.stClearDivCount);
								saveEx.stClearDivCount = divcount;
							} else {
								saveEx.stClearDivCount = car?.stClearDivCount;
							}
							if (body.stResult?.stClearBits !== null && body.stResult?.stClearBits !== undefined && storyLose !== true) {
								saveEx.stClearBits = body.stResult?.stClearBits;
							} else {
								saveEx.stClearBits = car?.stClearBits;
							}
							if (body.stResult?.stPlayCount !== null && body.stResult?.stPlayCount !== undefined) {
								saveEx.stPlayCount = body.stResult?.stPlayCount!;
							} else {
								saveEx.stPlayCount = car?.stPlayCount;
							}
							if (body.stResult?.stClearCount !== null && body.stResult?.stClearCount !== undefined && body.stResult?.stClearCount !== 0) {
								saveEx.stClearCount = body.stResult?.stClearCount!;
							} else {
								saveEx.stClearCount = car?.stClearCount;
							}
							if (body.stResult?.stConsecutiveWins !== null && body.stResult?.stConsecutiveWins !== undefined) {
								saveEx.stConsecutiveWins = body.stResult?.stConsecutiveWins!;
							} else {
								saveEx.stConsecutiveWins = car?.stConsecutiveWins;
							}
							if (body.stResult?.tuningPoint !== null && body.stResult?.tuningPoint !== undefined) {
								saveEx.tuningPoints = body.stResult?.tuningPoint!;
							} else {
								saveEx.tuningPoints = car?.tuningPoints;
							}
							if (body.stResult?.stCompleted_100Episodes !== null && body.stResult?.stCompleted_100Episodes !== undefined) {
								saveEx.stCompleted100Episodes = body.stResult?.stCompleted_100Episodes!;
							} else {
								saveEx.stCompleted100Episodes = car?.stCompleted100Episodes;
							}
							console.log(saveEx);
							let c = await prisma.car.update({
								where: {
									carId: body.carId
								},
								data: saveEx
							});
							console.log('-------');
							console.log(c);
							
							if(body.earnedItems.length !== 0){
								console.log('Game reward available, continuing ...');
								for(let i=0; i<body.earnedItems.length; i++){
									await prisma.carItem.create({
										data: {
											carId: body.carId,
											category: body.earnedItems[i].category,
											itemId: body.earnedItems[i].itemId,
											amount: 1
										}
									});
								}
							}
						}
						break;
					}
				case wm.wm.protobuf.GameMode.MODE_TIME_ATTACK:
					{
						// If the game was not timed out / retired
						if (!(body.retired || body.timeup)) {

							console.log('Game not retired / timed out, continuing ...')

							// Get the current time attack record for the car
							let currentRecord = await prisma.timeAttackRecord.findFirst({
								where: { 
									carId: body.carId, // , model: body.car!.model!, 
									course: body.taResult!.course
								}
							});

							// Record already exists 
							if (currentRecord)
							{
								// If the existing record is faster, do not continue
								if (body.taResult!.time > currentRecord.time) break;

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
										tunePower: body!.car!.tunePower, 
										tuneHandling: body!.car!.tuneHandling
									}
								});
							}
							else // Creating a new record
							{
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
										tunePower: body!.car!.tunePower, 
										tuneHandling: body!.car!.tuneHandling
									}
								});
								break;
							}
						}
						break;
					}
				case wm.wm.protobuf.GameMode.MODE_GHOST_BATTLE:
					{
						if (!(body.retired)) {
							let saveEx: any = {};
							if (body.rgResult?.rgRegionMapScore !== null && body.rgResult?.rgRegionMapScore !== undefined) {
									saveEx.rgRegionMapScore = body.rgResult?.rgRegionMapScore!;
							} else {
								saveEx.rgRegionMapScore = car?.rgRegionMapScore;
							}
							if (body.rgResult?.rgPlayCount !== null && body.rgResult?.rgPlayCount !== undefined) {
									saveEx.rgPlayCount = body.rgResult?.rgPlayCount!;
							} else {
								saveEx.rgPlayCount = car?.rgPlayCount;
							}
							if (body.rgResult?.dressupLevel !== null && body.rgResult?.dressupLevel !== undefined) {
									saveEx.dressupLevel = body.rgResult?.dressupLevel!;
							} else {
								saveEx.dressupLevel = car?.dressupLevel;
							}
							if (body.rgResult?.dressupPoint !== null && body.rgResult?.dressupPoint !== undefined) {
									saveEx.dressupPoint = body.rgResult?.dressupPoint!;
							} else {
								saveEx.dressupPoint = car?.dressupPoint;
							}
							if (body.car?.wheel !== null && body.car?.wheel !== undefined) {
									saveEx.wheel = body.car?.wheel!;
							} else {
								saveEx.wheel = car?.wheel;
							}
							if (body.car?.wheelColor !== null && body.car?.wheelColor !== undefined) {
									saveEx.wheelColor = body.car?.wheelColor!;
							} else {
								saveEx.wheelColor = car?.wheelColor;
							}
							if (body.car?.aero !== null && body.car?.aero !== undefined) {
									saveEx.aero = body.car?.aero!;
							} else {
								saveEx.aero = car?.aero;
							}
							if (body.car?.bonnet !== null && body.car?.bonnet !== undefined) {
									saveEx.bonnet = body.car?.bonnet!;
							} else {
								saveEx.bonnet = car?.bonnet;
							}
							if (body.car?.wing !== null && body.car?.wing !== undefined) {
									saveEx.wing = body.car?.wing!;
							} else {
								saveEx.wing = car?.wing;
							}
							if (body.car?.mirror !== null && body.car?.mirror !== undefined) {
									saveEx.mirror = body.car?.mirror!;
							} else {
								saveEx.mirror = car?.mirror;
							}
							if (body.car?.neon !== null && body.car?.neon !== undefined) {
									saveEx.neon = body.car?.neon!;
							} else {
								saveEx.neon = car?.neon;
							}
							if (body.car?.trunk !== null && body.car?.trunk !== undefined) {
									saveEx.trunk = body.car?.trunk!;
							} else {
								saveEx.trunk = car?.trunk;
							}
							if (body.car?.plate !== null && body.car?.plate !== undefined) {
									saveEx.plate = body.car?.plate!;
							} else {
								saveEx.plate = car?.plate;
							}
							if (body.car?.plateColor !== null && body.car?.plateColor !== undefined) {
									saveEx.plateColor = body.car?.plateColor!;
							} else {
								saveEx.plateColor = car?.plateColor;
							}
							if (body.car?.plateNumber !== null && body.car?.plateNumber !== undefined) {
									saveEx.plateNumber = body.car?.plateNumber!;
							} else {
								saveEx.plateNumber = car?.plateNumber;
							}
							if (body.car?.ghostLevel !== null && body.car?.ghostLevel !== undefined) {
									saveEx.ghostLevel = body.car?.ghostLevel!;
							} else {
								saveEx.ghostLevel = car?.ghostLevel;
							}

							let winCounter = 0;
							if(body.rgResult?.rgRegionMapScore !== null && body.rgResult?.rgRegionMapScore !== undefined && body.rgResult?.rgRegionMapScore.length !== 0){
								for(let i=0; i<body.rgResult.rgRegionMapScore.length; i++){
									winCounter += body.rgResult.rgRegionMapScore[i];
								}
							}
							saveEx.rgWinCount = winCounter;
							saveEx.rgScore = winCounter;

							let c = await prisma.car.update({
								where: {
									carId: body.carId
								},
								data: saveEx
							});

							if(body.earnedItems.length !== 0){
								console.log('Game reward available, continuing ...');
								for(let i=0; i<body.earnedItems.length; i++){
									await prisma.carItem.create({
										data: {
											carId: body.carId,
											category: body.earnedItems[i].category,
											itemId: body.earnedItems[i].itemId,
											amount: 1
										}
									});
								}
							}
						}
					}
			}
			await prisma.car.update({
				where: {
					carId: body.carId,
				},
				data: {
					aura: body.car!.aura!,
					auraMotif: body.car!.auraMotif!,
					odometer: body.odometer,
					playCount: body.playCount,
					level: body.car!.level!,
					title: body.car!.title!,
					tunePower: body.car!.tunePower!,
					tuneHandling: body.car!.tuneHandling!,
					windowSticker: body.car!.windowSticker!,
				}
			})
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

			// No user returned
			if (!user) {

				console.log('no such user');
				let msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					numOfOwnedCars: 0,
					cars: [],
					spappState: wm.wm.protobuf.SmartphoneAppState.SPAPP_UNREGISTERED,
					transferState: wm.wm.protobuf.TransferState.NOT_REGISTERED
				};
				if (!body.cardChipId || !body.accessCode) {
					let msg = {
						error: wm.wm.protobuf.ErrorCode.ERR_ID_BANNED,
						numOfOwnedCars: 0,
						spappState: wm.wm.protobuf.SmartphoneAppState.SPAPP_UNREGISTERED,
						transferState: wm.wm.protobuf.TransferState.NOT_REGISTERED
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
							true, //TUTORIAL_ID_TERMINAL_SCRATCH
							true, //TUTORIAL_ID_TURN_SCRATCH_SHEET
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

			// console.log(user);

			let carStates = user.cars.map(e => e.state);
			
			let tickets = (user.unusedTickets || []).map(x => {
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
			let tickets = (user?.unusedTickets || []).map(x => {
				return {
					itemId: x.itemId,
					userItemId: x.dbId,
					category: x.category
				}
			});
			let notice = (Config.getConfig().notices || []);
			let noticeWindows = notice.map(a => wm.wm.protobuf.NoticeEntry.NOTICE_UNUSED_1);
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,	
				noticeWindow: noticeWindows,
				noticeWindowMessage: notice,
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
				pbSection_1Time: taRecordPb.section1Time,
				pbSection_2Time: taRecordPb.section2Time,
				pbSection_3Time: taRecordPb.section3Time,
				pbSection_4Time: taRecordPb.section4Time,
				pbSection_5Time: taRecordPb.section5Time,
				pbSection_6Time: taRecordPb.section6Time,
				pbSection_7Time: taRecordPb.section7Time,
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

		// Load upon enter terminal
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

		// Load unreceived user items
		app.post('/method/load_unreceived_user_items', (req, res) => {

			// In future, might want to check db for player items

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				owned_user_items: [
					wm.wm.protobuf.UserItem.create({
						category: 17, 
						itemId: 1
					})
				]
			}

			let resp = wm.wm.protobuf.LoadUnreceivedUserItemsResponse.encode(msg);
			let end = resp.finish();
			let r = res
				.header('Server', 'v388 wangan')
				.header('Content-Type', 'application/x-protobuf; revision=8053')
				.header('Content-Length', end.length.toString())
				.status(200);
			r.send(Buffer.from(end));
		})

		// Load user bookmarks
		app.post('/method/load_bookmarks', async (req, res) => {

			// Get the save bookmark request
			let body = wm.wm.protobuf.LoadBookmarksRequest.decode(req.body);

			// Check if the user has any existing bookmarks
			let user = await prisma.user.findFirst({
				where: {
					id: Number(body.userId)
				}
			});

			// Car bookmarks placeholder
			let cars : Car[] = [];

			// User is not null
			if (user)
			{
				// Loop over the bookmarked cars
				for (let carId of user.bookmarks)
				{
					// Get the car with the bookmarked car id
					let car = await prisma.car.findFirst({
						where: {
							carId: carId
						}
					});

					// If the car is not null
					if (car)
					{
						// Add the car to the cars list
						cars.push(car);
					}
				}
			}

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				cars: cars
			}

			let resp = wm.wm.protobuf.LoadBookmarksResponse.encode(msg);
			let end = resp.finish();
			let r = res
				.header('Server', 'v388 wangan')
				.header('Content-Type', 'application/x-protobuf; revision=8053')
				.header('Content-Length', end.length.toString())
				.status(200);
			r.send(Buffer.from(end));
		})

		// Save user bookmarks
		app.post('/method/save_bookmarks', async (req, res) => {

			// Get the save bookmark request
			let body = wm.wm.protobuf.SaveBookmarksRequest.decode(req.body);

			// Update existing bookmarks
			await prisma.user.update({
				where: {
					id: body.userId
				}, 
				data: {
					bookmarks: body.cars
				}
			})

			// Generate the response to the terminal (success messsage)
			let resp = wm.wm.protobuf.LoadBookmarksResponse.encode({
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS
			});

			let end = resp.finish();
			let r = res
				.header('Server', 'v388 wangan')
				.header('Content-Type', 'application/x-protobuf; revision=8053')
				.header('Content-Length', end.length.toString())
				.status(200);
			r.send(Buffer.from(end));
		})

		// Car Summary Request (for bookmarks)
		app.get('/resource/car_summary', async (req, res) => {

			// Get the query from the request
			let query = req.query;

			// Get all of the cars matching the query
			let cars = await prisma.car.findMany({
				take: Number(query.limit), 
				where: {
					name: {
						startsWith: String(query.name)
					}
				}, 
			});

			let msg = {
				hitCount: cars.length,
				cars: cars
			}

			let resp = wm.wm.protobuf.CarSummary.encode(msg);
			let end = resp.finish();
			let r = res
				.header('Server', 'v388 wangan')
				.header('Content-Type', 'application/x-protobuf; revision=8053')
				.header('Content-Length', end.length.toString())
				.status(200);
			r.send(Buffer.from(end));

		})

		// Save upon timeout / exit terminal
		app.post('/method/save_terminal_result', async (req, res) => {

			// Get the contents from the request
			let body = wm.wm.protobuf.SaveTerminalResultRequest.decode(req.body);

			// user id is required field
			let user = await prisma.user.findFirst({
				where: { 
					id: body.userId 
				},
			});

			// Update the car order (NOT IMPLEMENTED)

			// Update the completed tutorials
			let storedTutorials = user!.tutorials;
			
			body.confirmedTutorials.forEach(
				(idx) => storedTutorials[idx] = true
			);
			
			await prisma.user.update({
				where: {
					id: body.userId
				},
				data: {
					tutorials: storedTutorials
				}
			});

			let msg = {
				// Success error code
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			}

			// Encode the save terminal result response
			let resp = wm.wm.protobuf.SaveTerminalResultResponse.encode(msg);
			let end = resp.finish();
			let r = res
				.header('Server', 'v388 wangan')
				.header('Content-Type', 'application/x-protobuf; revision=8053')
				.header('Content-Length', end.length.toString())
				.status(200);
			r.send(Buffer.from(end));
		})
		
		// Terminal scratch (VERY WIP)
		app.post('/method/load_scratch_information', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.LoadScratchInformationRequest.decode(req.body);

			// Commenting all of the scratch card shit out for now

			/* 
			// Get all of the scratch sheets for the user
			let scratchSheets = await prisma.scratchSheet.findMany({
				where: {
					userId: body.userId
				},
				include: {
					squares: true
				}
			});

			// No scratch sheets for user
			if (scratchSheets.length == 0)
			{
				// Create a new scratch sheet for the user
				let sheet = await prisma.scratchSheet.create({
					data: {
						userId: body.userId
					}
				})

				// Populate each square (with FT ticket for now)
				for (let i=0; i<50; i++) {
					await prisma.scratchSquare.create({
						data: {
							sheetId: sheet.id, 
							category: wm.wm.protobuf.ItemCategory.CAT_RIVAL_MARKER,
							itemId: 1, 
							earned: false
						}
					});
				}

				// In future, I will very the way this is populated based on settings
				// i.e. totally random items, items based upon real arcade, etc. 

				// Get the data for the newly created sheet
				let newSheet = await prisma.scratchSheet.findFirst({
					where: {
						userId: body.userId
					},
					include: {
						squares: true
					}
				});

				// Sheet is created successfully
				if (newSheet)
				{
					// Update the scratch sheet list
					scratchSheets = [newSheet];
				}
			}

			// Generate the scratch sheet proto
			let scratch_sheets : wm.wm.protobuf.ScratchSheet[] = [];

			// Loop over all of the protos
			for(let sheet of scratchSheets)
			{
				// Get all of the scratch squares
				let scratch_squares : wm.wm.protobuf.ScratchSheet.ScratchSquare[] = [];

				// Loop over all of the squares
				for (let square of sheet.squares)
				{
					// Add the current square to the protobuf array
					scratch_squares.push(wm.wm.protobuf.ScratchSheet.ScratchSquare.create({
						category: square.category, 
						itemId: square.itemId, 
						earned: square.earned
					}));
				}

				// Add the scratch sheet to the sheets list
				scratch_sheets.push(
					wm.wm.protobuf.ScratchSheet.create({
						squares: scratch_squares
					})
				);
			}
			*/

			// Debug: Add all items to the 'acceptable items' list

			// Owned user items list
			let ownedUserItems : wm.wm.protobuf.UserItem[] = [];

			// Get the current date
			let date = Date.now();

			// If the grant all scratch rewards switch is set, add them to the list
			if (Config.getConfig().gameOptions.grantAllScratchRewards)
			{
				// Grant one of each item every time the menu is loaded

				// Loop over all of the window sticker styles
				for(let i=1; i<=60; i++)
				{
					// Add one of each of the window sticker styles to the list
					ownedUserItems.push(wm.wm.protobuf.UserItem.create({
						category: wm.wm.protobuf.ItemCategory.CAT_WINDOW_DECORATION, 
						itemId: i, 
						earnedAt: date, 
					}));
				}

				// Loop over all of the rival markers
				for(let i=1; i<=80; i++)
				{
					// Add one of each of the rival markers to the list
					ownedUserItems.push(wm.wm.protobuf.UserItem.create({
						category: wm.wm.protobuf.ItemCategory.CAT_RIVAL_MARKER, 
						itemId: i, 
						earnedAt: date, 
					}));
				}

				// Item ID for the scratch cars
				let scratchCarIds = [4, 3, 1, 2, 5, 6, 16, 17, 18, 19, 20, 21];
				
				// I literally ripped this from mozilla.org lmfao
				let getValueInRange = (min: number, max: number) => {
					return Math.random() * (max - min) + min;
				}

				// If the grant bonus scratch cars switch is set, switch on the value
				switch(Config.getConfig().gameOptions.grantBonusScratchCars)
				{
					case 1: // Grant one of each bonus scratch car (random colour)

						// Mini Cooper						
						scratchCarIds.push(getValueInRange(7, 15));

						// S660
						scratchCarIds.push(getValueInRange(22, 27));

						// S2000
						scratchCarIds.push(getValueInRange(28, 36));

						// Roadster RF, 280ZT, Leopard
						scratchCarIds = scratchCarIds.concat([37, 38, 39]);

						break;
					case 2: // Grant every colour of each bonus scratch cars

						// Mini Cooper						
						scratchCarIds = scratchCarIds.concat([7, 8, 9, 10, 11, 12, 13, 14, 15]);

						// S660
						scratchCarIds = scratchCarIds.concat([22, 23, 24, 25, 26, 27]);

						// S2000
						scratchCarIds = scratchCarIds.concat([28, 29, 30, 31, 32, 33, 34, 35, 36]);

						// Roadster RF, 280ZT, Leopard
						scratchCarIds = scratchCarIds.concat([37, 38, 39]);

						break;
					default: // Do not grant bonus scratch cars
						break;
				}

				// Loop over all of the scratch cars
				for(let car of scratchCarIds)
				{
					// Add one of each of the rival markers to the list
					ownedUserItems.push(wm.wm.protobuf.UserItem.create({
						category: 201, // Scratch Car
						itemId: car, 
						earnedAt: date, 
					}));
				}
			}

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				scratchSheets: [],
				currentSheet: 0,
				numOfScratched: 0, 
				ownedUserItems: ownedUserItems
			}

			// console.log(scratch_sheets);

			let resp = wm.wm.protobuf.LoadScratchInformationResponse.encode(msg);
			let end = resp.finish();
			let r = res
				.header('Server', 'v388 wangan')
				.header('Content-Type', 'application/x-protobuf; revision=8053')
				.header('Content-Length', end.length.toString())
				.status(200);
			r.send(Buffer.from(end));
		});

		app.post('/method/save_scratch_sheet', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.SaveScratchSheetRequest.decode(req.body);

			/*
			// Get all of the scratch sheets for the user
			let scratchSheets = await prisma.scratchSheet.findMany({
				where: {
					userId: body.userId
				}, 
				include: {
					squares: true
				}
			})

			// Get the target scratch sheet 
			let scratchSheet = scratchSheets[Number(body.targetSheet)];

			// Get all of the squares for the scratch sheet
			let scratchSquares = await prisma.scratchSquare.findMany({
				where: {
					sheetId: scratchSheet.id
				}
			});

			// Get the target scratch square
			let scratchSquare = scratchSquares[Number(body.targetSquare)];

			// Update the revealed scratch square
			await prisma.scratchSquare.update({
				where: {
					id: scratchSquare.id
				}, 
				data: {
					earned: true
				}
			});

			// Get the number of scratched squares on the page
			let numOfScratched = await prisma.scratchSquare.count({
				where: {
					sheetId: scratchSheet.id, 
					earned: true
				}
			})

			// Generate the scratch sheet proto
			let scratch_sheets : wm.wm.protobuf.ScratchSheet[] = [];

			// Loop over all of the protos
			for(let sheet of scratchSheets)
			{
				// Get all of the scratch squares
				let scratch_squares : wm.wm.protobuf.ScratchSheet.ScratchSquare[] = [];

				// Loop over all of the squares
				for (let square of sheet.squares)
				{
					// Add the current square to the protobuf array
					scratch_squares.push(wm.wm.protobuf.ScratchSheet.ScratchSquare.create({
						category: square.category, 
						itemId: square.itemId, 
						earned: square.earned
					}));
				}

				// Add the scratch sheet to the sheets list
				scratch_sheets.push(
					wm.wm.protobuf.ScratchSheet.create({
						squares: scratch_squares
					})
				);
			}
			*/

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				scratchSheets : [],
				currentSheet: body.targetSheet, 
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
			let saveEx: any = {};
			if (body.car?.wheel !== null && body.car?.wheel !== undefined) {
					saveEx.wheel = body.car?.wheel!;
			} else {
				saveEx.wheel = car?.wheel;
			}
			if (body.car?.wheelColor !== null && body.car?.wheelColor !== undefined) {
					saveEx.wheelColor = body.car?.wheelColor!;
			} else {
				saveEx.wheelColor = car?.wheelColor;
			}
			if (body.car?.aero !== null && body.car?.aero !== undefined) {
					saveEx.aero = body.car?.aero!;
			} else {
				saveEx.aero = car?.aero;
			}
			if (body.car?.bonnet !== null && body.car?.bonnet !== undefined) {
					saveEx.bonnet = body.car?.bonnet!;
			} else {
				saveEx.bonnet = car?.bonnet;
			}
			if (body.car?.wing !== null && body.car?.wing !== undefined) {
					saveEx.wing = body.car?.wing!;
			} else {
				saveEx.wing = car?.wing;
			}
			if (body.car?.mirror !== null && body.car?.mirror !== undefined) {
					saveEx.mirror = body.car?.mirror!;
			} else {
				saveEx.mirror = car?.mirror;
			}
			if (body.car?.neon !== null && body.car?.neon !== undefined) {
					saveEx.neon = body.car?.neon!;
			} else {
				saveEx.neon = car?.neon;
			}
			if (body.car?.trunk !== null && body.car?.trunk !== undefined) {
					saveEx.trunk = body.car?.trunk!;
			} else {
				saveEx.trunk = car?.trunk;
			}
			if (body.car?.plate !== null && body.car?.plate !== undefined) {
					saveEx.plate = body.car?.plate!;
			} else {
				saveEx.plate = car?.plate;
			}
			if (body.car?.plateColor !== null && body.car?.plateColor !== undefined) {
					saveEx.plateColor = body.car?.plateColor!;
			} else {
				saveEx.plateColor = car?.plateColor;
			}
			if (body.car?.plateNumber !== null && body.car?.plateNumber !== undefined) {
					saveEx.plateNumber = body.car?.plateNumber!;
			} else {
				saveEx.plateNumber = car?.plateNumber;
			}
			if (body.car?.customColor !== null && body.car?.customColor !== undefined) {
					saveEx.customColor = body.car?.customColor!;
			} else {
				saveEx.customColor = car?.customColor;
			}
			if (body.car?.rivalMarker !== null && body.car?.rivalMarker !== undefined) {
					saveEx.rivalMarker = body.car?.rivalMarker!;
			} else {
				saveEx.rivalMarker = car?.rivalMarker;
			}
			if (body.car?.windowSticker !== null && body.car?.windowSticker !== undefined) {
					saveEx.windowSticker = body.car?.windowSticker!;
			} else {
				saveEx.windowSticker = car?.windowSticker;
			}

			await prisma.carSettings.update({
				where: {
					dbId: car?.carSettingsDbId,
				},
				data: {
					...body.setting
				}
			});

			let c = await prisma.car.update({
				where: {
					carId: body.carId
				},
				data: saveEx
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

			// Get the create car request body
			let body = wm.wm.protobuf.CreateCarRequest.decode(req.body);

			console.log(body);

			// Retrieve user from card chip / user id
			let user: User | null;

			// User ID provided, use that
			if (body.userId) {
				user = await prisma.user.findFirst({
					where: {
						id: body.userId
					},
				});
			} else { // No user id, use card chip
				user = await prisma.user.findFirst({
					where: {
						chipId: body.cardChipId,
						accessCode: body.accessCode
					},
				})
			}

			// User not found, terminate
			if (!user) throw new Error();

			// Generate blank car settings object
			let settings = await prisma.carSettings.create({
				data: {}
			});

			// Generate blank car state object
			let state = await prisma.carState.create({
				data: {}
			})

			// Sets if full tune is used or not
			let fullyTuned = false;

			// If a user item has been used
			if (body.userItemId) 
			{
				console.log(`Item used - ID ${body.userItemId}`);

				// Remove the user item from the database
				let item = await prisma.userItem.delete({
					where: {
						dbId: body.userItemId
					}
				});

				console.log(`Item category was ${item.category} and item game ID was ${item.itemId}`);
				
				// If the item used was a full tune ticket
				if (item.category == wm.wm.protobuf.ItemCategory.CAT_CAR_TICKET_FREE &&
					item.itemId == 5)
				{
					// Fully tuned is true
					fullyTuned = true;
				}

				console.log('Item deleted!');
			}
			// User item not used, but car has 740 HP by default
			else if (body.car && 
				(body.car.tunePower == 17) && (body.car.tuneHandling == 17))
			{
				// Set fully tuned to be true
				fullyTuned = true;
			}
			// User item not used, but gift cars fully tuned switch is set
			else if (Config.getConfig().gameOptions.giftCarsFullyTuned)
			{
				// List of event / exclusive car IDs
				let event_cars = [
					0x7A, // Mini
					0x82, // S660
					0x83, // S2000
					0x89, // NDERC
					0x8B, // GS130 (Starts at 20 Stories by default)
				]; 

				// If the car visual model is not null and is in the list of event cars
				if (body.car.visualModel && event_cars.includes(body.car.visualModel))
				{
					// Set full tune used to be true
					fullyTuned = true;
				}
			}

			// Default car values
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
				carStateDbId: state.dbId,
				regionId: body.car.regionId!,
			};

			// Additional car values (for full tune)
			let additionalInsert = {

			}

			// Car is fully tuned
			if (fullyTuned) {

				// Updated default values
				carInsert.level = 8; // C3
				carInsert.tunePower = 17; // 740 HP
				carInsert.tuneHandling = 17; // 740 HP

				// Additional full tune values
				additionalInsert = {
					ghostLevel: 10,
					stClearBits: 0,
					stLoseBits: 0,
					stClearCount: 80,
					stClearDivCount: 4,
					stConsecutiveWins: 80
				};
			}

			// Insert the car into the database
			let car = await prisma.car.create({
				data: {
					...carInsert,
					...additionalInsert,
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
			// This is fucking terrible
			let longLoseBits = Long.fromString(car!.stLoseBits.toString());
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
				...car!,
				stLoseBits: longLoseBits,
				ownedItems: car!.items
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

		app.post('/method/load_game_history', async (req, res) => {
			
			// Get the request content
			let body = wm.wm.protobuf.LoadGameHistoryRequest.decode(req.body);

			// Empty list of time attack records for the player's car
			let ta_records : wm.wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord[] = [];

			// Get the car info
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				}
			});

			// Get the car's time attack records
			let records = await prisma.timeAttackRecord.findMany({
				where: {
					carId: body.carId
				}
			});

			console.log(records);

			// Loop over all of the records
			for(let record of records)
			{
				// This code could probably be done with less DB calls in the future

				// Calculate the total rank, total participants for the record
				let wholeData = await prisma.timeAttackRecord.findMany({
					where: {
						course: record.course
					}, 
					orderBy: {
						time: 'asc'
					}
				});

				// Get the overall number of participants
				let wholeParticipants = wholeData.length;

				// Whole rank (default: 1)
				let wholeRank = 1;

				// Loop over all of the participants
				for(let row of wholeData)
				{
					// If the car ID does not match
					if (row.carId !== body.carId)
					{
						// Increment whole rank
						wholeRank++; 
					}
					else // Model ID matches
					{
						// Break the loop
						break;
					}
				}

				// Calculate the model rank, model participants for the record
				let modelData = await prisma.timeAttackRecord.findMany({
					where: {
						course: record.course, 
						model: record.model
					}, 
					orderBy: {
						time: 'asc'
					}
				});

				// Get the overall number of participants (with the same car model)
				let modelParticipants = modelData.length;

				// Model rank (default: 1)
				let modelRank = 1;

				// Loop over all of the participants
				for(let row of modelData)
				{
					// If the car ID does not match
					if (row.carId !== body.carId)
					{
						// Increment whole rank
						modelRank++; 
					}
					else // Model ID matches
					{
						// Break the loop
						break;
					}
				}

				// Generate the time attack record object and add it to the list
				ta_records.push(wm.wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord.create({
					course: record.course, 
					time: record.time, 
					tunePower: record.tunePower,
					tuneHandling: record.tuneHandling,
					wholeParticipants: wholeParticipants, 
					wholeRank: wholeRank, 
					modelParticipants: modelParticipants, 
					modelRank: modelRank
				}));
			}

			let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				taRecords: ta_records,
				taRankingUpdatedAt: 1,
				ghostBattleCount: 0,
				ghostBattleWinCount: 0,
				stampSheetCount: 0,
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

        app.post('/method/load_ghost_battle_info', async (req, res) => {
            let body = wm.wm.protobuf.LoadGhostBattleInfoRequest.decode(req.body);
			//---------------MAYBE NOT CORRECT---------------
			let msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					stampSheetCount: 100,
				};
			//-----------------------------------------------
			let resp = wm.wm.protobuf.LoadGhostBattleInfoResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
        app.post('/method/search_cars_by_level', async (req, res) => {
            let body = wm.wm.protobuf.SearchCarsByLevelRequest.decode(req.body);
            console.log(body);
			//---------------MAYBE NOT CORRECT---------------
			let rampVal = 0;
			let pathVal = 0;
			if(body.area === 0){ //GID_RUNAREA_C1
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 10);
			}
			else if(body.area === 1){ //GID_RUNAREA_RING
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 6) + 10;
			}
			else if(body.area === 2){ //GID_RUNAREA_SUBTOKYO_3_4
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 2) + 16;
			}
			else if(body.area === 3){ //GID_RUNAREA_SUBTOKYO_5
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 2) + 18;
			}
			else if(body.area === 4){ //GID_RUNAREA_WANGAN
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 7) + 20;
			}
			else if(body.area === 5){ //GID_RUNAREA_K1
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 7) + 27;
			}
			else if(body.area === 6){ //GID_RUNAREA_YAESU
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 4) + 34;
			}
			else if(body.area === 7){ //GID_RUNAREA_YOKOHAMA
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 11) + 38;
			}
			else if(body.area === 8){ //GID_RUNAREA_NAGOYA
				rampVal = 0;
				pathVal = 49;
			}
			else if(body.area === 9){ //GID_RUNAREA_OSAKA
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 4) + 50;
			}
			else if(body.area === 10){ //GID_RUNAREA_KOBE
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 2) + 54;
			}
			else if(body.area === 11){ //GID_RUNAREA_FUKUOKA
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 4) + 58;
			}
			else if(body.area === 12){ //GID_RUNAREA_HAKONE
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 2) + 62;
			}
			else if(body.area === 13){ //GID_RUNAREA_TURNPIKE
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 2) + 64;
			}
			//14 - 16 is dummy area
			else if(body.area === 17){ //GID_RUNAREA_C1_CLOSED
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 10); //probably not correct
			}
			else if(body.area === 18){ //GID_RUNAREA_HIROSHIMA
				rampVal = 0;
				pathVal = Math.floor(Math.random() * 2) + 56;
			}
			let msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					ramp: rampVal,
					path: pathVal,
					selectionMethod: 2,
				};
			//-----------------------------------------------
			let resp = wm.wm.protobuf.SearchCarsByLevelResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
        app.post('/method/load_ghost_drive_data', async (req, res) => {
            let body = wm.wm.protobuf.LoadGhostDriveDataRequest.decode(req.body);
            //---------------MAYBE NOT CORRECT---------------
			let msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					path: body.path
				};
			//-----------------------------------------------
			let resp = wm.wm.protobuf.LoadGhostDriveDataResponse.encode(msg);
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
