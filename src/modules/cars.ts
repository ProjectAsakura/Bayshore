import { Application } from "express";
import { Config } from "../config";
import { Module } from "module";
import { prisma } from "..";
import { User } from "@prisma/client";
import Long from "long";
let MersenneTwister = require('chancer');

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";
import * as scratch from "../util/scratch";
import * as terminal from "../util/terminal/check_car";


export default class CarModule extends Module {
    register(app: Application): void {

        // Load Car
		app.post('/method/load_car', async (req, res) => {

            // Get the request body for the load car request
			let body = wm.wm.protobuf.LoadCarRequest.decode(req.body);

            // Get the car (required data only) with the given id
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				},
				include: {
					settings: true,
					items: true,
					gtWing: true,
					lastPlayedPlace: true,
				}
			});

			// Error handling if ghostLevel accidentally set to 0 or more than 10
			if(car!.ghostLevel < 1)
			{
				car!.ghostLevel = 1;
			}
			if(car!.ghostLevel > 11)
			{
				car!.ghostLevel = 10;
			}

			// Convert the database lose bits to a Long
			let longLoseBits = Long.fromString(car!.stLoseBits.toString());

			// Get Registered Target
			let getTarget = await prisma.ghostRegisteredFromTerminal.findFirst({
				where:{
					carId: body.carId
				}
			});
			let opponentGhost;
			let opponentTrailId;
			let opponentCompetitionId;
			let registeredTarget: boolean = false;

			if(getTarget)
			{
				console.log('Registered Opponents Available');

				let getTargetTrail = await prisma.oCMTop1GhostTrail.findFirst({
					where:{
						carId: getTarget.opponentCarId,
						competitionId: Number(getTarget.competitionId)
					},
					orderBy:{
						periodId: 'desc'
					}
				});

				if(getTargetTrail)
				{
					let getTargetCar = await prisma.car.findFirst({
						where:{
							carId: getTarget.opponentCarId
						},
						include:{
							gtWing: true,
							lastPlayedPlace: true
						}
					});

					opponentGhost = wm.wm.protobuf.GhostCar.create({
						car: {
							...getTargetCar!,
							tunePower: getTargetTrail!.tunePower,
							tuneHandling: getTargetTrail!.tuneHandling,
						},
						area: getTargetTrail!.area,
						ramp: getTargetTrail!.ramp,
						path: getTargetTrail!.path,
						nonhuman: false,
						type: wm.wm.protobuf.GhostType.GHOST_NORMAL,
						trailId: getTargetTrail!.dbId
					});
					opponentTrailId = Number(getTargetTrail!.dbId);
					opponentCompetitionId = Number(getTarget.competitionId);
				}

				registeredTarget = true;
			}

			// Check opponents stamp target
			// Will skip this if user's have Hall of Fame ghost registered
			let carsChallengers;
			let returnCount = 0;
			let opponentTargetCount = 0;
			if(registeredTarget === false)
			{
				opponentTargetCount = await prisma.carStampTarget.count({
					where:{
						stampTargetCarId: body.carId,
						recommended: true,
					},
					orderBy:{
						locked: 'desc'
					}
				})
					
				returnCount = 1;
				
				if(opponentTargetCount > 0)
				{
					console.log('Challengers Available');

					// Randomize pick
					let random: number = MersenneTwister.int(0, opponentTargetCount);

					// Check opponents target
					let opponentTarget = await prisma.carStampTarget.findMany({
						where:{
							stampTargetCarId: body.carId,
							recommended: true,
						},
						orderBy:{
							locked: 'desc'
						},
						skip: random,
						take: 1,
					});
					
					// Get all of the friend cars for the carId provided
					let challengers = await prisma.carChallenger.findFirst({
						where: {
							challengerCarId: opponentTarget[0].carId,
							carId: body.carId
						},
						orderBy:{
							id: 'desc'
						}
					});
				
					if(challengers)
					{
						returnCount = opponentTarget[0].returnCount;

						let carTarget = await prisma.car.findFirst({
							where:{
								carId: challengers.challengerCarId
							},
							include:{
								gtWing: true,
								lastPlayedPlace: true
							}
						})

						let result = 0;
						if(challengers.result > 0)
						{
							result = -Math.abs(challengers.result);
						}
						else{
							result = Math.abs(challengers.result);
						}

						carsChallengers = wm.wm.protobuf.ChallengerCar.create({
							car: carTarget!,
							stamp: challengers.stamp,
							result: result, 
							area: challengers.area
						});
					}
				}
			}
			
			

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				car: {
					...car!,
				},
				tuningPoint: car!.tuningPoints,
				setting: car!.settings,
				rgPreviousVersionPlayCount: 0,
				stCompleted_100Episodes: car!.stCompleted100Episodes,
				auraMotifAutoChange: false,
				screenshotCount: 0,
				transferred: false,
				...car!,
				stLoseBits: longLoseBits,
				ownedItems: car!.items,
				lastPlayedAt: car!.lastPlayedAt,
				announceEventModePrize: true,

