import { Application } from "express";
import { Module } from "../module";
import { prisma } from "..";
import { Config } from "../config";
let MersenneTwister = require('chancer');

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";
import * as meter_reward from "../util/games/meter_reward";
import * as story from "../util/games/story";
import * as time_attack from "../util/games/time_attack";
import * as ghost from "../util/games/ghost";
import * as versus from "../util/games/versus";


export default class GameModule extends Module {
    register(app: Application): void {

		// Saving the game result on mileage screen
		app.post('/method/save_game_result', async (req, res) => {

			// Get the request body for the save game result request
			let body = wm.wm.protobuf.SaveGameResultRequest.decode(req.body);

			// Get the user's car
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				},
				include:{
					gtWing: true,
					lastPlayedPlace: true
				}
			});

			// Declare some variable
			// Default value is 'false', inside 'BASE_PATH/src/util/games/ghost.ts' file
			let ghostModePlay;
			
			// Default value is 'true', inside 'BASE_PATH/src/util/games/ghost.ts' file
			let updateNewTrail; 

			// Default value is 'false', inside 'BASE_PATH/src/util/games/ghost.ts' file
			let OCMModePlay; 

			// Switch on the gamemode
			switch (body.gameMode) 
			{
				// Save Story Result
				case wm.wm.protobuf.GameMode.MODE_STORY:
				{
					// Calling save story result function (BASE_PATH/src/util/games/story.ts)
					await story.saveStoryResult(body, car); 

					// Break the switch case
					break;
				}

				// Save Time Attack Result
				case wm.wm.protobuf.GameMode.MODE_TIME_ATTACK:
				{
					// Calling save time attack result function (BASE_PATH/src/util/games/time_attack.ts)
					await time_attack.saveTimeAttackResult(body);

					// Break the switch case
					break;
				}

				// Save Ghost Battle Result
				case wm.wm.protobuf.GameMode.MODE_GHOST_BATTLE:
				{
					// Calling save ghost battle result function (BASE_PATH/src/util/games/ghost.ts)
					let ghostReturn = await ghost.saveGhostBattleResult(body, car);

					// Set this to tell the server if user is playing ghost battle mode
					ghostModePlay = ghostReturn.ghostModePlay;

					// For OCM : Disable update trail if current advantage distance record is not better than previous advantage distance record
					// For Crown : Disable update trail if lose
					// Ghost Battle will return true 
					updateNewTrail = ghostReturn.updateNewTrail;

					// Check if user playing OCM Ghost Battle Mode
					OCMModePlay = ghostReturn.OCMModePlay;

					// Break the switch case
					break;
				}

				// Save Versus Battle Result
				case wm.wm.protobuf.GameMode.MODE_VS_BATTLE:
				{
					// Calling save vs battle result function (BASE_PATH/src/util/games/versus.ts)
					await versus.saveVersusBattleResult(body, car); 

					// Break the switch case
					break;
				}
			}

			// Get car item
			// Car item reward from the game is available
			if(body.earnedItems.length !== 0)
			{
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
			// User item reward from the game is available
			if(body.earnedUserItems.length !== 0)
			{ 
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

			// Check playet at timestamp
			let timestamps = 0;
			if(body.car?.lastPlayedAt !== undefined && body.car?.lastPlayedAt !== null)
			{
				if(body.car.lastPlayedAt !== 0)
				{
					timestamps = body.car.lastPlayedAt;
				}
				else
				{
					timestamps = Math.floor(new Date().getTime() / 1000);
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
					windowSticker: body.car!.windowSticker!,
					lastPlayedAt: timestamps,
					regionId: body.car!.regionId!,
					rgStamp: common.sanitizeInputNotZero(body.rgResult?.rgStamp),
					stampSheetCount: common.sanitizeInputNotZero(body.rgResult?.stampSheetCount)
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
			// Check this feature config
			let giveMeterReward = Config.getConfig().gameOptions.giveMeterReward; 

			// Check if this feature activated and check if user's play count is n*100 play
			if(giveMeterReward === 1 && body.playCount % 100 === 0 &&  body.playCount !== 0)
			{
				// Calling give meter reward function (BASE_PATH/src/util/meter_reward.ts)
				await meter_reward.giveMeterRewards(body);
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

				// Only splice array when item is found
				if (index > -1) 
				{ 
					carOrder.splice(index, 1); // 2nd parameter means remove one item only
				}

				// Add it back to the front
				carOrder.unshift(body.carId);

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

			// Response data
			let msg;

			// Ghost Battle mode or Crown Ghost Battle game mode is completed
			if(ghostModePlay === true && OCMModePlay === false && updateNewTrail === true)
			{
				msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,

					// Set session for saving ghost trail Ghost Battle Mode or Crown Ghost Battle Mode
					ghostSessionId: MersenneTwister.int(1, 100)
				}
			}
			// OCM Battle game mode is completed
			else if(ghostModePlay === true && OCMModePlay === true && updateNewTrail === true)
			{ 
				msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,

					// Set session for saving ghost trail OCM Ghost Battle Mode
					ghostSessionId: MersenneTwister.int(101, 200)
				}
			}
			// Story mode or TA mode is completed
			else
			{ 
				msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS

					// No session for saving ghost trail (not playing Ghost Battle Mode / Retiring)
				}
			}
			
			// Encode the response
			let message = wm.wm.protobuf.SaveGameResultResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
		})
		

