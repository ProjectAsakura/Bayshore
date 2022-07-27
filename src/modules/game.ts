import e, { Application } from "express";
import { Module } from "../module";
import * as wm from "../wmmt/wm.proto";
import * as svc from "../wmmt/service.proto";
import { prisma } from "..";
import { Car, User } from "@prisma/client";
import { Config } from "../config";
import Long from "long";
import { userInfo } from "os";
import { config } from "dotenv";
import * as scratch from "../util/scratch";
import { envelopeItemTypeToDataCategory } from "@sentry/utils";

export default class GameModule extends Module {
    register(app: Application): void {

		app.post('/method/save_game_result', async (req, res) => {
			let body = wm.wm.protobuf.SaveGameResultRequest.decode(req.body);
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				}
			});
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
							saveEx.stConsecutiveWinsMax = maxConsecutiveWins;

							let c = await prisma.car.update({
								where: {
									carId: body.carId
								},
								data: saveEx
							});
							console.log('-------');
							console.log(c);
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
							saveEx.rgTrophy = winCounter;

							await prisma.car.update({
								where: {
									carId: body.carId
								},
								data: saveEx
							});
						}
					}
				case wm.wm.protobuf.GameMode.MODE_VS_BATTLE:
					{
						console.log(body);
						let saveEx: any = {};
						if(body.vsResult?.vsPlayCount !== null && body.vsResult?.vsPlayCount !== undefined){
							saveEx.vsPlayCount = body.vsResult?.vsPlayCount!;
						}
						else {
							saveEx.vsPlayCount = car?.vsPlayCount;
						}
						if(body.vsResult?.vsBurstCount !== null && body.vsResult?.vsBurstCount !== undefined){
							saveEx.vsBurstCount = body.vsResult?.vsBurstCount!;
						}
						else {
							saveEx.vsBurstCount = car?.vsBurstCount;
						}
						if(body.vsResult?.vsStarCount !== null && body.vsResult?.vsStarCount !== undefined){
							saveEx.vsStarCount = body.vsResult?.vsStarCount!;
						}
						else {
							saveEx.vsStarCount = car?.vsStarCount;
						}
						if(body.vsResult?.vsCoolOrWild !== null && body.vsResult?.vsCoolOrWild !== undefined){
							saveEx.vsCoolOrWild = body.vsResult?.vsCoolOrWild!;
						}
						else {
							saveEx.vsCoolOrWild = car?.vsCoolOrWild;
						}
						if(body.vsResult?.vsSmoothOrRough !== null && body.vsResult?.vsSmoothOrRough !== undefined){
							saveEx.vsSmoothOrRough = body.vsResult?.vsSmoothOrRough!;
						}
						else {
							saveEx.vsSmoothOrRough = car?.vsSmoothOrRough;
						}
						if(body.vsResult?.vsTripleStarMedals !== null && body.vsResult?.vsTripleStarMedals !== undefined && body.vsResult?.vsTripleStarMedals !== 0){
							saveEx.vsTripleStarMedals = body.vsResult?.vsTripleStarMedals!;
						}
						else {
							saveEx.vsTripleStarMedals = car?.vsTripleStarMedals;
						}
						if(body.vsResult?.vsDoubleStarMedals !== null && body.vsResult?.vsDoubleStarMedals !== undefined && body.vsResult?.vsDoubleStarMedals !== 0){
							saveEx.vsDoubleStarMedals = body.vsResult?.vsDoubleStarMedals!;
						}
						else {
							saveEx.vsDoubleStarMedals = car?.vsDoubleStarMedals;
						}
						if(body.vsResult?.vsSingleStarMedals !== null && body.vsResult?.vsSingleStarMedals !== undefined && body.vsResult?.vsSingleStarMedals !== 0){
							saveEx.vsSingleStarMedals = body.vsResult?.vsSingleStarMedals!;
						}
						else {
							saveEx.vsSingleStarMedals = car?.vsSingleStarMedals;
						}
						if(body.vsResult?.vsPlainMedals !== null && body.vsResult?.vsPlainMedals !== undefined && body.vsResult?.vsPlainMedals !== 0){
							saveEx.vsPlainMedals = body.vsResult?.vsPlainMedals!;
						}
						else {
							saveEx.vsPlainMedals = car?.vsPlainMedals;
						}

						let c = await prisma.car.update({
							where: {
								carId: body.carId
							},
							data: saveEx
						});
					}
			}

			// Get car item
			if(body.earnedItems.length !== 0){
				console.log('Car Item reward available, continuing ...');
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

			// Get user item
			if(body.earnedUserItems.length !== 0){
				console.log('User Item reward available, continuing ...');
				for(let i=0; i<body.earnedUserItems.length; i++){
					await prisma.userItem.create({
						data: {
							category: body.earnedUserItems[i].category,
							itemId: body.earnedUserItems[i].itemId,
							userId: body.car!.userId!,
							earnedAt: 0,
							type: 0
						}
					});
				}
			}

			// Update car
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
					windowSticker: body.car!.windowSticker!
				}
			})

			// Update car settings
			await prisma.carSettings.update({
				where: {
					dbId: car!.carSettingsDbId
				},
				data: {
					...body.setting
				}
			});

			// Every n*100 play give reward
			let giveMeterReward = Config.getConfig().gameOptions.giveMeterReward;
			if(giveMeterReward === 1 && body.playCount % 100 === 0){
				let carItemCount = await prisma.carItem.findMany({
					where: {
						carId: body.carId,
						category: 15,
						itemId: {
							lte: 28,
							gte: 1,
						},
					},
				})
				console.log('How many meter already obtained : ' +carItemCount);
				let sqlVal = 0;
				for(let i=0; i<carItemCount.length; i++){
					if(carItemCount[i].itemId !== 2 && carItemCount[i].itemId !== 3 && carItemCount[i].itemId !== 5 && carItemCount[i].itemId !== 6){
						sqlVal = sqlVal + 1;
					}
				}

				let itemIdVal = 0;
				if(sqlVal === 0){
					itemIdVal = 1;
				}
				else if(sqlVal === 1){
					itemIdVal = 4;
				}
				else if(sqlVal === 2){
					itemIdVal = 7;
				}
				else if(sqlVal === 3){
					itemIdVal = 8;
				}
				else if(sqlVal === 4){
					itemIdVal = 9;
				}
				else if(sqlVal === 5){
					itemIdVal = 10;
				}
				else if(sqlVal === 6){
					itemIdVal = 11;
				}
				else if(sqlVal === 7){
					itemIdVal = 12;
				}
				else if(sqlVal === 8){
					itemIdVal = 13;
				}
				else if(sqlVal === 9){
					itemIdVal = 14;
				}
				else if(sqlVal === 10){
					itemIdVal = 15;
				}
				else if(sqlVal === 11){
					itemIdVal = 16;
				}
				else if(sqlVal === 12){
					itemIdVal = 17;
				}
				else if(sqlVal === 13){
					itemIdVal = 18;
				}
				else if(sqlVal === 14){
					itemIdVal = 19;
				}
				else if(sqlVal === 15){
					itemIdVal = 20;
				}
				else if(sqlVal === 16){
					itemIdVal = 21;
				}
				else if(sqlVal === 17){
					itemIdVal = 22;
				}
				else if(sqlVal === 18){
					itemIdVal = 23;
				}
				else if(sqlVal === 19){
					itemIdVal = 24;
				}
				else if(sqlVal === 20){
					itemIdVal = 25;
				}
				else if(sqlVal === 21){
					itemIdVal = 26;
				}
				else if(sqlVal === 22){
					itemIdVal = 27;
				}
				else if(sqlVal === 23){
					itemIdVal = 28;
				}

				if(itemIdVal !== 0){
					console.log(`carID ${body.carId} do n*100 play, continue give reward... meter ID ${itemIdVal}`);
					await prisma.carItem.create({
						data: {
							carId: body.carId,
							category: 15,
							itemId: itemIdVal,
							amount: 1
						}
					});
				}
			}

			// Update user
			let user = await prisma.user.findFirst({
				where: {
					id: body.car!.userId!
				}
			});

			// User object exists
			if (user)
			{
				// Get user tutorials
				let storedTutorials = user!.tutorials;

				// Update any seen tutorials
				body.confirmedTutorials.forEach(
					(idx) => storedTutorials[idx] = true
				);

				// Get the order of the user's cars
				let carOrder = user?.carOrder;

				// Get the index of the selected car
				let index = carOrder.indexOf(body.carId);

				// If the selected car is not first
				if (index > 0)
				{
					// Remove that index from the array
					carOrder.slice(index);

					// Add it back to the front
					carOrder.unshift(body.carId);
				}

				// Otherwise, just ignore it

				// Update the values
				await prisma.user.update({
					where: {
						id: body.car!.userId!
					},
					data: {
						tutorials: storedTutorials, 
						carOrder: carOrder
					}
				});
			}

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
							gtWing: true
						}
					}
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
								itemId: 5, 
								type: 0 // Car Ticket
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

			// Get the number of scratch cards for the user
			let scratchSheetCount = await prisma.scratchSheet.count({
				where: {
					userId: user!.id
				}
			})

			console.log("Current sheet count:", scratchSheetCount);

			// If the user has no scratch sheets
			if (scratchSheetCount == 0)
			{
				console.log("Generating first sheet ...");

				// Generate a new scratch sheet for the user
				await scratch.generateScratchSheet(user!.id, 1);

				// Set the current scratch sheet to 1
				await prisma.user.update({
					where: {
						id: user!.id
					}, 
					data: {
						currentSheet: 1
					}
				});
			}

			// Get the user's cars
			let cars = user.cars; 

			// If the car order array has not been created
			if (user.carOrder.length > 0)
			{
				// Sort the player's car list using the car order property
				user.cars = user.cars.sort(function(a, b){

					// User, and both car IDs exist
					if (user)
					{
						// Compare both values using the car order array
						let compare = user?.carOrder.indexOf(a!.carId) - user?.carOrder.indexOf(b!.carId);

						// Return the comparison
						return compare;
					}
					else // Car IDs not present in car order list
					{
						throw Error("UserNotFoundException");
					}
				});
			}
			else // Car order undefined
			{
				// We will define it here
				let carOrder : number[] = [];

				// Loop over all of the user cars
				for(let car of user.cars)
				{
					// Add the car id to the list
					carOrder.push(car.carId);
				}

				// Update the car id property for the user
				await prisma.user.update({
					where: {
						id: user.id
					}, 
					data: {
						carOrder: carOrder
					}
				})
			}

			// Get the states of the user's cars
			let carStates = user.cars.map(e => e.state);

			// Get all of the user's tickets
			let tickets = await prisma.userItem.findMany({
				where: {
					userId: user.id, 
					type: 0
				}, 
				select: {
					itemId: true, 
					category: true, 
					userItemId: true
				}
			})

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				numOfOwnedCars: user.cars.length,
				spappState: wm.wm.protobuf.SmartphoneAppState.SPAPP_UNREGISTERED,
				transferState: wm.wm.protobuf.TransferState.TRANSFERRED,
				carStates,
				// 5 cars in-game, 200 cars on terminal
				cars: user.cars.slice(0, body.maxCars),
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
				}
			});
			
			// Get all of the user's tickets
			let tickets = await prisma.userItem.findMany({
				where: {
					userId: body.userId, 
					type: 0
				}, 
				select: {
					itemId: true, 
					category: true, 
					userItemId: true 
				}
			})

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

		// Recieve user items
		app.post('/method/receive_user_items', async (req, res) => {
			
			// Get the request body
			let body = wm.wm.protobuf.ReceiveUserItemsRequest.decode(req.body);

			// Loop over all of the item IDs 
			for(let targetItem of body.targetItemIds)
			{
				// Get the item info for the target item
				let item = await prisma.userItem.findFirst({
					where: {
						userItemId: targetItem
					}
				});

				// Item is returned
				if (item)
				{
					// Insert the item into the car items
					await prisma.carItem.create({
						data: {
							carId: body.carId, 
							category: item.category, 
							itemId: item.itemId, 
							amount: 1
						}
					});

					// Delete the accepted item
					await prisma.userItem.delete({
						where: {
							userItemId: targetItem
						}
					});
				}
				else // No item found
				{
					console.log("Warning: Item " + targetItem + " not found. Item not added.");
				}
			}

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS
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

			// If the car order was modified

			// Update the car order in the table
			if (body.carOrder.length > 0)
			{
				await prisma.user.update({
					where: {
						id: body.userId
					},
					data: {
						carOrder: body.carOrder
					}
				});
			}

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

		// Terminal scratch
		app.post('/method/load_scratch_information', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.LoadScratchInformationRequest.decode(req.body);

			// Get the current date/time (unix epoch)
			let date = Math.floor(new Date().getTime() / 1000)

			// Scratch sheet proto
			let scratchSheetProto : wm.wm.protobuf.ScratchSheet[] = [];

			// Current scratch sheet (default: Sheet 1 (R2))
			let currentSheet = 1;

			// User has scratched already (default: True)
			let scratched = 1;

			// Get the scratch sheet configuration
			let scratchEnabled = Config.getConfig().gameOptions.scratchEnabled;

			// If the scratch game is enabled
			if (scratchEnabled)
			{
				// Get all of the info for the user
				let user = await prisma.user.findFirst({
					where: {
						id: body.userId
					}
				});

				// Get the updated scratch sheet proto
				scratchSheetProto = await scratch.getScratchSheetProto(body.userId);

				// User is defined
				if (user)
				{
					// Update the currentSheet, scratched values
					currentSheet = user.currentSheet;

					// If unlimited scratches is set
					if (scratchEnabled == 2)
					{
						// User can scratch again
						scratched = 0;
					}
					else // Otherwise, daily scratches
					{
						// If a day has passed, allow the user to scratch again
						scratched = scratch.dayPassed(
							new Date(date*1000), // Todays date
							new Date(user.lastScratched*1000) // Last Scratched date
						);
					}
				}
			}

			// Owned user items list
			let ownedUserItems : wm.wm.protobuf.UserItem[] = [];

			// Get the user items list
			ownedUserItems = await scratch.getScratchItemList(body.userId, date);

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				scratchSheets: scratchSheetProto,
				currentSheet: currentSheet, 
				numOfScratched: scratched, 
				ownedUserItems: ownedUserItems
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

		// Change terminal scratch page
		app.post('/method/turn_scratch_sheet', async (req, res) => {

			let body = wm.wm.protobuf.TurnScratchSheetRequest.decode(req.body);

			// Update the active scratch sheet
			await prisma.user.update({
				where: {
					id: body.userId
				}, 
				data: {
					currentSheet: body.targetSheet
				}
			});

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			}

			let resp = wm.wm.protobuf.TurnScratchSheetResponse.encode(msg);
			let end = resp.finish();
			let r = res
				.header('Server', 'v388 wangan')
				.header('Content-Type', 'application/x-protobuf; revision=8053')
				.header('Content-Length', end.length.toString())
				.status(200);
			r.send(Buffer.from(end));
		})

		// Update scratch sheet
		app.post('/method/save_scratch_sheet', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.SaveScratchSheetRequest.decode(req.body);

			// Get the current date/time (unix epoch)
			let date = Math.floor(new Date().getTime() / 1000)

			// Get all of the info for the user
			let user = await prisma.user.findFirst({
				where: {
					id: body.userId
				}
			});

			// Get all of the scratch sheets for the user
			let scratchSheets = await prisma.scratchSheet.findMany({
				where: {
					userId: body.userId
				}, 
				include: {
					squares: {
						orderBy: {
							id: 'asc'
						}
					}
				}
			})

			// Get the target scratch sheet (subtract one for zero-index)
			let scratchSheet = scratchSheets[Number(body.targetSheet)-1];

			// Get all of the squares for the scratch sheet
			let scratchSquares = await prisma.scratchSquare.findMany({
				where: {
					sheetId: scratchSheet.id
				}, 
				orderBy: {
					id: 'asc'
				}
			});

			// Get the target scratch square
			let scratchSquare = scratchSquares[Number(body.targetSquare)];

			// Get the item from the scratch square
			let earnedItem = wm.wm.protobuf.UserItem.create({
				category: scratchSquare.category, 
				itemId: scratchSquare.itemId, 
				earnedAt: date
			});

			try // Attempt to update scratch sheet
			{
				// Add the item to the user's scratch items list
				await prisma.userItem.create({
					data: {
						userId: body.userId,
						category: scratchSquare.category, 
						itemId: scratchSquare.itemId, 
						type: 1,  // Scratch item
						earnedAt: date
					}
				});

				// Update the revealed scratch square
				await prisma.scratchSquare.update({
					where: {
						id: scratchSquare.id
					}, 
					data: {
						earned: true
					}
				});

				// Update the last scratched timestamp
				await prisma.user.update({
					where: {
						id: body.userId
					}, 
					data: {
						lastScratched: date
					}
				}); 
				
				// If the box we uncovered is the car
				if (scratchSquare.category == 201)
				{
					// Generate a new scratch sheet for the user
					await scratch.generateScratchSheet(body.userId, body.targetSheet + 1)
				}
			} 
			catch (error) // Failed to update scratch sheet
			{
				console.log("Failed to update scratch sheet! Reason:", error);	
			}
			
			// Get the updated content for the scratch sheet

			// Scratch sheet proto
			let scratchSheetProto : wm.wm.protobuf.ScratchSheet[] = []

			// Get the updated scratch sheet proto
			scratchSheetProto = await scratch.getScratchSheetProto(body.userId);

			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				scratchSheets : scratchSheetProto,
				currentSheet: body.targetSheet, 
				numOfScratched: 1, 
				earnedItem: earnedItem
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
					settings: true,
					gtWing: true
				}
			});

			let saveEx: any = {};
			if (body.car?.customColor !== null && body.car?.customColor !== undefined) {
				saveEx.customColor = body.car?.customColor!;
			} else {
				saveEx.customColor = car?.customColor;
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
			if (body.car?.windowSticker !== null && body.car?.windowSticker !== undefined) {
				saveEx.windowSticker = body.car?.windowSticker!;
			} else {
				saveEx.windowSticker = car?.windowSticker;
			}
			if (body.car?.windowStickerString !== null && body.car?.windowStickerString !== undefined) {
				saveEx.windowStickerString = body.car?.windowStickerString!;
			} else {
				saveEx.windowStickerString = 'ＷＡＮＧＡＮ';
			}
			if (body.car?.windowStickerFont !== null && body.car?.windowStickerFont !== undefined) {
				saveEx.windowStickerFont = body.car?.windowStickerFont!;
			} else {
				saveEx.windowStickerFont = car?.windowStickerFont;
			}
			if (body.car?.windowDecoration !== null && body.car?.windowDecoration !== undefined) {
				saveEx.windowDecoration = body.car?.windowDecoration!;
			} else {
				saveEx.windowDecoration = car?.windowDecoration;
			}
			if (body.car?.rivalMarker !== null && body.car?.rivalMarker !== undefined) {
				saveEx.rivalMarker = body.car?.rivalMarker!;
			} else {
				saveEx.rivalMarker = car?.rivalMarker;
			}
			if (body.car?.aura !== null && body.car?.aura !== undefined) {
				saveEx.aura = body.car?.aura!;
			} else {
				saveEx.aura = car?.aura;
			}
			if (body.car?.auraMotif !== null && body.car?.auraMotif !== undefined) {
				saveEx.auraMotif = body.car?.auraMotif!;
			} else {
				saveEx.auraMotif = car?.auraMotif;
			}


			// Update the car info
			await prisma.car.update({
				where: {
					carId: body.carId
				}, 
				data: saveEx
			})
			
			// Update the car settings
			await prisma.carSettings.update({
				where: {
					dbId: car?.carSettingsDbId,
				},
				data: {
					...body.setting
				}
			});

			// Update the GT Wing info
			let saveEx2: any = {};
			if (body.car?.gtWing?.pillar !== null && body.car?.gtWing?.pillar !== undefined) {
				saveEx2.pillar = body.car?.gtWing?.pillar!;
			} else {
				saveEx2.pillar = car?.gtWing?.pillar;
			}
			if (body.car?.gtWing?.pillarMaterial !== null && body.car?.gtWing?.pillarMaterial !== undefined) {
				saveEx2.pillarMaterial = body.car?.gtWing?.pillarMaterial!;
			} else {
				saveEx2.pillarMaterial = car?.gtWing?.pillarMaterial;
			}
			if (body.car?.gtWing?.mainWing !== null && body.car?.gtWing?.mainWing !== undefined) {
				saveEx2.mainWing = body.car?.gtWing?.mainWing!;
			} else {
				saveEx2.mainWing = car?.gtWing?.mainWing;
			}
			if (body.car?.gtWing?.mainWingColor !== null && body.car?.gtWing?.mainWingColor !== undefined) {
				saveEx2.mainWingColor = body.car?.gtWing?.mainWingColor!;
			} else {
				saveEx2.mainWingColor = car?.gtWing?.mainWingColor;
			}
			if (body.car?.gtWing?.wingTip !== null && body.car?.gtWing?.wingTip !== undefined) {
				saveEx2.wingTip = body.car?.gtWing?.wingTip!;
			} else {
				saveEx2.wingTip = car?.gtWing?.wingTip;
			}
			if (body.car?.gtWing?.material !== null && body.car?.gtWing?.material !== undefined) {
				saveEx2.material = body.car?.gtWing?.material!;
			} else {
				saveEx2.material = car?.gtWing?.material;
			}

			await prisma.carGTWing.update({
				where: {
					dbId: body.carId
				}, 
				data: saveEx2
			})

			// Get car item
			if(body.earnedItems.length !== 0){
				console.log('Car Item reward available, continuing ...');
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

			// Get the current date/time (unix epoch)
			let date = Math.floor(new Date().getTime() / 1000)

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

			let gtWing = await prisma.carGTWing.create({
				data: {}
			})

			// Sets if full tune is used or not
			// let fullyTuned = false;

			// 0: Stock Tune
			// 1: Basic Tune (600 HP)
			// 2: Fully Tuned (840 HP)
			let tune = 0;

			// If a user item has been used
			if (body.userItemId) 
			{
				console.log(`Item used - ID ${body.userItemId}`);

				// Remove the user item from the database
				let item = await prisma.userItem.delete({
					where: {
						userItemId: body.userItemId
					}
				});

				console.log('Item deleted!');

				switch(item.category)
				{
					case 203: // Car Tune Ticket

						// Switch on item id
						switch(item.itemId)
						{
							// Discarded Vehicle Card
							case 1: tune = 1; break;
							case 2: tune = 1; break;
							case 3: tune = 1; break;

							// Fully Tuned Ticket
							case 5: tune = 2; break;

							default: // Unknown item type, throw unsupported error
								throw Error("Unsupported itemId: " + item.itemId); 
						}
						break;

					case 201: // Special Car Ticket

						// Fully tuned special cars
						if (scratch.fullyTunedCars.includes(item.itemId))
						{
							// Car is fully tuned
							tune = 2;
						}
						// Basic tuned special cars
						if (scratch.basicTunedCars.includes(item.itemId))
						{
							// If gift cars fully tuned is set
							if (Config.getConfig().gameOptions.giftCarsFullyTuned)
							{
								// Car is fully tuned
								tune = 2;
							}
							else // Gift cars fully tuned not set
							{
								// Car is basic tuned
								tune = 1;
							}
						}
						// Stock tuned special cars
						if (scratch.stockTunedCars.includes(item.itemId))
						{
							// If gift cars fully tuned is set
							if (Config.getConfig().gameOptions.giftCarsFullyTuned)
							{
								// Car is fully tuned
								tune = 2;
							}
							else // Gift cars fully tuned not set
							{
								// Car is stock
								tune = 0;
							}
						}
						break;
				}
				console.log(`Item category was ${item.category} and item game ID was ${item.itemId}`);
			}

			// Other cases, may occur if item is not detected as 'used'

			// User item not used, but car has 740 HP by default
			else if (body.car && 
				(body.car.tunePower == 17) && (body.car.tuneHandling == 17))
			{
				// Car is fully tuned
				tune = 2;
			}
			// User item not used, but car has 600 HP by default
			else if (body.car && 
				(body.car.tunePower == 10) && (body.car.tuneHandling == 10))
			{
				// Car is basic tuned
				tune = 1;
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
					tune = 2;
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
				carGTWingDbId: gtWing.dbId,
				regionId: body.car.regionId!,
				lastPlayedAt: date,
			};

			// Additional car values (for basic / full tune)
			let additionalInsert = {

			}

			// Switch on tune status
			switch(tune)
			{
				// 0: Stock, nothing extra

				case 1: // Basic Tune

					// Updated default values
					carInsert.level = 2; // C8
					carInsert.tunePower = 10; // 600 HP
					carInsert.tuneHandling = 10; // 600 HP
	
					// Additional basic tune values
					additionalInsert = {
						stClearBits: 0,
						stLoseBits: 0,
						stClearCount: 20,
						stClearDivCount: 1,
						stConsecutiveWins: 20
					};
					break;

				case 2: // Fully Tuned

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

			// Get the user's current car order
			let carOrder = user.carOrder;

			// Add the new car to the front of the id
			carOrder.unshift(car.carId);

			// Add the car to the front of the order
			await prisma.user.update({
				where: {
					id: user.id
				}, 
				data: {
					carOrder: carOrder
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
					gtWing: true
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
				ownedItems: car!.items,
				lastPlayedAt: car!.lastPlayedAt
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
			// Get the request body
			// let body = wm.wm.protobuf.UpdateUserSessionRequest.decode(req.body);

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
