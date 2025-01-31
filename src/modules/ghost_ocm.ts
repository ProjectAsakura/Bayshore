import { Application } from "express";
import { Module } from "module";
import { prisma } from "..";
import { Config } from "../config";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "./util/common";
import * as ghost_ocm from "./ghost/ghost_ocm";
import * as ghost_ocm_area from "./ghost/ghost_util/ghost_ocm_area";


export default class GhostModule {
    register(app: Application): void {

        // Get OCM Battle event info
		app.post('/method/load_ghost_competition_info', async (req, res) => {

            // Get the request body for the load stamp target request
			let body = wm.wm.protobuf.LoadGhostCompetitionInfoRequest.decode(req.body);

            // Get current date
			let date = Math.floor(new Date().getTime() / 1000);

            // Get currently active OCM event (query still not complete)
			let ocmEventDate = await prisma.oCMEvent.findFirst({ 
				where: {
					// qualifyingPeriodStartAt is less than current date
					qualifyingPeriodStartAt: { lte: date },
		
					// competitionEndAt is greater than current date
					competitionEndAt: { gte: date },
				},
                orderBy:{
                    competitionId: 'desc'
                }
            });
			
			let msg: any;
			if(ocmEventDate)
			{
				// Check OCM Period
				let ocmPeriodCount = await prisma.oCMPeriod.count({ 
					where:{
						competitionId: ocmEventDate.competitionId
					}
				});
				
				if(ocmPeriodCount === 0)
				{
					console.log('Calculating how many period(s) are available');

					let competitionPeriodStartTimestamp = ocmEventDate.competitionStartAt;
					let competitionPeriodEndTimeStamp = 0;
					let period = 1;

					// Count how many period
					while(competitionPeriodStartTimestamp < ocmEventDate.competitionCloseAt)
					{
						
						// Count period closing timestamp
						competitionPeriodEndTimeStamp = competitionPeriodStartTimestamp + ocmEventDate.lengthOfPeriod;

						// competitionPeriodEndTimeStamp is more than competitionCloseAt
						if(competitionPeriodEndTimeStamp > ocmEventDate.competitionCloseAt)
						{
							competitionPeriodEndTimeStamp = ocmEventDate.competitionCloseAt;
						}

						// Insert to table
						await prisma.oCMPeriod.create({
							data:{
								competitionDbId: ocmEventDate.dbId,
								competitionId: ocmEventDate.competitionId,
								periodId: period,
								startAt: competitionPeriodStartTimestamp,
								closeAt: competitionPeriodEndTimeStamp
							}
						});

						period++;
						competitionPeriodStartTimestamp = competitionPeriodEndTimeStamp + ocmEventDate.lengthOfInterval;
					}

					// Check the gap between quali close and main draw start timestamp
					let checkQualiMainGap = ocmEventDate.competitionStartAt - ocmEventDate.qualifyingPeriodCloseAt;
					if(checkQualiMainGap < 3600)
					{
						let changeTime = ocmEventDate.competitionStartAt - 3600;
						await prisma.oCMEvent.update({
							where:{
								dbId: ocmEventDate.dbId
							},
							data:{
								qualifyingPeriodCloseAt: changeTime
							}
						})
					}

					console.log('Calculating Period Completed!');
				}

				// Current date is OCM main draw
				if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
				{
					console.log('Current OCM Day : Competition Day / Main Draw');

					// Get Current OCM Period
					let OCMCurrentPeriod = await prisma.oCMPeriod.findFirst({ 
						where: {
							competitionDbId: ocmEventDate!.dbId,
							competitionId: ocmEventDate!.competitionId,
							startAt: 
							{
								lte: date, // competitionStartAt is less than current date
							},
							closeAt:
							{
								gte: date, // competitionCloseAt is greater than current date
							}
						}
					});

					if(OCMCurrentPeriod)
					{
						// Get OCM Tally Count
						let OCMTallyCount = await prisma.oCMTally.count({ 
							where: {
								competitionId: OCMCurrentPeriod.competitionId,
								periodId: OCMCurrentPeriod.periodId
							},
							orderBy:{
								periodId: 'desc'
							}
						});

						// If not yet tallying
						if(OCMTallyCount === 0)
						{ 
							await ghost_ocm.ocmTallying(body, OCMCurrentPeriod.periodId, false);

							// Completed
							console.log('Tally Completed!');
						}

						// Get Competition Day Event Data for the car
						let ocmCompetitionDay = await ghost_ocm.ocmCompetitionDay(body, OCMCurrentPeriod!.competitionId, OCMCurrentPeriod!.periodId);

						// Response Data
						msg = ocmCompetitionDay.msg;
					}
					else
					{
						// Response data
						msg = {
							error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
							closed: true,
							qualified: false, // if this set to false, user cannot enter OCM Battle game mode
						};
					}
				}
				// Current date is OCM qualifying day
				else if(ocmEventDate!.qualifyingPeriodStartAt < date && ocmEventDate!.qualifyingPeriodCloseAt > date)
				{ 
					console.log('Current OCM Day : Qualifying Day');

					// Get Competition Day Event Data for the car
					let ocmCompetitionDay = await ghost_ocm.ocmQualifyingDay(body, ocmEventDate.competitionId);

					// Response Data
					msg = ocmCompetitionDay.msg;
				}
				// OCM has ended
				else if(ocmEventDate!.competitionCloseAt < date && ocmEventDate!.competitionEndAt > date)
				{
					console.log('Current OCM Day : OCM has Ended');

					// Tallying
					// Get Current OCM Period
					let OCMCurrentPeriod = await prisma.oCMPeriod.findFirst({ 
						where: {
							competitionId: ocmEventDate!.competitionId
						},
						orderBy: {
							periodId: 'desc'
						}
					});

					if(OCMCurrentPeriod)
					{
						// Get OCM Tally Count
						let OCMTallyCount = await prisma.oCMTally.count({ 
							where: {
								competitionId: OCMCurrentPeriod.competitionId,
								periodId: 999999999
							},
							orderBy:{
								periodId: 'desc'
							}
						});

						// If not yet tallying
						if(OCMTallyCount === 0)
						{ 
							console.log('Tallying');

							await ghost_ocm.ocmTallying(body, OCMCurrentPeriod.periodId, true);

							// Completed
							console.log('Last Tally Completed!');
						}

						
						// Checking if nameplate reward is given
						let checkOneParticipant = await prisma.oCMPlayRecord.findFirst({
							orderBy:{
								dbId: 'desc'
							}
						});

						if(checkOneParticipant)
						{
							let itemId = 0;

							// 16th - C1 Outbound
							if(ocmEventDate.competitionId === 1)
							{
								itemId = 204;
							}
							// 17th - Osaka
							else if(ocmEventDate.competitionId === 2)
							{
								itemId = 210;
							}
							// 18th - Fukuoka
							else if(ocmEventDate.competitionId === 3)
							{
								itemId = 216;
							}
							// 19th - Nagoya
							else if(ocmEventDate.competitionId === 4)
							{
								itemId = 222;
							}
							// 6th - C1 Inbound
							else if(ocmEventDate.competitionId === 5) 
							{
								itemId = 35;
							}
							// 20th - Kobe
							else if(ocmEventDate.competitionId === 6) 
							{
								itemId = 228;
							}
							// 7th - Fukutoshin
							else if(ocmEventDate.competitionId === 7) 
							{
								itemId = 41;
							}
							// 21st - Hiroshima
							else if(ocmEventDate.competitionId === 8) 
							{
								itemId = 234;
							}
							// 8th - Hakone
							else if(ocmEventDate.competitionId === 9) 
							{
								itemId = 47;
							}
							// 1st - C1 Outbound
							else if(ocmEventDate.competitionId === 10) 
							{
								itemId = 5;
							}
							// 2nd - Osaka
							else if(ocmEventDate.competitionId === 11) 
							{
								itemId = 11;
							}
							// 3rd - Fukuoka
							else if(ocmEventDate.competitionId === 12) 
							{
								itemId = 17;
							}
							// 4th - Nagoya
							else if(ocmEventDate.competitionId === 13) 
							{
								itemId = 23;
							}
							// 5th - Yaesu
							else if(ocmEventDate.competitionId === 14) 
							{
								itemId = 29;
							}
							// 9th - Hakone (Mt. Taikan)
							else if(ocmEventDate.competitionId === 15) 
							{
								itemId = 53;
							}
							// 10th - Sub-center(Shibuya/Shinjuku)
							else if(ocmEventDate.competitionId === 16) 
							{
								itemId = 93;
							}
							// 11th - Sub-center(Ikebukuro)
							else if(ocmEventDate.competitionId === 17) 
							{
								itemId = 99;
							}
							// 12th - Kobe
							else if(ocmEventDate.competitionId === 18) 
							{
								itemId = 105;
							}
							// 13th - New Belt Line
							else if(ocmEventDate.competitionId === 19) 
							{
								itemId = 141;
							}
							// 14th - Yokohama
							else if(ocmEventDate.competitionId === 20) 
							{
								itemId = 147;
							}
							// 15th - Hiroshima
							else if(ocmEventDate.competitionId === 21) 
							{
								itemId = 153;
							}

							let checkNameplate = await prisma.carItem.count({
								where:{
									carId: checkOneParticipant.carId,
									category: 17,
									itemId: itemId
								},
								orderBy:{
									itemId: 'desc'
								}
							});
							

							if(checkNameplate === 0)
							{
								await ghost_ocm.ocmGiveNamePlateReward(ocmEventDate.competitionId);
							}

							// else{} nameplate reward already given
						}
					}

					// Response data
					msg = {
						error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
						closed: true
					};
				}
				else
				{
					// Response data
					msg = {
						error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
						closed: true
					};
				}
			}
			// No OCM Event
			else{
				msg = {
					error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
					closed: true
				};
			}
            
            // Encode the response
			let message = wm.wm.protobuf.LoadGhostCompetitionInfoResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})


        // Get the Top 1 OCM Ghost for qualifying day and competition day (this still not completed)
		app.get('/resource/ghost_competition_target', async (req, res) => {

            // Get url query parameter (competition_id)
			let competition_id = Number(req.query.competition_id);

			// Calling OCM Area function (BASE_PATH/src/util/games/games_util/ghost_ocm.ts)
			let OCMArea = await ghost_ocm_area.OCMArea(competition_id);

			// Set the value from OCMArea
			let areaVal: number = OCMArea.areaVal;
			let rampVal: number = OCMArea.rampVal;
			let pathVal: number = OCMArea.pathVal;

            // Get url query parameter (period_id)
			let period_id = Number(req.query.period_id); 

            // Get current date
			let date = Math.floor(new Date().getTime() / 1000);

            // Get currently active OCM event
			let ocmEventDate = await prisma.oCMEvent.findFirst({ 
                where: {
					// qualifyingPeriodStartAt is less than current date
					qualifyingPeriodStartAt: { lte: date },
		
					// competitionEndAt is greater than current date
					competitionEndAt: { gte: date },
				},
                orderBy:{
                    competitionId: 'desc'
                }
            });

			if(!(ocmEventDate))
			{
				ocmEventDate = await prisma.oCMEvent.findFirst({
                    orderBy:{
                        competitionId: 'desc'
                    },
                });
			}

			// Declare variable for Top 1 OCM Ghost
			let ghostCars: wm.wm.protobuf.GhostCar;
			let ghostTypes;
			let cars: wm.wm.protobuf.ICar | null;
			let playedPlace = wm.wm.protobuf.Place.create({ 
				placeId: Config.getConfig().placeId,
                regionId: Config.getConfig().regionId,
                shopName: Config.getConfig().shopName,
                country: Config.getConfig().country
			});
			let competitionSchedule;

			// Get default trail id
			let ghostTrailId = 0;

            // Current date is OCM main draw
			if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
			{
				console.log('OCM Competition Day / Main Draw');

                // Get Top 1 qualifying car data
				let ocmTallyRecord = await prisma.oCMTop1Ghost.findFirst({ 
					where:{
						competitionId: competition_id,
						periodId: period_id
					},
					orderBy:{
						result: 'desc'
					},
				});

                // Get Top 1 qualifying ghost trail id
				let checkGhostTrail = await prisma.oCMTop1GhostTrail.findFirst({ 
					where:{
						carId: ocmTallyRecord!.carId,
						competitionId: ocmEventDate!.competitionId,
						periodId: period_id,
					},
					orderBy:{
						playedAt: 'desc'
					},
				});

                // Top 1 OCM Ghost trail data available
				if(checkGhostTrail)
				{ 
                    // Get the Top 1 OCM car data
					cars = await prisma.car.findFirst({ 
						where:{
							carId: checkGhostTrail!.carId
						},
						include:{
							gtWing: true,
							lastPlayedPlace: true
						}
					});

                    // Set the tunePower used when playing ghost crown
					cars!.tunePower = ocmTallyRecord!.tunePower; 

                    // Set the tuneHandling used when playing ghost crown
					cars!.tuneHandling = ocmTallyRecord!.tuneHandling;

					// Set Ghost stuff Value
					cars!.lastPlayedAt = checkGhostTrail.playedAt
					ghostTrailId = checkGhostTrail.dbId!;
					areaVal = Number(checkGhostTrail.area);
					rampVal = Number(checkGhostTrail.ramp);
					pathVal = Number(checkGhostTrail.path);
					ghostTypes = wm.wm.protobuf.GhostType.GHOST_NORMAL;
				}
			}
            // Current date is OCM qualifying day
			else if(ocmEventDate!.qualifyingPeriodStartAt < date && ocmEventDate!.qualifyingPeriodCloseAt > date)
			{ 
				console.log('OCM Qualifying Day');

                // Get the default ghost trail
				let checkGhostTrail = await prisma.oCMTop1GhostTrail.findFirst({ 
					where:{
						carId: 999999999,
						competitionId: ocmEventDate!.competitionId,
						periodId: 0,
					},
					orderBy:{
						playedAt: 'desc'
					}
				});

				// Generate default S660 car data
				cars = wm.wm.protobuf.Car.create({ 
					carId: 999999999, // Don't change this
					name: 'Ｓ６６０',
					regionId: Math.floor(Math.random() * 47) + 1, // Random Region, old code -> // 18, // IDN (福井)
					manufacturer: 12, // HONDA
					model: 105, // S660 [JW5]
					visualModel: 130, // S660 [JW5]
					defaultColor: 0,
					customColor: 0,
					wheel: 20,
					wheelColor: 0,
					aero: 0,
					bonnet: 0,
					wing: 0,
					mirror: 0,
					neon: 0,
					trunk: 0,
					plate: 0,
					plateColor: 0,
					plateNumber: 0,
					tunePower: checkGhostTrail!.tunePower,
					tuneHandling: checkGhostTrail!.tuneHandling,
					rivalMarker: 32,
					aura: 551,
					windowSticker: true,
					windowStickerString: 'ＢＡＹＳＨＯＲＥ',
					windowStickerFont: 0,
					title: 'Don\'t have S660?',
					level: 65, // SSSSS
					lastPlayedAt: checkGhostTrail!.playedAt,
					country: 'JPN', // Change to JPN, old code -> 'IDN',
					lastPlayedPlace: playedPlace,
					ghostLevel: 10 // prevent 教育実習 title
				});
				
				// Set Ghost stuff Value
				ghostTrailId = checkGhostTrail!.dbId;
				areaVal = Number(checkGhostTrail!.area);
				rampVal = Number(checkGhostTrail!.ramp);
				pathVal = Number(checkGhostTrail!.path);
				ghostTypes = wm.wm.protobuf.GhostType.GHOST_NORMAL;
			}
			else if(ocmEventDate!.competitionCloseAt < date && ocmEventDate!.competitionEndAt > date)
			{ 
				// TODO: Actual stuff here
            	// This is literally just bare-bones so the shit boots
			}
			else
			{
				console.log('OCM has ended');

                // Get Top 1 qualifying car data
				let ocmTallyRecord = await prisma.oCMTop1Ghost.findFirst({ 
					where:{
						competitionId: competition_id,
						periodId: 999999999
					},
					orderBy:{
						result: 'desc'
					},
				});

                // Get Top 1 qualifying ghost trail id
				let checkGhostTrail = await prisma.oCMTop1GhostTrail.findFirst({ 
					where:{
						competitionId: competition_id,
						periodId: 999999999,
					},
					orderBy:{
						playedAt: 'desc'
					},
				});

                // Top 1 OCM Ghost trail data available
				if(checkGhostTrail)
				{ 
                    // Get the Top 1 OCM car data
					cars = await prisma.car.findFirst({ 
						where:{
							carId: checkGhostTrail!.carId
						},
						include:{
							gtWing: true,
							lastPlayedPlace: true
						}
					});

                    // Set the tunePower used when playing ghost crown
					cars!.tunePower = ocmTallyRecord!.tunePower; 

                    // Set the tuneHandling used when playing ghost crown
					cars!.tuneHandling = ocmTallyRecord!.tuneHandling;

					// Set Ghost stuff Value
					cars!.lastPlayedAt = checkGhostTrail.playedAt
					ghostTrailId = checkGhostTrail.dbId!;
					ghostTypes = wm.wm.protobuf.GhostType.GHOST_NORMAL;

					let checkShopName = await prisma.oCMGhostBattleRecord.findFirst({
						where:{
							carId: checkGhostTrail!.carId,
							competitionId: competition_id
						},
						select:{
							playedShopName: true
						}
					})

					if(checkShopName)
					{
						cars!.lastPlayedPlace!.shopName = checkShopName.playedShopName;
					}


					let ocmEventDate = await prisma.oCMEvent.findFirst({
						where:{
							competitionId: competition_id
						}
					});

					if(ocmEventDate)
					{
						// Creating GhostCompetitionSchedule
						competitionSchedule = wm.wm.protobuf.GhostCompetitionSchedule.create({ 

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
					}
				}
			}

			// Push the Top 1 OCM ghost car data
			ghostCars = wm.wm.protobuf.GhostCar.create({ 
				car: cars!,
				area: areaVal,
				ramp: rampVal,
				path: pathVal,
				nonhuman: false,
				type: ghostTypes,
				trailId: ghostTrailId,
			});

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				competitionId: competition_id,
				specialGhostId: competition_id,
				ghostCar: ghostCars,
				trailId: ghostTrailId,
				updatedAt: date,
				competitionSchedule: competitionSchedule || null
			};

            // Encode the response
			let message = wm.wm.protobuf.GhostCompetitionTarget.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})
    }
}