import { Application } from "express";
import { Module } from "module";
import { prisma } from "..";
import { Car, CarGTWing } from "@prisma/client";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";
import * as ghost_ocm from "../util/games/ghost_ocm";
import * as ghost_ocm_area from "../util/games/games_util/ghost_ocm_area";
import { Config } from "../config";


export default class GhostModule extends Module {
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
                    OR: [
                        {
							// qualifyingPeriodStartAt is less than current date
							qualifyingPeriodStartAt: { lte: date },

							// qualifyingPeriodCloseAt is greater than current date
							qualifyingPeriodCloseAt: { gte: date },
						},
						{ 
							// competitionStartAt is less than current date
							competitionStartAt: { lte: date },

							// competitionCloseAt is greater than current date
							competitionCloseAt: { gte: date },
						},
                        {
							// competitionCloseAt is less than current date 
							competitionCloseAt: { lte: date },

							// competitionEndAt is greater than current date
							competitionEndAt: {gte: date },
						}
                    ],
                },
                orderBy:{
                    dbId: 'desc'
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
					while(competitionPeriodStartTimestamp < ocmEventDate.competitionEndAt)
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
							competitionDbId: ocmEventDate!.dbId,
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
								periodId: OCMCurrentPeriod.periodId
							},
							orderBy:{
								periodId: 'desc'
							}
						});

						// If not yet tallying
						if(OCMTallyCount === 0)
						{ 
							console.log('Tallying');

							await ghost_ocm.ocmTallying(body, OCMCurrentPeriod.periodId + 1, true);

							// Completed
							console.log('Last Tally Completed!');
						}
						// Tallied
						else
						{
							// Checking if nameplate reward is given
							let checkOneParticipant = await prisma.oCMPlayRecord.findFirst({
								orderBy:{
									dbId: 'asc'
								}
							});

							if(checkOneParticipant)
							{
								let itemId = 0;
								// 16th - C1
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
								// 6th - C1
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

								let checkNameplate = await prisma.carItem.count({
									where:{
										category: 17,
										itemId: itemId
									},
									orderBy:{
										itemId: 'desc'
									}
								});
								

								if(checkNameplate === 0)
								{
									console.log('Giving OCM Rewards');

									await ghost_ocm.ocmGiveNamePlateReward(ocmEventDate.competitionId);

									console.log('OCM Rewards Given');
								}

								// else{} nameplate reward already given
							}
						}
					}

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
            common.sendResponse(message, res);
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
                    OR: [
                        {
							// qualifyingPeriodStartAt is less than current date
							qualifyingPeriodStartAt: { lte: date },

							// qualifyingPeriodCloseAt is greater than current date
							qualifyingPeriodCloseAt: { gte: date },
						},
						{ 
							// competitionStartAt is less than current date
							competitionStartAt: { lte: date },

							// competitionCloseAt is greater than current date
							competitionCloseAt: { gte: date },
						},
                        {
							// competitionCloseAt is less than current date 
							competitionCloseAt: { lte: date },

							// competitionEndAt is greater than current date
							competitionEndAt: {gte: date },
						}
                    ],
                },
                orderBy:{
                    dbId: 'desc'
                }
            });

			// Declare variable for Top 1 OCM Ghost
			let ghostCars: wm.wm.protobuf.GhostCar;
			let ghostTypes;
			let cars: wm.wm.protobuf.ICar | (Car & { gtWing: CarGTWing; }) | null;
			let playedPlace = wm.wm.protobuf.Place.create({ 
				placeId: 'JPN0123',
				shopName: Config.getConfig().shopName,
				regionId: 18,
				country: 'JPN'
			});

			// Get default trail id
			let ghostTrailId = 0;

            // Current date is OCM main draw
			if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
			{ 
				console.log('OCM Competition Day / Main Draw');

				// --- Tally (still not complete) ---
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
						area: areaVal,
						ramp: rampVal,
						path: pathVal,
					},
					orderBy:{
						playedAt: 'desc'
					},
				});
				// ----------------------------------

                // Top 1 OCM Ghost trail data available
				if(checkGhostTrail)
				{ 
                    // Get the Top 1 OCM car data
					cars = await prisma.car.findFirst({ 
						where:{
							carId: checkGhostTrail!.carId
						},
						include:{
							gtWing: true
						}
					});

					// If regionId is 0 or not set, game will crash after defeating the ghost
					if(cars!.regionId === 0)
					{
						let randomRegionId = Math.floor(Math.random() * 47) + 1;
						cars!.regionId = randomRegionId;
					}

                    // Set the tunePower used when playing ghost crown
					cars!.tunePower = ocmTallyRecord!.tunePower; 

                    // Set the tuneHandling used when playing ghost crown
					cars!.tuneHandling = ocmTallyRecord!.tuneHandling;

					// Set Ghost stuff Value
					cars!.lastPlayedAt = checkGhostTrail.playedAt
					ghostTrailId = checkGhostTrail.dbId!;
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
						area: areaVal,
						ramp: rampVal,
						path: pathVal,
						competitionId: ocmEventDate!.competitionId,
						periodId: 0
					},
					orderBy:{
						playedAt: 'desc'
					}
				});

				// Generate default S660 car data
				cars = wm.wm.protobuf.Car.create({ 
					carId: 999999999,
					name: 'Ｓ６６０',
					regionId: 18, // IDN (福井)
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
					windowStickerString: 'ＢＡＹＳＨＯＲＥ', // ＧＧＷＰ
					windowStickerFont: 0,
					title: 'You don\'t have S660? LMAO',
					level: 65, // SSSSS
					lastPlayedAt: checkGhostTrail!.playedAt,
					
				});
				
				// Set Ghost stuff Value
				ghostTrailId = checkGhostTrail!.dbId!;
				ghostTypes = wm.wm.protobuf.GhostType.GHOST_NORMAL;
			}

			// Push the Top 1 OCM ghost car data
			ghostCars = wm.wm.protobuf.GhostCar.create({ 
				car: {
					...cars!,
					lastPlayedPlace: playedPlace
				},
				area: areaVal,
				ramp: rampVal,
				path: pathVal,
				nonhuman: false,
				type: ghostTypes,
				trailId: ghostTrailId
			});

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				competitionId: competition_id,
				ghostCar: ghostCars!,
				trailId: ghostTrailId,
				updatedAt: date
			};

            // Encode the response
			let message = wm.wm.protobuf.GhostCompetitionTarget.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
		})
    }
}