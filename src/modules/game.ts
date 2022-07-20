import { Application } from "express";
import { Module } from "../module";
import * as wm from "../wmmt/wm.proto";
import * as svc from "../wmmt/service.proto";
import { prisma } from "..";
import { Car, ScratchSheet, ScratchSquare, User } from "@prisma/client";
import { Config } from "../config";
import Long from "long";

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
						if (maxConsecutiveWins < body.stResult!.stConsecutiveWins!) {
							maxConsecutiveWins = body.stResult!.stConsecutiveWins!;
						}
						let divcount = body.stResult?.stClearDivCount;
						let saveEx: any = {};
						if (divcount !== null && divcount !== undefined && divcount !== 0) {
							console.log(body.stResult?.stClearDivCount);
							saveEx.stClearDivCount = divcount;
						} else {
							saveEx.stClearDivCount = car?.stClearDivCount;
						}
						if (body.stResult?.stClearBits !== null && body.stResult?.stClearBits !== undefined) {
							saveEx.stClearBits = body.stResult?.stClearBits;
						} else {
							saveEx.stClearBits = car?.stClearBits;
						}
						if (body.stResult?.stPlayCount !== null && body.stResult?.stPlayCount !== undefined) {
							saveEx.stPlayCount = body.stResult?.stPlayCount!;
						} else {
							saveEx.stPlayCount = car?.stPlayCount;
						}
						if (body.stResult?.stClearCount !== null && body.stResult?.stClearCount !== undefined) {
							saveEx.stClearCount = body.stResult?.stClearCount!;
						} else {
							saveEx.stClearCount = car?.stClearCount;
						}
						if (body.stResult?.stLoseBits !== null && body.stResult?.stLoseBits !== undefined) {
							let actualLoseBits = BigInt(0);
							if (body.stResult?.stLoseBits! instanceof Long) {
								actualLoseBits = actualLoseBits | BigInt(body.stResult?.stLoseBits.high);
								actualLoseBits = actualLoseBits << BigInt(32);
								actualLoseBits = actualLoseBits | BigInt(body.stResult?.stLoseBits.low);
								saveEx.stLoseBits = actualLoseBits;
							}
						} else {
							saveEx.stLoseBits = car?.stLoseBits;
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
						console.log(body);
						console.log(saveEx);
						let c = await prisma.car.update({
							where: {
								carId: body.carId
							},
							data: saveEx
						});
						console.log(c);
						break;
					}
				case wm.wm.protobuf.GameMode.MODE_TIME_ATTACK:
					{
						console.log(body);

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
									}
								});
								break;
							}
						}
						break;
					}
			}
			await prisma.car.update({
				where: {
					carId: body.carId,
				},
				data: {
					odometer: body.odometer,
					playCount: body.playCount,
					level: body.car!.level!,
					title: body.car!.title!,
					tunePower: body.car!.tunePower!,
					tuneHandling: body.car!.tuneHandling!,
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

		// Load unrecieved user items
		app.post('/method/load_unrecieved_user_items', (req, res) => {

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
			let bookmarks = await prisma.bookmarks.findFirst({
				where: {
					userId: Number(body.userId)
				}
			});

			// Car bookmarks placeholder
			let cars : Car[] = [];

			// Bookmarks have been created
			if (bookmarks)
			{
				// Loop over the bookmarked cars
				for (let carId of bookmarks.carId)
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

			// Check if the user has any existing bookmarks
			let bookmarks = await prisma.bookmarks.findFirst({
				where: {
					userId: Number(body.userId)
				}
			});

			// Bookmarks already exist
			if (bookmarks)
			{
				// Update existing bookmarks
				await prisma.bookmarks.update({
					where: {
						userId: body.userId
					}, 
					data: {
						carId: body.cars
					}
				})
			}
			else // Bookmarks not set
			{
				// Create new bookmark
				await prisma.bookmarks.create({
					data: {
						userId: body.userId, 
						carId: body.cars, 
					}
				})
			}

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

			// Get the user's current scratch sheet
			let user = await prisma.user.findFirst({
				where: {
					userId: body.userId
				}
			});

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
			if (scratchSheets.length < user.currentSheet)
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
							category: wm.wm.protobuf.ItemCategory.CAT_CAR_TICKET_FREE,
							itemId: 5, 
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

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				currentSheet: 0,
				numOfScratched: 0,
				scratch_sheets: scratch_sheets, 
				owned_user_items: [

				]
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

		app.post('/method/save_scratch_sheet', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.SaveScratchSheetRequest.decode(req.body);

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

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				scratch_sheets : scratch_sheets,
				currentSheet: body.targetSheet, 
				numOfScratched: numOfScratched, 
				earnedItem: wm.wm.protobuf.UserItem.create({
					category: scratchSquare.category, 
					itemId: scratchSquare.itemId, 
				})
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
				carStateDbId: state.dbId,
				regionId: body.car.regionId!,
			};
			let additionalInsert = {}
			if (fullTuneUsed) {
				additionalInsert = {
					stClearBits: 0,
					stLoseBits: 0,
					stClearCount: 80,
					stClearDivCount: 4,
					stConsecutiveWins: 80
				};
			}
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
