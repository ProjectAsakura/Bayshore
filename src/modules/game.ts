import { Application } from "express";
import { Module } from "../module";
import { prisma } from "..";
import { Config } from "../config";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "./util/common";
import * as gameFunction from "./game/functions";
import * as meter_reward from "./util/meter_reward";
import * as story from "./game/story";
import * as time_attack from "./game/time_attack";
import * as ghost from "./game/ghost";
import * as versus from "./game/versus";


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

			// Declare some variable for message response
			let ghostModePlay:boolean = false;
			let updateNewTrail:boolean = true; 
			let OCMModePlay:boolean = false; 

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


			// Check if earned some items
			await gameFunction.getItem(body);

			// Update Car Data
			await gameFunction.updateCar(body, car);

			// Update Car Order and Save Tutorial
			await gameFunction.updateOrderTutorial(body);

			// Every n*100 play give reward
			// Check this feature config
			let giveMeterReward = Config.getConfig().gameOptions.giveMeterReward; 

			// Check if this feature activated and check if user's play count is n*100 play
			if(giveMeterReward === 1 && body.playCount % 100 === 0 &&  body.playCount !== 0)
			{
				// Calling give meter reward function (BASE_PATH/src/util/meter_reward.ts)
				await meter_reward.giveMeterRewards(body);
			}


			// -----------------------------------------------------------------------------------------------
			// Additional Message for Response Data
			let additionalSesionIdMsg = {};

			// Ghost Battle mode or Crown Ghost Battle game mode is completed
			if(ghostModePlay === true && OCMModePlay === false && updateNewTrail === true)
			{
				additionalSesionIdMsg = {

					// Set session for saving ghost trail Ghost Battle Mode or Crown Ghost Battle Mode
					ghostSessionId: Math.floor(Math.random() * 100) + 1
				}
			}
			// OCM Battle game mode is completed
			else if(ghostModePlay === true && OCMModePlay === true && updateNewTrail === true)
			{ 
				additionalSesionIdMsg = {

					// Set session for saving ghost trail Competition (OCM) Ghost Battle Mode
					ghostSessionId: Math.floor(Math.random() * 100) + 101
				}
			}
			// -----------------------------------------------------------------------------------------------


			// Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,

				// Ghost Session ID
				...additionalSesionIdMsg,

				// Available Tickets (maybe for VS)
				//availableTickets: wm.protobuf.UserItem[]
			}
			
			// Encode the response
			let message = wm.wm.protobuf.SaveGameResultResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})
		

		// Load user's car game data
		app.post('/method/load_game_history', async (req, res) => {
			
			// Get the request content
			let body = wm.wm.protobuf.LoadGameHistoryRequest.decode(req.body);

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

			// Get Time Attack Record
			let taRecords = await gameFunction.getTimeAttackRecord(body);

			// Get Ghost Battle Record
			let ghostBattleRecord = await gameFunction.getGhostBattleRecord(body);
			
			// Response data
			let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				
				// Time Attack Record
				taRecords: taRecords.ta_records,
				taRankingUpdatedAt: taRecords.date,

				// Ghost Battle Record
				ghostHistory: ghostBattleRecord.ghostBattle_records,
				ghostBattleCount: car!.rgPlayCount,
				ghostBattleWinCount: car!.rgWinCount,

				// Stamp Sheet
				stampSheetCount: car!.stampSheetCount, 
				stampSheet: car!.stampSheet
            }

			// Encode the response
            let message = wm.wm.protobuf.LoadGameHistoryResponse.encode(msg);
            
			// Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
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
            common.sendResponse(message, res, req.rawHeaders);
        })


		// Save Screenshot
		app.post('/method/save_screenshot', async (req, res) => {

			// Get the request body
			let body = wm.wm.protobuf.SaveScreenshotRequest.decode(req.body);
			
			// Perform the save screenshot request for the car
			await gameFunction.saveScreenshot(body);

			// Check retire crown
			let getCarCrown = await prisma.carCrownDetect.findFirst({
				where:{
					carId: body.carId
				}
			});

			if(getCarCrown)
			{
				if(getCarCrown.status === 'retire')
				{
					await prisma.carCrownDetect.delete({
						where:{
							id: getCarCrown.id
						}
					});
				}
				else if(getCarCrown.status === 'finish')
				{
					let timestamp = body.playedAt - body.timestamp;

					if(timestamp <= 30)
					{
						console.log('Crown Force Finish Detected');

						// Update the user status
						await prisma.carCrownDetect.update({
							where:{
								id: getCarCrown.id
							},
							data:{
								status: 'forcefinish'
							}
						});

						// Restore the old crown
						await prisma.carCrown.update({
							where:{
								area: getCarCrown.area!
							},
							data:{
								carId: getCarCrown.opponentCarId!,
								area: getCarCrown.area!,
								ramp: getCarCrown.ramp!,
								path: getCarCrown.path!,
								playedAt: getCarCrown.playedAt!,
								tunePower: getCarCrown.tunePower!,
								tuneHandling: getCarCrown.tuneHandling!,
							}
						});

						await prisma.ghostTrail.updateMany({
							where:{
								area: getCarCrown.area!,
								crownBattle: true
							},
							data:{
								carId: getCarCrown.opponentCarId!,
								area: getCarCrown.area!,
								ramp: getCarCrown.ramp!,
								path: getCarCrown.path!,
								playedAt: getCarCrown.playedAt!,
								tunePower: getCarCrown.tunePower!,
								tuneHandling: getCarCrown.tuneHandling!,
								trail: getCarCrown.trail!
							}
						});


						// Banned the user
						let getUserId = await prisma.car.findFirst({
							where:{
								carId: body.carId
							},
							select:{
								userId: true
							}
						})

						if(getUserId)
						{
							await prisma.user.update({
								where:{
									id: getUserId.userId
								},
								data:{
									userBanned: true
								}
							});
						}
					}
					else
					{
						await prisma.carCrownDetect.delete({
							where:{
								id: getCarCrown.id
							}
						});
					}
				}
			}

			// Response data
            let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
			};

			// Encode the response
			let message = wm.wm.protobuf.SaveScreenshotResponse.encode(msg);
			
			// Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
        })
    }
}
