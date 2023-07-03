import { Application } from "express";
import { Module } from "module";
import { prisma } from "..";
import { CarPathandTuning } from "@prisma/client";
import Long from "long";

// Import Proto
import * as wm from "../wmmt/wm.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "./util/common";
import * as ghostFunctions from "./ghost/functions";
import * as ghost_save_trail from "./ghost/ghost_save_trail";
import * as ghost_trail from "./ghost/ghost_util/ghost_trail";
import * as ghost_area from "./ghost/ghost_util/ghost_area";


export default class GhostModule extends Module {
    register(app: Application): void {

        // Load Ghost Battle Info
        app.post('/method/load_ghost_battle_info', async (req, res) => {

			// Get the request body for the load stamp target request
			let body = wm.wm.protobuf.LoadGhostBattleInfoRequest.decode(req.body); 

			let car = await prisma.car.findFirst({
				where:{
					carId: body.carId
				},
				include:{
					gtWing: true,
					lastPlayedPlace: true
				}
			});

			// Get Challenged Opponent History
			let getStampTargets = await ghostFunctions.getOpponentHistory(body.carId);
			let opponentHistory = getStampTargets.opponentHistory;

			// ------------- STAMP STUFF -------------
			// Must declare both
			// Get Challengers
            let getChallengers = await ghostFunctions.getChallengers(body.carId);
			let challengers = getChallengers.challengers;
			let arrayCarId = getChallengers.arrayCarId

			// Get Stamp Target
            let getStampTarget = await ghostFunctions.getStampTarget(body.carId, arrayCarId);
			let stampTarget = getStampTarget.stampTarget;
			// ---------------------------------------

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,

				// Challengers
				challengers: challengers || null,
				stampTargetCars: stampTarget || null,

				// History
				history: opponentHistory || null,
				
				// Stamp
				stampSheetCount: car?.stampSheetCount || 0,
                stampSheet: car?.stampSheet || null, 
                stampReturnStats: car?.stampSheet || null,
			};

			let getUserId = await prisma.user.findFirst({
				where:{
					id: car!.userId
				}
			});

			if(getUserId)
			{
				if(getUserId.userBanned === false)
				{
					// Encode the response
					let message = wm.wm.protobuf.LoadGhostBattleInfoResponse.encode(msg);

					// Send the response to the client
					common.sendResponse(message, res, req.rawHeaders);
				}
			} 
			else
			{
				// Encode the response
				let message = wm.wm.protobuf.LoadGhostBattleInfoResponse.encode(msg);

				// Send the response to the client
				common.sendResponse(message, res, req.rawHeaders);
			}
        })


