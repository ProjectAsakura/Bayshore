import { Application } from "express";
import { Config } from "../config";
import { Module } from "module";
import { prisma } from "..";
import { Car } from "@prisma/client";
let MersenneTwister = require('chancer');

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as scratch from "../util/scratch";
import * as common from "../util/common";


export default class TerminalModule extends Module {
    register(app: Application): void {

        // Load upon enter terminal
		app.post('/method/load_terminal_information', (req, res) => {

            // Get the request body for the load terminal information request
            let body = wm.wm.protobuf.LoadTerminalInformationRequest.decode(req.body);

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				prizeReceivable: false,
				transferNotice: {
					needToSeeTransferred: false
				},
				announceFeature: false,
				freeScratched: true
			}

            // Encode the response
			let message = wm.wm.protobuf.LoadTerminalInformationResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
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

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS
			}

            // Encode the response
			let message = wm.wm.protobuf.LoadBookmarksResponse.encode(msg);
			
            // Send the response to the client
            common.sendResponse(message, res);
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
						},
						include:{
							gtWing: true,
							lastPlayedPlace: true
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


            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				cars: cars
			}

            // Encode the response
			let message = wm.wm.protobuf.LoadBookmarksResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
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
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS
			};

			// Encode the response
			let message = wm.wm.protobuf.LoadBookmarksResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})

		
		// Car Summary Request (for bookmarks, also for search ghost by name)
		app.get('/resource/car_summary', async (req, res) => {

			// Get the query from the request
			let query = req.query;
			let cars;

			// Check the query limit
			let queryLimit = 10
			if(query.limit)
			{
				queryLimit = Number(query.limit);
			}

			// Check the last played place id
			if(query.last_played_place_id)
			{
				let queryLastPlayedPlaceId = 1;
				let getLastPlayedPlaceId = await prisma.placeList.findFirst({
					where:{
						placeId: String(query.last_played_place_id)
					}
				})

				if(getLastPlayedPlaceId)
				{
					queryLastPlayedPlaceId = getLastPlayedPlaceId.id;
				}

				cars = await prisma.car.findMany({
					take: queryLimit, 
					where: {
						lastPlayedPlaceId: queryLastPlayedPlaceId
					},
					include:{
						gtWing: true,
						lastPlayedPlace: true
					}
				});
			}
			else
			{
				// Get all of the cars matching the query
				cars = await prisma.car.findMany({
					take: queryLimit, 
					where: {
						OR:[
							{
								name: {
									startsWith: String(query.name)
								}
							},
							{
								name: {
									endsWith: String(query.name)
								}
							}
						]
						
					},
					include:{
						gtWing: true,
						lastPlayedPlace: true
					}
				});
			}

			for(let i=0; i<cars.length; i++)
			{
				if(cars[i].regionId === 0)
				{
					cars[i].regionId = MersenneTwister.int(1, 47);
				}
			}
			
			let msg = {
				hitCount: cars.length,
				cars: cars
			}

			// Encode the response
			let message = wm.wm.protobuf.CarSummary.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
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

			if(user)
			{
				// Update the completed tutorials
				let storedTutorials = user.tutorials;
				
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
			}

			let msg = {
				// Success error code
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			}

			// Encode the response
			let message = wm.wm.protobuf.SaveTerminalResultResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
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

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				scratchSheets: scratchSheetProto,
				currentSheet: currentSheet, 
				numOfScratched: scratched, 
				ownedUserItems: ownedUserItems
			}

            // Encode the response
			let message = wm.wm.protobuf.LoadScratchInformationResponse.encode(msg);
			
            // Send the response to the client
            common.sendResponse(message, res);
		});


		// Change terminal scratch page
		app.post('/method/turn_scratch_sheet', async (req, res) => {

            // Get the request body for the turn scratch sheet request
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

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			}

            // Encode the response
			let message = wm.wm.protobuf.TurnScratchSheetResponse.encode(msg);
			
            // Send the response to the client
            common.sendResponse(message, res);
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

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				scratchSheets : scratchSheetProto,
				currentSheet: body.targetSheet, 
				numOfScratched: 1, 
				earnedItem: earnedItem
			}

            // Encode the response
			let message = wm.wm.protobuf.SaveScratchSheetResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})

		
		// Terminal OCM Ranking
		app.post('/method/load_ghost_competition_ranking', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.LoadGhostCompetitionRankingRequest.decode(req.body);

			// Get current date
            let date = Math.floor(new Date().getTime() / 1000);

            // Get current active OCM Event
            let ocmEventDate = await prisma.oCMEvent.findFirst({
				where:{
					competitionId: body.competitionId
				}
			});

			// Declare GhostCompetitionSchedule
            let compeSch; 
			let msg: any;

            if(ocmEventDate)
			{
                // Creating GhostCompetitionSchedule
                compeSch = wm.wm.protobuf.GhostCompetitionSchedule.create({ 

                    // OCM Competition ID (1 = C1 (Round 16), 4 = Nagoya (Round 19), 8 = Hiroshima (Round 21))
                    competitionId: ocmEventDate.competitionId,

                    // OCM Qualifying Start Timestamp
                    qualifyingPeriodStartAt: ocmEventDate.qualifyingPeriodStartAt, 

                     // OCM Qualifying Close Timestamp
                    qualifyingPeriodCloseAt: ocmEventDate.qualifyingPeriodCloseAt,

                    // OCM Competition (Main Draw) Start Timestamp
                    competitionStartAt: ocmEventDate.competitionStartAt, 

                    // OCM Competition (Main Draw) Close Timestamp
                    competitionCloseAt: ocmEventDate.competitionCloseAt, 

                    // OCM Competition (Main Draw) End Timestamp
                    competitionEndAt: ocmEventDate.competitionEndAt, 

                    // idk what this is
                    lengthOfPeriod: ocmEventDate.lengthOfPeriod, 

                    // idk what this is
                    lengthOfInterval: ocmEventDate.lengthOfInterval, 

                    // Area for the event (GID_RUNAREA_*, 8 is GID_RUNAREA_NAGOYA)
                    area: ocmEventDate.area, 

                    // idk what this is
                    minigamePatternId: ocmEventDate.minigamePatternId 
                });
            

				// Get Participant
				let numOfParticipants: number = 0;
				let periodId: number = 0;
				let ownRecords;
				let topRecords: wm.wm.protobuf.LoadGhostCompetitionRankingResponse.Entry[] = [];
				let playedShopName = Config.getConfig().shopName;

				// Current date is OCM main draw
				if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
				{
					console.log('Current OCM Day : Competition Day / Main Draw');

					// Get Current OCM Period and All User's Record
					let ocmParticipant = await prisma.oCMTally.findMany({
						where:{
							competitionId: ocmEventDate!.competitionId,
						},
						orderBy: [
							{
								result: 'desc'
							},
							{
								periodId: 'desc'
							}   
						],
					})

					numOfParticipants = ocmParticipant.length;
					periodId = 0;
					let ranking = 0;

					if(ocmParticipant)
					{
						periodId = ocmParticipant[0].periodId;
						
						for(let i=0; i<ocmParticipant.length; i++)
						{
							let cars = await prisma.car.findFirst({
								where:{
									carId: ocmParticipant[i].carId
								},
								include:{
									gtWing: true,
									lastPlayedPlace: true
								}
							});

							let ocmGhostrecord = await prisma.oCMGhostBattleRecord.findFirst({
								where:{
									carId: ocmParticipant[0].carId,
									competitionId: ocmEventDate!.competitionId,
								}
							});

							if(ocmGhostrecord?.playedShopName !== null && ocmGhostrecord?.playedShopName !== undefined)
							{
								playedShopName = ocmGhostrecord.playedShopName;
							}

							if(ocmParticipant[i].carId === body.carId && ranking === 0)
							{
								// User car setting
								ownRecords = wm.wm.protobuf.LoadGhostCompetitionRankingResponse.Entry.create({
									rank: i + 1,
									result: ocmParticipant[i].result,
									carId: ocmParticipant[i].carId,
									name: cars!.name,
									regionId: cars!.regionId,
									model: cars!.model,
									visualModel: cars!.visualModel,
									defaultColor: cars!.defaultColor,
									title: cars!.title,
									level: cars!.level,
									windowStickerString: cars!.windowStickerString,
									playedShopName: playedShopName,
									playedAt: ocmGhostrecord!.playedAt
								});

								ranking++;
							}

							// Generate OCM Top Records
							topRecords.push(wm.wm.protobuf.LoadGhostCompetitionRankingResponse.Entry.create({
								rank: i + 1,
								result: ocmParticipant[i].result,
								carId: ocmParticipant[i].carId,
								name: cars!.name,
								regionId: cars!.regionId,
								model: cars!.model,
								visualModel: cars!.visualModel,
								defaultColor: cars!.defaultColor,
								title: cars!.title,
								level: cars!.level,
								windowStickerString: cars!.windowStickerString,
								playedShopName: playedShopName,
								playedAt: ocmGhostrecord!.playedAt
							}));
						}
					}
				}
				// Current date is OCM qualifying day
				else if(ocmEventDate!.qualifyingPeriodStartAt < date && ocmEventDate!.qualifyingPeriodCloseAt > date)
				{ 
					console.log('Current OCM Day : Qualifying Day');

					let ocmParticipant = await prisma.oCMGhostBattleRecord.findMany({
						where:{
							competitionId: ocmEventDate!.competitionId
						},
						orderBy: {
							result: 'desc'
						}
					})

					numOfParticipants = ocmParticipant.length;
					periodId = 0;
					let ranking = 0;

					if(ocmParticipant)
					{
						for(let i=0; i<ocmParticipant.length; i++)
						{
							let cars = await prisma.car.findFirst({
								where:{
									carId: ocmParticipant[i].carId
								},
								include:{
									gtWing: true,
									lastPlayedPlace: true
								}
							})

							if(ocmParticipant[i].carId === body.carId && ranking === 0)
							{
								// User car setting
								ownRecords = wm.wm.protobuf.LoadGhostCompetitionRankingResponse.Entry.create({
									rank: i + 1,
									result: ocmParticipant[i].result,
									carId: ocmParticipant[i].carId,
									name: cars!.name,
									regionId: cars!.regionId,
									model: cars!.model,
									visualModel: cars!.visualModel,
									defaultColor: cars!.defaultColor,
									title: cars!.title,
									level: cars!.level,
									windowStickerString: cars!.windowStickerString,
									playedShopName: ocmParticipant[i].playedShopName,
									playedAt: ocmParticipant[i].playedAt
								});

								ranking++;
							}

							// Generate OCM Top Records
							topRecords.push(wm.wm.protobuf.LoadGhostCompetitionRankingResponse.Entry.create({
								rank: i + 1,
								result: ocmParticipant[i].result,
								carId: ocmParticipant[i].carId,
								name: cars!.name,
								regionId: cars!.regionId,
								model: cars!.model,
								visualModel: cars!.visualModel,
								defaultColor: cars!.defaultColor,
								title: cars!.title,
								level: cars!.level,
								windowStickerString: cars!.windowStickerString,
								playedShopName: ocmParticipant[i].playedShopName,
								playedAt: ocmParticipant[i].playedAt
							}));
						}
					}
				}
				// OCM has ended
				else
				{
					console.log('Current / Previous OCM Day : OCM has Ended');

					let ocmParticipant = await prisma.oCMTally.findMany({
						where:{
							competitionId: ocmEventDate!.competitionId,
							periodId: 999999999
						},
						orderBy: {
							result: 'desc'
						}
					})

					numOfParticipants = ocmParticipant.length;
					periodId = 0;
					let ranking = 0;

					if(ocmParticipant)
					{
						for(let i=0; i<ocmParticipant.length; i++)
						{
							let cars = await prisma.car.findFirst({
								where:{
									carId: ocmParticipant[i].carId
								},
								include:{
									gtWing: true,
									lastPlayedPlace: true
								}
							});

							let ocmGhostrecord = await prisma.oCMGhostBattleRecord.findFirst({
								where:{
									carId: ocmParticipant[0].carId,
									competitionId: ocmEventDate!.competitionId,
								}
							});

							if(ocmParticipant[i].carId === body.carId && ranking === 0)
							{
								// User car setting
								ownRecords = wm.wm.protobuf.LoadGhostCompetitionRankingResponse.Entry.create({
									rank: i + 1,
									result: ocmParticipant[i].result,
									carId: ocmParticipant[i].carId,
									name: cars!.name,
									regionId: cars!.regionId,
									model: cars!.model,
									visualModel: cars!.visualModel,
									defaultColor: cars!.defaultColor,
									title: cars!.title,
									level: cars!.level,
									windowStickerString: cars!.windowStickerString,
									playedShopName: ocmGhostrecord!.playedShopName,
									playedAt: ocmGhostrecord!.playedAt
								});

								ranking++;
							}

							// Generate OCM Top Records
							topRecords.push(wm.wm.protobuf.LoadGhostCompetitionRankingResponse.Entry.create({
								rank: i + 1,
								result: ocmParticipant[i].result,
								carId: ocmParticipant[i].carId,
								name: cars!.name,
								regionId: cars!.regionId,
								model: cars!.model,
								visualModel: cars!.visualModel,
								defaultColor: cars!.defaultColor,
								title: cars!.title,
								level: cars!.level,
								windowStickerString: cars!.windowStickerString,
								playedShopName: ocmGhostrecord!.playedShopName,
								playedAt: ocmGhostrecord!.playedAt
							}));
						}
					}
				}

				// Response data
				msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					periodId: periodId,
					numOfParticipants: numOfParticipants,
					competitionSchedule: compeSch, // OCM Event Available or not
					ownRecord: ownRecords,
					topRecords: topRecords
				}
			}
			else
			{
				// Response data
				msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					numOfParticipants: 0,
				}
			}

            // Encode the response
			let message = wm.wm.protobuf.LoadGhostCompetitionRankingResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})

		
		// Register Opponent Ghost
		app.post('/method/register_opponent_ghost', async (req, res) => {
		
			// Get the information from the request
			let body = wm.wm.protobuf.RegisterOpponentGhostRequest.decode(req.body);
			
			let getHoFCarId = await prisma.oCMTop1Ghost.findFirst({
				where:{
					competitionId: body.specialGhostId,
				},
				orderBy: {
					periodId: 'desc',
				}
			});

			if(getHoFCarId)
			{
				let checkRegisteredGhost = await prisma.ghostRegisteredFromTerminal.findFirst({
					where:{
						carId: body.carId
					}
				});

				if(!(checkRegisteredGhost))
				{
					await prisma.ghostRegisteredFromTerminal.create({
						data:{
							carId: body.carId,
							competitionId: body.specialGhostId,
							opponentCarId: getHoFCarId.carId,
						}
					});

					console.log('Creating new Register Ghost Opponent entry')
				}
				else
				{
					await prisma.ghostRegisteredFromTerminal.update({
						where:{
							dbId: checkRegisteredGhost.dbId
						},
						data:{
							carId: body.carId,
							competitionId: body.specialGhostId,
							opponentCarId: getHoFCarId.carId,
						}
					});

					console.log('Updating Register Ghost Opponent entry')
				}
			}

			// Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			}

			// Encode the response
			let message = wm.wm.protobuf.RegisterOpponentGhostResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})


		// Lock Stamp Target
        app.post('/method/lock_stamp_target', async (req, res) => {

            // car_id, target_cars[]
            let body = wm.wm.protobuf.LockStampTargetRequest.decode(req.body);           

			// Unlock all of the stamp targets for the car
			await prisma.carStampTarget.updateMany({
				where: {
					stampTargetCarId: body.carId,
					recommended: true
				}, 
				data: {
					locked: false
				}
			});

			// Loop over all of the locked stamp targets
			for(let targetCar of body.targetCars)
			{
				// Lock the stamp target for the given car
				
				// This should only occur once, however
				// the relationship is not strictly 1:1
				await prisma.carStampTarget.updateMany({
					where: {
						carId: targetCar, 
						stampTargetCarId: body.carId,
						recommended: true
					}, 
					data: {
						locked: true
					}
				});
			}

			// Encode the response
            let message = wm.wm.protobuf.LoadStampTargetResponse.encode({
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            });

            // Send the response to the client
            common.sendResponse(message, res);
        });


		app.post('/method/save_screenshot', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.SaveScreenshotRequest.decode(req.body);

			// Response data
            let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			};

            // Encode the response
			let message = wm.wm.protobuf.SaveScreenshotResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		});


		/*
		app.post('/method/load_unreceived_user_items', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.LoadUnreceivedUserItemsRequest.decode(req.body);

			// Response data
            let msg = {
				error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
			};

            // Encode the response
			let message = wmsrv.wm.protobuf.LoadUnreceivedUserItemsResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})


		app.post('/method/check_item_receivable_cars', async (req, res) => {

			// Get the information from the request
			let body = wm.wm.protobuf.CheckItemReceivableCarsRequest.decode(req.body);

			// Response data
            let msg = {
				error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
			};

            // Encode the response
			let message = wmsrv.wm.protobuf.CheckItemReceivableCarsResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
		})
		*/
    }	
}