				// Stamp or Challenger
				challenger: carsChallengers || null,
				challengerReturnCount: returnCount || null,
				numOfChallengers: opponentTargetCount + 1 || null,

				// OCM Challenge Top 1
				opponentGhost: opponentGhost || null,
				opponentTrailId: opponentTrailId || null,
				opponentCompetitionId: opponentCompetitionId || null
			};

            // Generate the load car response message
			let message = wm.wm.protobuf.LoadCarResponse.encode(msg);

			// Send the response
            common.sendResponse(message, res);
		});


        // Create new car
		app.post('/method/create_car', async (req, res) => {

			// Get the request body for the create car request
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

				// Check if created car is from terminal scratch car
				await terminal.checkScratchCar(body.userId, body.car.visualModel!)
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

			// Randomize regionId
			let regionId: number = 18;
			regionId = MersenneTwister.int(1, 47);
			
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
				regionId: regionId,
				lastPlayedAt: date,
				lastPlayedPlaceId: 1, // Server Default
			};

			// Check if user have more than one cars
			let checkWindowSticker = await prisma.car.findFirst({
				where: {
					userId: body.userId
				},
				select: {
					windowStickerString: true,
					windowStickerFont: true
				}
			});
			let additionalWindowStickerInsert = {
					
			}

			// If more than one cars, get the window sticker string
			if(checkWindowSticker)
			{
				additionalWindowStickerInsert = {
					windowStickerString: checkWindowSticker.windowStickerString,
					windowStickerFont: checkWindowSticker.windowStickerFont,
				}
			}
			
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
						ghostLevel: 4,
						stClearBits: 0,
						stLoseBits: 0,
						stClearCount: 20,
						stClearDivCount: 1,
						stConsecutiveWins: 20,
						stConsecutiveWinsMax: 20
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
						stConsecutiveWins: 80,
						stConsecutiveWinsMax: 80
					};
			}

			// Insert the car into the database
			let car = await prisma.car.create({
				data: {
					...carInsert,
					...additionalInsert,
					...additionalWindowStickerInsert
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

			// Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				carId: car.carId,
				car,
				...carInsert,
				...additionalInsert
            }

            // Generate the load car response message
            let message = wm.wm.protobuf.CreateCarResponse.encode(msg);

            // Send the response
            common.sendResponse(message, res);
        })


        // Saving the certain car update (on saving bannapass screen or after exiting user's detail car data or after editing car dress up on terminal)
		app.post('/method/update_car', async (req, res) => {

			// Get the request body for the update car request
			let body = wm.wm.protobuf.UpdateCarRequest.decode(req.body);

			// Get the ghost result for the car
			let cars = body?.car;

			// Declare data
			let data : any;

			// Car is set
			if (cars)
			{
				// Get current date
				let date = Math.floor(new Date().getTime() / 1000);

				// Car update data
				data = {
					customColor: common.sanitizeInput(cars.customColor),
					wheel: common.sanitizeInput(cars.wheel),
					wheelColor: common.sanitizeInput(cars.wheelColor), 
					aero: common.sanitizeInput(cars.aero),
					bonnet: common.sanitizeInput(cars.bonnet),
					wing: common.sanitizeInput(cars.wing),
					mirror: common.sanitizeInput(cars.mirror),
					neon: common.sanitizeInput(cars.neon),
					trunk: common.sanitizeInput(cars.trunk),
					plate: common.sanitizeInput(cars.plate),
					plateColor: common.sanitizeInput(cars.plateColor),
					plateNumber: common.sanitizeInput(cars.plateNumber),
					windowSticker: common.sanitizeInput(cars.windowSticker),
					windowDecoration: common.sanitizeInput(cars.windowDecoration), 
					rivalMarker: common.sanitizeInput(cars.rivalMarker),
					aura: common.sanitizeInput(cars.aura),
					auraMotif: common.sanitizeInput(cars.auraMotif),
					rgStamp: common.sanitizeInputNotZero(body.rgStamp),
					lastPlayedAt: date
				}

				// Update the car info
				await prisma.car.update({
					where: {
						carId: body.carId
					}, 
					data: data
				})
			}

            // Get the car with the given id
			let car = await prisma.car.findFirst({
				where: {
					carId: body.carId
				},
				include: {
					settings: true,
					gtWing: true,
					lastPlayedPlace: true
				}
			});
			
			// Update the car settings
			await prisma.carSettings.update({
				where: {
					dbId: car?.carSettingsDbId,
				},
				data: {
					...body.setting
				}
			});

			// Update the user data
			let userData = await prisma.car.findFirst({
				where:{
					carId: body.carId
				},
				select:{
					userId: true,
					windowStickerString: true
				}
			})

			// Newer window sticker string is different from the older one
			// Check if window sticker string is not null 
			// (windowStickerString value when changing custom color in driver unit is undefined)
			if(body.car?.windowStickerString)
			{
				if(userData!.windowStickerString !== body.car.windowStickerString){
					console.log('Updating Window Sticker');

					await prisma.car.updateMany({
						where: {
							userId: userData!.userId
						}, 
						data: {
							windowStickerString: body.car.windowStickerString,
							windowStickerFont: body.car.windowStickerFont!
						}
					})
				}
			}

			// Get car item (custom color or discarded card)
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

			// Update the GT Wing (custom wing) info
			// Get the GT Wing data for the car
			let gtWing = body.car?.gtWing;
			let dataGTWing: any;

			// GT Wing is set
			if (gtWing)
			{
				dataGTWing = {
					pillar: common.sanitizeInput(gtWing.pillar), 
					pillarMaterial: common.sanitizeInput(gtWing.pillarMaterial), 
					mainWing: common.sanitizeInput(gtWing.mainWing), 
					mainWingColor: common.sanitizeInput(gtWing.mainWingColor), 
					wingTip: common.sanitizeInput(gtWing.wingTip), 
					material: common.sanitizeInput(gtWing.material), 
				}

				await prisma.carGTWing.update({
					where: {
						dbId: body.carId
					}, 
					data: dataGTWing
				})
			}
			// Check if this is in getting new custom color screen or not
			else if(body.car?.carId !== null && body.car?.carId !== undefined)
			{
				// GT Wing not set
				if(gtWing === undefined || gtWing === null)
				{
					dataGTWing = {
						pillar: 0, 
						pillarMaterial: 0, 
						mainWing: 0, 
						mainWingColor: 0, 
						wingTip: 0, 
						material: 0, 
					}

					await prisma.carGTWing.update({
						where: {
							dbId: body.carId
						}, 
						data: dataGTWing
					})
				}
			}

			// Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }

			// Encode the response
            let message = wm.wm.protobuf.UpdateCarResponse.encode(msg);

            // Send the response
            common.sendResponse(message, res);
        })
    }
}