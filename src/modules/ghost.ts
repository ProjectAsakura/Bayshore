import { Application } from "express";
import { Module } from "module";
import { prisma } from "..";
import { CarPathandTuning } from "@prisma/client";
import Long from "long";
import { Config } from "../config";

// Import Proto
import * as wm from "../wmmt/wm.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";
import * as ghost_save_trail from "../util/ghost/ghost_save_trail";
import * as ghost_trail from "../util/ghost/ghost_trail";


export default class GhostModule extends Module {
    register(app: Application): void {

        // Load Ghost Battle Info
        app.post('/method/load_ghost_battle_info', async (req, res) => {

			// Get the request body for the load stamp target request
			let body = wm.wm.protobuf.LoadGhostBattleInfoRequest.decode(req.body); 

			let car = await prisma.car.findFirst({
				where:{
					carId: body.carId
				}
			})

			// ---For testing only---
			let cars = await prisma.car.findMany({
				where: {
                    OR: [
						{ 
							name: { startsWith: 'ＫＩＴＳＵ' }
						},
                        { 
							name: { startsWith: 'きつ' }
						},
                    ],
                },
				include:{
					gtWing: true,
					lastPlayedPlace: true
				},
				orderBy: {
					carId: 'asc'
				},
				take: 10
			});

			let carsStamp: wm.wm.protobuf.StampTargetCar[] = [];
			let carsChallenger: wm.wm.protobuf.ChallengerCar[] = [];

            // Get all of the friend cars for the carId provided
            let stampTargets = await prisma.carStampTarget.findMany({
                where: {
                    stampTargetCarId: body.carId
                }
            });

			if(stampTargets)
			{
				for(let i=0; i<stampTargets.length; i++)
				{
					let carTarget = await prisma.car.findFirst({
						where:{
							carId: stampTargets[i].carId
						}
					})

					carsStamp.push(
						wm.wm.protobuf.StampTargetCar.create({
							car: carTarget!,
							returnCount: stampTargets[i].returnCount, 
							locked: stampTargets[i].locked, 
							recommended: stampTargets[i].recommended
						})
					);
				}
			}

			// Get all of the friend cars for the carId provided
            let challengers = await prisma.carChallenger.findMany({
                where: {
                    challengerCarId: body.carId
                }
            });

			if(challengers)
			{
				for(let i=0; i<challengers.length; i++)
				{
					let carTarget = await prisma.car.findFirst({
						where:{
							carId: challengers[i].carId
						}
					})

					carsChallenger.push(
						wm.wm.protobuf.ChallengerCar.create({
							car: carTarget!,
							stamp: challengers[i].stamp,
                            result: challengers[i].result, 
                            area: challengers[i].area
						})
					);
				}
			}

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				stampTargetCars: carsStamp,
				challengers: carsChallenger,
				stampSheetCount: car!.stampSheetCount,
                stampSheet: car?.stampSheet || null, 
                stampReturnStats: car?.stampSheet || null,
				history: cars || null,
			};

            // Encode the response
			let message = wm.wm.protobuf.LoadGhostBattleInfoResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
        })