        // Load Stamp Target
		app.post('/method/load_stamp_target', async (req, res) => {

            // Get the request body for the load stamp target request
			let body = wm.wm.protobuf.LoadStampTargetRequest.decode(req.body);

			// ------------- STAMP STUFF -------------
			// Must declare both
			// Get Challengers
            let getChallengers = await ghostFunctions.getChallengers(body.carId);
			let challengers = getChallengers.challengers;
			let arrayCarId = getChallengers.arrayCarId

			// Get Stamp Target
            let getStampTarget = await ghostFunctions.getStampTarget(body.carId, arrayCarId);
			let stampTarget = getStampTarget.stampTarget;
			// ---------------------------------------
            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				cars: stampTarget,
				challengers: challengers
			};

			// Encode the response
            let message = wm.wm.protobuf.LoadStampTargetResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})


        // Search Cars by Level
        app.post('/method/search_cars_by_level', async (req, res) => {

            // Get the request body for the search cars by level request
            let body = wm.wm.protobuf.SearchCarsByLevelRequest.decode(req.body);

			let car;

			if(body.regionId !== null && body.regionId !== undefined && body.regionId !== 0)
			{
				// Find ghost car by selected level and region ID
				car = await prisma.car.findMany({
					where: {
						ghostLevel: body.ghostLevel,
						regionId: body.regionId
					},
					include:{
						gtWing: true,
						lastPlayedPlace: true,
					}
				});
			}
			else
			{
				// Find ghost car by selected level
				car = await prisma.car.findMany({
					where: {
						ghostLevel: body.ghostLevel,
					},
					include:{
						gtWing: true,
						lastPlayedPlace: true,
					}
				});
			}

			// Get the ramp and path id
			let ghost_areas = await ghost_area.GhostArea(body.area);

			// Set the value
			let rampVal = ghost_areas.rampVal;
			let pathVal = ghost_areas.pathVal;

			// Get Ghost Car
			let getGhostCar = await ghostFunctions.getGhostCar(car, body.area, rampVal, pathVal);
			let lists_ghostcar = getGhostCar.lists_ghostcar;

			// Check again if car list for that selected region is available of not
			if(body.regionId !== null && body.regionId !== undefined && body.regionId !== 0 && car.length < 1)
			{
				let checkGhostSearchByRegion = await ghostFunctions.checkGhostSearchByRegion(body.ghostLevel, body.regionId);
				lists_ghostcar = checkGhostSearchByRegion.lists_ghostcar;
			}

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,

				// Area Value
				ramp: rampVal,
				path: pathVal,

				// Ghost Car List
				ghosts: lists_ghostcar,

				// Ghost Selection Method
				selectionMethod: Number(wm.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_LEVEL)
			};

			// Encode the response
            let message = wm.wm.protobuf.SearchCarsByLevelResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
        })


        // Load Normal Ghost Trail data
        app.post('/method/load_ghost_drive_data', async (req, res) => {

            // Get the request body for the load ghost drive data request
            let body = wm.wm.protobuf.LoadGhostDriveDataRequest.decode(req.body);

            // Get the path value from request body
			let path = body.path;

			// Empty list of ghost drive data records
			let lists_ghostcar: wm.wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData[] = [];

            // Check how many opponent ghost data available (including user data)
			for(let i=0; i<body.carTunings.length; i++)
			{ 
                // Check if opponent ghost have trail
				let ghost_trails = await prisma.ghostTrail.findFirst({ 
					where: {
						carId: body.carTunings[i].carId!,
						path: body.path,
					},
					orderBy: {
						playedAt: 'desc'
					}
				});
				
				// ---Get the user and opponent ghost trail data---
				let ghostType: number = wm.wm.protobuf.GhostType.GHOST_NORMAL;
				let lists_binarydriveData;
				if(ghost_trails?.driveData !== null && ghost_trails?.driveData !== undefined)
				{
					lists_binarydriveData = wm.wm.protobuf.BinaryData.create({
						data: ghost_trails!.driveData!,
						mergeSerial: ghost_trails!.driveDMergeSerial!
					});
				}

				let lists_binaryByArea
				if(ghost_trails?.trendBinaryByArea !== null && ghost_trails?.trendBinaryByArea !== undefined)
				{
					lists_binaryByArea = wm.wm.protobuf.BinaryData.create({
						data:  ghost_trails!.trendBinaryByArea!,
						mergeSerial: ghost_trails!.byAreaMergeSerial!
					});
				}

				let lists_binaryByCar
				if(ghost_trails?.trendBinaryByCar !== null && ghost_trails?.trendBinaryByCar !== undefined)
				{
					lists_binaryByCar = wm.wm.protobuf.BinaryData.create({
						data: ghost_trails!.trendBinaryByCar!,
						mergeSerial: ghost_trails!.byCarMergeSerial!
					});
				}

				let lists_binaryByUser
				if(ghost_trails?.trendBinaryByUser !== null && ghost_trails?.trendBinaryByUser !== undefined)
				{
					lists_binaryByUser = wm.wm.protobuf.BinaryData.create({
						data: ghost_trails!.trendBinaryByUser!,
						mergeSerial: ghost_trails!.byUserMergeSerial!
					});
				}
				// ------------------------------------------------


                // Push the data
				lists_ghostcar.push(wm.wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData.create({ // Push the data
					carId: Number(body.carTunings[i].carId!),
					type: ghostType,
					driveData: lists_binarydriveData || null,
					trendBinaryByArea: lists_binaryByArea || null,
					trendBinaryByCar: lists_binaryByCar || null,
					trendBinaryByUser: lists_binaryByUser || null,
				}));
			}

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				path: path,
				data: lists_ghostcar
			};

            // Encode the response
			let message = wm.wm.protobuf.LoadGhostDriveDataResponse.encode(msg);
            
            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
        })


        // Saving the ghost trail on mileage screen
		app.post('/method/register_ghost_trail', async (req, res) => {

            // Get the request body for the register ghost trail request
			let body = wm.wm.protobuf.RegisterGhostTrailRequest.decode(req.body);

            // Get the session id
			let actualSessionId: number = 0;

			// If the session are set, and are long data
            if(Long.isLong(body.ghostSessionId))
            {
                // Convert them to BigInt and add to the data
                actualSessionId = common.getBigIntFromLong(body.ghostSessionId);
            }

			// -----------------------------------------------------------------------------------------
            // OCM game mode session id
			if(actualSessionId > 100 && actualSessionId < 201)
			{ 
				console.log('OCM Ghost Battle Game found');

				// User playing ocm battle game mode
				await ghost_save_trail.saveOCMGhostTrail(body);
			}
            // Ghost Battle or Crown Ghost Battle game Mode session id
			else if(actualSessionId > 0 && actualSessionId < 101)
			{
                // Check if it is crown ghost battle or not (crown ghost battle don't have time, driveData, trendBinaryByArea, trendBinaryByCar, trendBinaryByUser value from request body)
				if(!(body.trendBinaryByArea) && !(body.trendBinaryByCar) && !(body.trendBinaryByUser))
				{
					console.log('Crown Ghost Battle Game found');

					// User is playing crown ghost battle game mode
					await ghost_save_trail.saveCrownGhostTrail(body);
				}
				else
				{
					console.log('Normal Ghost Battle Game found');

					// User is playing normal ghost battle game mode
					await ghost_save_trail.saveNormalGhostTrail(body);

					// Saving Ghost Path and Tuning
					await ghost_save_trail.savePathAndTuning(body);
				}
			}
			// -----------------------------------------------------------------------------------------
	
            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS
			}
			
			// Encode the response
            let message = wm.wm.protobuf.RegisterGhostTrailResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})


        // Load Crown Ghost Trail or Top 1 OCM Ghost Trail
		app.get('/resource/ghost_trail', async (req, res) => {	

            // Get url query parameter [For Crown Ghost Battle]
			let pCarId = Number(req.query.car_id);
			let pArea = Number(req.query.area); 

            // Get url query parameter [For OCM Ghost Battle]
			let pTrailId = Number(req.query.trail_id) || undefined;

			// Declare variable
			let rampVal: number = 0;
			let pathVal: number = 0;
			let playedAt: number = 0;
			let ghostTrail;

            // Query parameter from OCM Battle available
			if(pTrailId)
			{ 
				console.log('Requesting OCM Ghost Trail');

                // Get the trail data
				let ghost_trails = await ghost_trail.getOCMGhostTrail(pCarId, pTrailId);

				pArea = ghost_trails.areaVal;
				rampVal = ghost_trails.rampVal;
				pathVal = ghost_trails.pathVal;
				playedAt = ghost_trails.playedAt;
				ghostTrail = ghost_trails.ghostTrail;
			}
            // Query parameter from Crown Ghost Battle available
			else
			{ 
				console.log('Requesting Crown Ghost Trail');

				// Get the crown trail data
				let ghost_trails = await ghost_trail.getCrownGhostTrail(pCarId, pArea);

				rampVal = ghost_trails.rampVal;
				pathVal = ghost_trails.pathVal;
				playedAt = ghost_trails.playedAt;
				ghostTrail = ghost_trails.ghostTrail;
			}

            // Response data
			let msg = {
				carId: pCarId,
				area: pArea,
				ramp: rampVal,
				path: pathVal,
				playedAt: playedAt,
				trail: ghostTrail
			};
			
			// Encode the response
            let message = wm.wm.protobuf.GhostTrail.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})


        // Load ghost path and tunings per area 
		app.post('/method/load_paths_and_tunings', async (req, res) => {

            // Get the request body for the load path and tunings request
			let body = wm.wm.protobuf.LoadPathsAndTuningsRequest.decode(req.body);

			// Empty list of car path and tuning records
			let carTbyP: wm.wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath[] = [];

            // Loop GID_RUNAREA_*
			for(let j=0; j<19; j++)
			{
                // 14 - 16 are dummy area, 17 is C1 Closed
				if(j >= 14){
					j = 18; // GID_RUNAREA_HIROSHIMA
				}
				let rampVal = 0;
				let pathVal = 0;

				// Get the ramp and path id
				let ghost_areas = await ghost_area.GhostArea(j);

				// Set the value
				rampVal = ghost_areas.rampVal;
				pathVal = ghost_areas.pathVal;

				// Empty list of car tuning records
				let carTuning: wm.wm.protobuf.CarTuning[] = [];
				let pathAndTuning: CarPathandTuning | null;

                // Loop to how many opponent ghost selected by user
				for(let i=0; i<body.selectedCars.length; i++)
				{ 
                    // Get path and tuning per area
					pathAndTuning = await prisma.carPathandTuning.findFirst({
						where: {
							carId: body.selectedCars[i],
							area: j
						},
						orderBy: {
							area: 'asc'
						}
					});

                    // Opponent ghost have path and tuning record for certain area
					if(pathAndTuning)
					{
                        // Push the data
						carTuning.push(wm.wm.protobuf.CarTuning.create({ 
							carId: body.selectedCars[i],
							tunePower: pathAndTuning!.tunePower,
							tuneHandling: pathAndTuning!.tuneHandling,
							lastPlayedAt: pathAndTuning!.lastPlayedAt,
						}));
					}
                    // Opponent ghost doesn't have path and tuning record for certain area
					else
					{ 
                        // Get user's car last used tunePower and tuneHandling
						let car = await prisma.car.findFirst({ 
							where: {
								carId: body.selectedCars[i]
							},
							select:{
								tunePower: true,
								tuneHandling: true
							}
						});	

                        // Push the data
						carTuning.push(wm.wm.protobuf.CarTuning.create({ 
							carId: body.selectedCars[i],

                            // Set the tunePower used when last played the game
							tunePower: car!.tunePower, 

                            // Set the tuneHandling used when last played the game
							tuneHandling: car!.tuneHandling 
						}));
					}
				}

                // Push the data
				carTbyP.push(wm.wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath.create({
					area: j,
					ramp: rampVal,
					path: pathVal,
					carTunings: carTuning,
					selectionMethod: wm.wm.protobuf.PathSelectionMethod.PATH_NORMAL // idk what this is
				}));
			}

            // Response data
            let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				data: carTbyP
			};

            // Encode the response
			let message = wm.wm.protobuf.LoadPathsAndTuningsResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})


        // Lock Crown
        app.post('/method/lock_crown', (req, res) => {

			// Get the information from the request
			let body = wmsrv.wm.protobuf.LockCrownRequest.decode(req.body);

            // Response data
            let msg = {
				error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
			};

            // Encode the response
			let message = wmsrv.wm.protobuf.LockCrownResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
        })
    }
}