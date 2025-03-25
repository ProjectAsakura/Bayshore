import { Application } from "express";
import { Config } from "../config";
import { Module } from "module";
import { prisma } from "..";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "./util/common";
import * as carFunctions from "./cars/functions";
import * as terminal from "./terminal/check_car";


export default class CarModule {
    register(app: Application): void {

        // Load Car
		app.post('/method/load_car', async (req, res) => {

            // Get the request body for the load car request
			let body = wm.wm.protobuf.LoadCarRequest.decode(req.body);

            // Get the car (required data only) with the given id
			let car = await carFunctions.getCar(body.carId);

			// Get Registered HoF Data
			let registeredTarget = await carFunctions.getRegisteredTarget(body.carId);

			// Get Challenger Data
			let opponentsTarget = await carFunctions.getOpponentsTarget(body.carId, registeredTarget.registeredargetAvailable);

			// Set Screenshot Count
			let screenshotCount = 0;

			// Check if screenshot feature enabled or not
			let enableScreenshot = Config.getConfig().gameOptions.enableScreenshot || 0;

			// Screenshot feature enabled
			if(enableScreenshot === 1)
			{
				// Set the screnshot chance count
				screenshotCount = 99;
			}

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,

				// wm.protobuf.Car;
				car: car,

				// Other Car Data (tuningPoint, odometer, playCount, etc)
				...car,
				stLoseBits: car.longLoseBits,
				tuningPoint: car!.tuningPoints,
				setting: car!.settings,
				rgPreviousVersionPlayCount: 0,
				stCompleted_100Episodes: car!.stCompleted100Episodes,
				auraMotifAutoChange: false,
				screenshotCount: screenshotCount,
				transferred: false,

				// Stamp or Challenger
				challenger: opponentsTarget.challenger,
				challengerReturnCount: opponentsTarget.challengerReturnCount,
				numOfChallengers: opponentsTarget.numOfChallengers,

				// OCM Challenge Top 1
				opponentGhost: registeredTarget.opponentGhost,
				opponentTrailId: registeredTarget.opponentTrailId,
				opponentCompetitionId: registeredTarget.opponentCompetitionId,

				// Owned Item
				ownedItems: car.items,

				// Announce Event Mode Prize
				announceEventModePrize: true
			};

            // Generate the load car response message
			let message = wm.wm.protobuf.LoadCarResponse.encode(msg);

			// Send the response
            common.sendResponse(message, res, req.rawHeaders);
		});


        // Create new car
		app.post('/method/create_car', async (req, res) => {

			// Get the request body for the create car request
			let body = wm.wm.protobuf.CreateCarRequest.decode(req.body);

			// Create the Car
			let createCar = await carFunctions.createCar(body);
			let tune = createCar.tune;
			let itemId = createCar.itemId;
			let carInsert = createCar.carInsert;

			// Check if user's other car have unique window sticker
			let windowSticker = await carFunctions.getWindowSticker(body.userId);
			let additionalWindowStickerInsert = windowSticker.additionalWindowStickerInsert
			
			/// Switch on tune status
			let getCarTune = await carFunctions.getCarTune(tune, carInsert);
			let additionalInsert = getCarTune.additionalInsert;

			// Check created car and item used and Check total created car
			let numOfOwnedCars = await prisma.car.count({
				where: {
					userId: body.userId
				}
			});

			let checkCreatedCars = await carFunctions.checkCreatedCar(body, carInsert, itemId);
			if(checkCreatedCars.cheated === true || numOfOwnedCars >= 200)
			{
				let msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_FORBIDDEN,
					carId: -1,
					userId: -1
				}

				// Generate the load car response message
				let message = wm.wm.protobuf.CreateCarResponse.encode(msg);

				// Send the response
				common.sendResponse(message, res, req.rawHeaders);

				return;
			}

			// Generate blank car settings object
			let settings = await prisma.carSettings.create({
				data: {}
			});
		
			// Generate blank car state object
			let state = await prisma.carState.create({
				data: {}
			});
		
			let gtWing = await prisma.carGTWing.create({
				data: {}
			});

			// Insert the car into the database
			let car = await prisma.car.create({
				data: {
					...carInsert,
					...additionalInsert,
					...additionalWindowStickerInsert,

					carSettingsDbId: settings.dbId,
					carStateDbId: state.dbId,
					carGTWingDbId: gtWing.dbId,
				}
			});

			// Check if created car is from terminal scratch car
			await terminal.checkScratchCar(body.userId, body.car.visualModel!)

			// Get the user's current car order
			let carOrder = createCar.user.carOrder;
			await carFunctions.carOrder(carOrder, car, createCar.user.id);

			// Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,

				// User ID
				accessCode: body.accessCode,
				banapassportAmId: body.banapassportAmId,
				//mbid: number|null,

				// Car Data
				carId: car.carId,
				car,
				...carInsert,
				...additionalInsert,

				// Expiring Full Tuned Ticket
				//fullTunedCarCouponUnreceivableAt: number|null
            }

            // Generate the load car response message
            let message = wm.wm.protobuf.CreateCarResponse.encode(msg);

            // Send the response
            common.sendResponse(message, res, req.rawHeaders);
        })


        // Saving the certain car update (on saving bannapass screen or after exiting user's detail car data or after editing car dress up on terminal)
		app.post('/method/update_car', async (req, res) => {

			// Get the request body for the update car request
			let body = wm.wm.protobuf.UpdateCarRequest.decode(req.body);

			// Not deleting car
			if(body.toBeDeleted === false || body.toBeDeleted === undefined || body.toBeDeleted === null)
			{
				// Update the car
				await carFunctions.updateCar(body);

				// Update the car setting
				await carFunctions.updateCarSetting(body);

				// Update the car window Sticker
				await carFunctions.updateCarWindowSticker(body);

				// Update the car Custom Wing
				await carFunctions.updateCarCustomWing(body);

				// Get car item (custom color or discarded card)
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
			}
			// Deleting car
			else
			{
				console.log('Deleting Car ID : ' + body.carId);

				// Mark Deleted Car
				await prisma.carState.update({
					where:{
						dbId: body.carId
					},
					data:{
						toBeDeleted: body.toBeDeleted
					}
				})
			}

			// Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }

			// Encode the response
            let message = wm.wm.protobuf.UpdateCarResponse.encode(msg);

            // Send the response
            common.sendResponse(message, res, req.rawHeaders);
        })
    }
}