        // Load Stamp Target (Still not working)
		app.post('/method/load_stamp_target', async (req, res) => {

            // Get the request body for the load stamp target request
			let body = wm.wm.protobuf.LoadStampTargetRequest.decode(req.body); 

			let carsStamp: wm.wm.protobuf.StampTargetCar[] = [];
			let carsChallenger: wm.wm.protobuf.ChallengerCar[] = [];

            // Get all of the friend cars for the carId provided
            let stampTargets = await prisma.carStampTarget.findMany({
                where: {
                    carId: body.carId
                }
            });

			if(stampTargets)
			{
				for(let i=0; i<stampTargets.length; i++)
				{
					let carTarget = await prisma.car.findFirst({
						where:{
							carId: stampTargets[i].stampTargetCarId
						}
					})

					carsStamp.push(
						wm.wm.protobuf.StampTargetCar.create({
							car: carTarget!,
							returnCount: stampTargets[i].returnCount, 
							locked: stampTargets[i].locked, 
							recommended: stampTargets[i].recommended
						})
					);
				}
			}

			// Get all of the friend cars for the carId provided
            let challengers = await prisma.carChallenger.findMany({
                where: {
                    carId: body.carId
                }
            });

			if(stampTargets)
			{
				for(let i=0; i<challengers.length; i++)
				{
					let carTarget = await prisma.car.findFirst({
						where:{
							carId: challengers[i].challengerCarId
						}
					})

					carsChallenger.push(
						wm.wm.protobuf.ChallengerCar.create({
							car: carTarget!,
							stamp: challengers[i].stamp,
                            result: challengers[i].result, 
                            area: challengers[i].area
						})
					);
				}
			}

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				cars: carsStamp,
				challengers: carsChallenger
			};

			// Encode the response
            let message = wm.wm.protobuf.LoadStampTargetResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
		})


        // Ghost Mode - Search ghost car by level
        app.post('/method/search_cars_by_level', async (req, res) => {

            // Get the request body for the search cars by level request
            let body = wm.wm.protobuf.SearchCarsByLevelRequest.decode(req.body);

            // Find ghost car by selected level
			let car = await prisma.car.findMany({
				where: {
					ghostLevel: body.ghostLevel
				},
				include:{
					gtWing: true,
					lastPlayedPlace: true,
				}
			});

			// Randomizing the starting ramp and path based on selected area
			let rampVal = 0;
			let pathVal = 0;
			if(body.area === 0){ // GID_RUNAREA_C1
				rampVal = Math.floor(Math.random() * 4);
				pathVal = Math.floor(Math.random() * 10);
			}
			else if(body.area === 1){ // GID_RUNAREA_RING
				rampVal = Math.floor(Math.random() * 2) + 4;
				pathVal = Math.floor(Math.random() * 6) + 10;
			}
			else if(body.area === 2){ // GID_RUNAREA_SUBTOKYO_3_4
				rampVal = Math.floor(Math.random() * 2) + 6;
				pathVal = Math.floor(Math.random() * 2) + 16;
			}
			else if(body.area === 3){ // GID_RUNAREA_SUBTOKYO_5
				rampVal = Math.floor(Math.random() * 2) + 8;
				pathVal = Math.floor(Math.random() * 2) + 18;
			}
			else if(body.area === 4){ // GID_RUNAREA_WANGAN
				rampVal = Math.floor(Math.random() * 4) + 10;
				pathVal = Math.floor(Math.random() * 7) + 20;
			}
			else if(body.area === 5){ // GID_RUNAREA_K1
				rampVal = Math.floor(Math.random() * 4) + 14;
				pathVal = Math.floor(Math.random() * 7) + 27;
			}
			else if(body.area === 6){ // GID_RUNAREA_YAESU
				rampVal = Math.floor(Math.random() * 3) + 18;
				pathVal = Math.floor(Math.random() * 4) + 34;
			}
			else if(body.area === 7){ // GID_RUNAREA_YOKOHAMA
				rampVal = Math.floor(Math.random() * 4) + 21;
				pathVal = Math.floor(Math.random() * 11) + 38;
			}
			else if(body.area === 8){ // GID_RUNAREA_NAGOYA
				rampVal = 25;
				pathVal = 49;
			}
			else if(body.area === 9){ // GID_RUNAREA_OSAKA
				rampVal = 26;
				pathVal = Math.floor(Math.random() * 4) + 50;
			}
			else if(body.area === 10){ // GID_RUNAREA_KOBE
				rampVal = Math.floor(Math.random() * 2) + 27;
				pathVal = Math.floor(Math.random() * 2) + 54;
			}
			else if(body.area === 11){ // GID_RUNAREA_FUKUOKA
				rampVal = Math.floor(Math.random() * 4) + 29;
				pathVal = Math.floor(Math.random() * 4) + 58;
			}
			else if(body.area === 12){ // GID_RUNAREA_HAKONE
				rampVal = Math.floor(Math.random() * 2) + 33;
				pathVal = Math.floor(Math.random() * 2) + 62;
			}
			else if(body.area === 13){ // GID_RUNAREA_TURNPIKE
				rampVal = Math.floor(Math.random() * 2) + 35;
				pathVal = Math.floor(Math.random() * 2) + 64;
			}
			//14 - 16 are dummy area, 17 is GID_RUNAREA_C1_CLOSED
			else if(body.area === 18){ // GID_RUNAREA_HIROSHIMA
				rampVal = Math.floor(Math.random() * 2) + 37;
				pathVal = Math.floor(Math.random() * 2) + 56;
			}

			// Empty list of ghost car records
			let lists_ghostcar: wm.wm.protobuf.GhostCar[] = [];
			let arr = [];
			let maxNumber = 0;

            // If all user car data available is more than 10 for certain level
			if(car.length > 10){ 
				maxNumber = 10 // Limit to 10 (game default)
			}
            // If no more than 10
			else{
				maxNumber = car.length;
			}

            // Choose the user's car data randomly to appear
			while(arr.length < maxNumber)
			{ 
                // Pick random car Id
				let randomNumber: number = Math.floor(Math.random() * car.length);
				if(arr.indexOf(randomNumber) === -1){

                    // Push current number to array
					arr.push(randomNumber); 

                    // Check if ghost trail for certain car is available
					let ghost_trails = await prisma.ghostTrail.findFirst({
						where: {
							carId: car[randomNumber].carId,
							area: body.area,
							crownBattle: false
						},
						orderBy: {
							playedAt: 'desc'
						}
					});

                    // If regionId is 0 or not set, game will crash after defeating the ghost
					if(car[randomNumber]!.regionId === 0)
					{ 
						let randomRegionId = Math.floor(Math.random() * 47) + 1;
						car[randomNumber].regionId = randomRegionId;
					}

                    // Push user's car data without ghost trail
					if(!(ghost_trails)){ 
						lists_ghostcar.push(wm.wm.protobuf.GhostCar.create({
							car: car[randomNumber]
						}));
					}
                    // Push user's car data with ghost trail
					else{

                        // Set the tunePower used when playing certain area
						car[randomNumber].tunePower = ghost_trails!.tunePower;

                        // Set the tuneHandling used when playing certain area
						car[randomNumber].tuneHandling = ghost_trails!.tuneHandling;

                        // Push data to Ghost car proto
						lists_ghostcar.push(wm.wm.protobuf.GhostCar.create({
							car: car[randomNumber],
							nonhuman: false,
							type: wm.wm.protobuf.GhostType.GHOST_NORMAL,
							trailId: ghost_trails!.dbId!
						}));
					}
				}
			}

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				ramp: rampVal,
				path: pathVal,
				ghosts: lists_ghostcar,
				selectionMethod: Number(wm.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_LEVEL)
			};

			// Encode the response
            let message = wm.wm.protobuf.SearchCarsByLevelResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
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
				if(ghost_trails?.driveData !== null && ghost_trails?.driveData !== undefined){
					lists_binarydriveData = wm.wm.protobuf.BinaryData.create({
						data: ghost_trails!.driveData!,
						mergeSerial: ghost_trails!.driveDMergeSerial!
					});
				}

				let lists_binaryByArea
				if(ghost_trails?.trendBinaryByArea !== null && ghost_trails?.trendBinaryByArea !== undefined){
					lists_binaryByArea = wm.wm.protobuf.BinaryData.create({
						data:  ghost_trails!.trendBinaryByArea!,
						mergeSerial: ghost_trails!.byAreaMergeSerial!
					});
				}

				let lists_binaryByCar
				if(ghost_trails?.trendBinaryByCar !== null && ghost_trails?.trendBinaryByCar !== undefined){
					lists_binaryByCar = wm.wm.protobuf.BinaryData.create({
						data: ghost_trails!.trendBinaryByCar!,
						mergeSerial: ghost_trails!.byCarMergeSerial!
					});
				}

				let lists_binaryByUser
				if(ghost_trails?.trendBinaryByUser !== null && ghost_trails?.trendBinaryByUser !== undefined){
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
            common.sendResponse(message, res);
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
	
            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS
			}
			
			// Encode the response
            let message = wm.wm.protobuf.RegisterGhostTrailResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
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
            common.sendResponse(message, res);
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
				if(j === 0){ // GID_RUNAREA_C1
					rampVal = Math.floor(Math.random() * 4);
					pathVal = Math.floor(Math.random() * 10);
				}
				else if(j === 1){ // GID_RUNAREA_RING
					rampVal = Math.floor(Math.random() * 2) + 4;
					pathVal = Math.floor(Math.random() * 6) + 10;
				}
				else if(j === 2){ // GID_RUNAREA_SUBTOKYO_3_4
					rampVal = Math.floor(Math.random() * 2) + 6;
					pathVal = Math.floor(Math.random() * 2) + 16;
				}
				else if(j === 3){ // GID_RUNAREA_SUBTOKYO_5
					rampVal = Math.floor(Math.random() * 2) + 8;
					pathVal = Math.floor(Math.random() * 2) + 18;
				}
				else if(j === 4){ // GID_RUNAREA_WANGAN
					rampVal = Math.floor(Math.random() * 4) + 10;
					pathVal = Math.floor(Math.random() * 7) + 20;
				}
				else if(j === 5){ // GID_RUNAREA_K1
					rampVal = Math.floor(Math.random() * 4) + 14;
					pathVal = Math.floor(Math.random() * 7) + 27;
				}
				else if(j === 6){ // GID_RUNAREA_YAESU
					rampVal = Math.floor(Math.random() * 3) + 18;
					pathVal = Math.floor(Math.random() * 4) + 34;
				}
				else if(j === 7){ // GID_RUNAREA_YOKOHAMA
					rampVal = Math.floor(Math.random() * 4) + 21;
					pathVal = Math.floor(Math.random() * 11) + 38;
				}
				else if(j === 8){ // GID_RUNAREA_NAGOYA
					rampVal = 25;
					pathVal = 49;
				}
				else if(j === 9){ // GID_RUNAREA_OSAKA
					rampVal = 26;
					pathVal = Math.floor(Math.random() * 4) + 50;
				}
				else if(j === 10){ // GID_RUNAREA_KOBE
					rampVal = Math.floor(Math.random() * 2) + 27;
					pathVal = Math.floor(Math.random() * 2) + 54;
				}
				else if(j === 11){ // GID_RUNAREA_FUKUOKA
					rampVal = Math.floor(Math.random() * 4) + 29;
					pathVal = Math.floor(Math.random() * 4) + 58;
				}
				else if(j === 12){ // GID_RUNAREA_HAKONE
					rampVal = Math.floor(Math.random() * 2) + 33;
					pathVal = Math.floor(Math.random() * 2) + 62;
				}
				else if(j === 13){ // GID_RUNAREA_TURNPIKE
					rampVal = Math.floor(Math.random() * 2) + 35;
					pathVal = Math.floor(Math.random() * 2) + 64;
				}
				//14 - 16 are dummy area, 17 is GID_RUNAREA_C1_CLOSED
				else if(j === 18){ // GID_RUNAREA_HIROSHIMA
					rampVal = Math.floor(Math.random() * 2) + 37;
					pathVal = Math.floor(Math.random() * 2) + 56;
				}

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
            common.sendResponse(message, res);
		})


        // idk what this is this for
        app.post('/method/lock_crown', (req, res) => {

            // Response data
            let msg = {
				error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
			};

            // Encode the response
			let message = wmsrv.wm.protobuf.LockCrownResponse.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res);
        })
    }
}