		// Load user's car game data
		app.post('/method/load_game_history', async (req, res) => {
			
			// Get the request content
			let body = wm.wm.protobuf.LoadGameHistoryRequest.decode(req.body);

			// Empty list of time attack records for the player's car
			let ta_records : wm.wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord[] = [];

			// Get the car info
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				},
				include:{
					gtWing: true,
					lastPlayedPlace: true
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

			// Get user ghost battle mode history data
			let ghostHistoryData = await prisma.ghostBattleRecord.findMany({
				where: {
					carId: body.carId,
				}, 
				orderBy: {
					playedAt: 'desc'
				},
				take: 3
			});

			// Empty list of ghost battle history records for the player's car
			let list_ghostHistoryData: wm.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord[] = [];
			for(let i=0; i<ghostHistoryData.length; i++){

				// User car setting
				let carSetings = wm.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting.create({
					tunePower: ghostHistoryData![i].tunePower,
					tuneHandling: ghostHistoryData![i].tuneHandling,
				});

				// ----Ghost Opponent 1----
				let ghostOpponentCar = await prisma.car.findFirst({
					where: {
						carId: ghostHistoryData![i].opponent1CarId!
					}
				});

				// If opponent is default ghost or random ghost
				if(!(ghostOpponentCar)){ 
					ghostOpponentCar = await prisma.car.findFirst({});
					ghostOpponentCar!.name = 'Ｓ６６０';
					ghostOpponentCar!.manufacturer = 12;
					ghostOpponentCar!.model = 105;
					ghostOpponentCar!.visualModel = 130;
					ghostOpponentCar!.regionId = 18;
					ghostOpponentCar!.country = 'GLB';
				}

				// Get Opponent 1 tune
				ghostOpponentCar!.tunePower = ghostHistoryData![i].opponent1TunePower!; 
				ghostOpponentCar!.tuneHandling = ghostHistoryData![i].opponent1TuneHandling!;

				// Get the Data
				let ghostOpponent = wm.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar.create({
					car: {
						...ghostOpponentCar!
					},
					result: ghostHistoryData![i].opponent1Result!
				});
				// ------------------------

				// ----Ghost Opponent 2 & 3----
				// Empty list of ghost battle records for the player's car
				let ghostMob: wm.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar[] = [];

				// ----Ghost Opponent 2----
				if(ghostHistoryData[i]?.opponent2CarId !== null && ghostHistoryData[i]?.opponent2CarId !== undefined)
				{
					let ghostOpponentCar2 = await prisma.car.findFirst({
						where: {
							carId: ghostHistoryData![i].opponent2CarId!
						}
					});

					// If opponent is default ghost or random ghost
					if(!(ghostOpponentCar2)){
						ghostOpponentCar2 = await prisma.car.findFirst({});
						ghostOpponentCar2!.name = 'Ｓ６６０';
						ghostOpponentCar2!.manufacturer = 12;
						ghostOpponentCar2!.model = 105;
						ghostOpponentCar2!.visualModel = 130;
						ghostOpponentCar2!.regionId = 18;
						ghostOpponentCar2!.country = 'GLB';
					}

					// Get Opponent 2 tune
					ghostOpponentCar2!.tunePower = ghostHistoryData![i].opponent2TunePower!;
					ghostOpponentCar2!.tuneHandling = ghostHistoryData![i].opponent2TuneHandling!;

					// Get the Data
					ghostMob.push(wm.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar.create({
						car: {
							...ghostOpponentCar2!
						},
						result: ghostHistoryData![i].opponent2Result!
					}));
				}
				// ------------------------

				// ----Ghost Opponent 3----
				if(ghostHistoryData[i]?.opponent3CarId !== null && ghostHistoryData[i]?.opponent3CarId !== undefined)
				{
					let ghostOpponentCar3 = await prisma.car.findFirst({
						where: {
							carId: ghostHistoryData![i].opponent3CarId!
						}
					});

					// If opponent is default ghost or random ghost
					if(!(ghostOpponentCar3)){ 
						ghostOpponentCar3 = await prisma.car.findFirst({});
						ghostOpponentCar3!.name = 'Ｓ６６０';
						ghostOpponentCar3!.manufacturer = 12;
						ghostOpponentCar3!.model = 105;
						ghostOpponentCar3!.visualModel = 130;
						ghostOpponentCar3!.regionId = 18;
						ghostOpponentCar3!.country = 'GLB';
					}

					// Get Opponent 3 tune
					ghostOpponentCar3!.tunePower = ghostHistoryData![i].opponent3TunePower!;
					ghostOpponentCar3!.tuneHandling = ghostHistoryData![i].opponent3TuneHandling!;

					// Get the Data
					ghostMob.push(wm.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar.create({
						car: {
							...ghostOpponentCar3!
						},
						result: ghostHistoryData![i].opponent3Result!
					}));
				}
				// ----------------------------
				
				// Push the ghost battle history data
				list_ghostHistoryData.push(wm.wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.create({ 
					carSetting: carSetings,
					opponent: ghostOpponent,
					mobs: ghostMob || null,
					area: ghostHistoryData![i].area,
					playedAt: ghostHistoryData![i].playedAt,
					playedShopName: ghostHistoryData![i].playedShopName
				}));
			}

			// Get current date
            let date = Math.floor(new Date().getTime() / 1000);
			
			// Response data
			let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				taRecords: ta_records,
				taRankingUpdatedAt: date,
				ghostHistory: list_ghostHistoryData,
				ghostBattleCount: car!.rgPlayCount,
				ghostBattleWinCount: car!.rgWinCount,
				stampSheetCount: car!.stampSheetCount, 
				stampSheet: car!.stampSheet
            }

			// Encode the response
            let message = wm.wm.protobuf.LoadGameHistoryResponse.encode(msg);
            
			// Send the response to the client
            common.sendResponse(message, res);
        })


		// Save Charge
		app.post('/method/save_charge', (req, res) => {

			// Response data
            let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			};

			// Encode the response
			let message = wm.wm.protobuf.SaveChargeResponse.encode(msg);
			
			// Send the response to the client
            common.sendResponse(message, res);
        })
    }
}
