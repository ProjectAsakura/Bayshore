import e, { Application } from "express";
import { Config } from "../config";
import { Module } from "module";
import { prisma } from "..";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as scratch from "../util/scratch";
import * as common from "../util/common";


export default class UserModule extends Module {
    register(app: Application): void {

        // Load user data when entering the game or after tapping the bannapass card
		app.post('/method/load_user', async (req, res) => {

            // Get the request body for the load user request
			let body = wm.wm.protobuf.LoadUserRequest.decode(req.body);

            // Get the user from the database
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
					transferState: wm.wm.protobuf.TransferState.NOT_REGISTERED,
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
							true, //TUTORIAL_ID_MULTI_GHOST
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

			// If the car order array has not been created
			if (user.carOrder.length > 0)
			{
				// Sort the player's car list using the car order property
				user.cars = user.cars.sort(function(a, b){

					// User, and both car IDs exist
					if (user)
					{
						// Compare both values using the car order array
						let compare: number = user?.carOrder.indexOf(a!.carId) - user?.carOrder.indexOf(b!.carId);

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


			// Error handling if windowStickerString and windowStickerFont is undefined or null
			// User is registering bannapass from terminal unit first instead of driver unit
			// Default value for windowStickerString and windowStickerFont
			let wsString = 'ＷＡＮＧＡＮ';
			let wsFont = 0;

			// user.cars found
			if(user.cars)
			{
				// User atleast have 1 car
				if(user.cars[0]?.windowStickerString !== null && user.cars[0]?.windowStickerString !== undefined && 
					user.cars[0]?.windowStickerString !== '')
				{
					wsString = user.cars[0].windowStickerString;
					wsFont = user.cars[0].windowStickerFont;
				}
				// else{} User don't have a car... returning default windowStickerString and windowStickerFont value
			}

            // Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
				numOfOwnedCars: user.cars.length,
				spappState: wm.wm.protobuf.SmartphoneAppState.SPAPP_UNREGISTERED,
				transferState: wm.wm.protobuf.TransferState.TRANSFERRED,
				carStates,
				userId: user.id,
				banapassportAmId: 1,
				mbId: 1,
				tutorials: user.tutorials,
				unusedCarTickets: tickets,

				// 5 cars in-game, 200 cars on terminal
				cars: user.cars.slice(0, body.maxCars), 

				// Set the window sticker string for all cars 
				windowStickerString: wsString, 

				// Set the window sticker font for all cars 
				windowStickerFont: wsFont,

				// Set initial value for competition (OCM) participation
				competitionUserState: wm.wm.protobuf.GhostCompetitionParticipantState.COMPETITION_NOT_PARTICIPATED
			}

			
			// Check OCM Participation
			let ParticipationMainDrawCounter = 0;
			let ParticipationQualifyingCounter = 0;
			let ParticipationEndedCounter = 0;

			// Get current date
			let date = Math.floor(new Date().getTime() / 1000);
			
			// Check each car record
			for(let i=0; i<msg.cars.length; i++)
			{
				// Get current active OCM Event
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
				
				// Check Competition (OCM) Participation, and available OCM event
				if(user.cars.length > 0 && ocmEventDate)
				{
					// Current date is OCM main draw
					if(ocmEventDate!.competitionStartAt < date && ocmEventDate!.competitionCloseAt > date)
					{ 
						// Check ghost battle record
						let checkParticipation = await prisma.oCMPlayRecord.findFirst({
							where:{
								carId: user.cars[i].carId,
								competitionId: ocmEventDate!.competitionId
							}
						});

						// Record found
						if(checkParticipation)
						{
							ParticipationMainDrawCounter++
						}

						// Check Car State
						// Get OCM Data
						let ocmTallyRecord = await prisma.oCMTally.findMany({ 
							orderBy: [
								{
									dbId: 'asc',
								},
								{
									competitionId: 'desc',
								},
								{
									periodId: 'desc',
								},
								{
									result: 'desc',
								},
							],
						});

						for(let j=0; j<ocmTallyRecord.length; j++)
						{
							if(carStates[i].dbId === ocmTallyRecord[j].carId)
							{
								carStates[i].eventJoined = true;
								carStates[i].competitionState = wm.wm.protobuf.GhostCompetitionParticipantState.COMPETITION_QUALIFIED
							}
							if(carStates[i].dbId === ocmTallyRecord[j].carId && j === 0)
							{
								carStates[i].competitionState = wm.wm.protobuf.GhostCompetitionParticipantState.COMPETITION_WON
							}
						}
					}
					// Current date is OCM qualifying day
					else if(ocmEventDate!.qualifyingPeriodStartAt < date && ocmEventDate!.qualifyingPeriodCloseAt > date)
					{ 
						// Check ghost battle record
						let checkParticipation = await prisma.oCMPlayRecord.findFirst({
							where:{
								carId: user.cars[i].carId,
								competitionId: ocmEventDate!.competitionId
							}
						});

						// Record found
						if(checkParticipation)
						{
							ParticipationQualifyingCounter++
						}

						// Check Car State
						let ocmRecord = await prisma.oCMPlayRecord.findMany({ 
							orderBy: [
								{
									dbId: 'asc',
								},
								{
									competitionId: 'desc',
								},
								{
									periodId: 'desc',
								},
							],
						});

						for(let j=0; j<ocmRecord.length; j++)
						{
							if(carStates[i].dbId === ocmRecord[j].carId)
							{
								carStates[i].eventJoined = true;
								carStates[i].competitionState = wm.wm.protobuf.GhostCompetitionParticipantState.COMPETITION_PARTICIPATED
							}
						}
					}
					// Current date is OCM ended
					else if(ocmEventDate!.competitionCloseAt < date && ocmEventDate!.competitionEndAt > date)
					{ 
						// Check ghost battle record
						let checkParticipation = await prisma.oCMPlayRecord.findFirst({
							where:{
								carId: user.cars[i].carId,
								competitionId: ocmEventDate!.competitionId
							}
						});

						// Record found
						if(checkParticipation)
						{
							ParticipationEndedCounter++
						}
					}
				}
			}

			// Participated to OCM Event
			if(ParticipationMainDrawCounter > 0)
			{
				console.log('OCM Participation : '+ParticipationMainDrawCounter+' car(s) Qualified');
				msg.competitionUserState = wm.wm.protobuf.GhostCompetitionParticipantState.COMPETITION_QUALIFIED;
			}
			else if(ParticipationQualifyingCounter > 0)
			{
				console.log('OCM Participation : '+ParticipationQualifyingCounter+' car(s) Participated');
				msg.competitionUserState = wm.wm.protobuf.GhostCompetitionParticipantState.COMPETITION_PARTICIPATED;
			}
			else if(ParticipationEndedCounter > 0)
			{
				console.log('OCM Participation : '+ParticipationEndedCounter+' car(s) played OCM Event');
			}
			else{
				console.log('OCM Participation : Not Participated / Qualified');
			}

            // Response data if user is banned
			if (user.userBanned) {
				msg.error = wm.wm.protobuf.ErrorCode.ERR_ID_BANNED;
			}

            // Encode the response
			let message = wm.wm.protobuf.LoadUserResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
		})


        // Create User Request
        app.post('/method/create_user', async (req, res) => {

			// This request is sent by the terminal when you
			// select 'yes' to register on the starting menu
			// if you have not created your account yet.

			// However, we don't really need to process it as 
			// the load_user command already creates the user.
			// we do, however need to send a valid response 
			// otherwise the terminal crashes.

			// Get the request body for the create user request
			let body = wm.wm.protobuf.CreateUserRequest.decode(req.body);

			// Get the user info via the card chip id
			let user = await prisma.user.findFirst({
				where: {
					chipId: body.cardChipId,
					accessCode: body.accessCode
				}
			});

			// Message object
			let msg;

			// User exists
			if (user)
			{
                msg = {
                    // Success error message
                    error : wm.wm.protobuf.ErrorCode.ERR_SUCCESS,

                    // User's user id
                    userId : user?.id
                }
			}
			else // User does not exist
			{
                msg = {
                    // User not found error message
                    error : wm.wm.protobuf.ErrorCode.ERR_NOT_FOUND, 

                    // No user id
                    userId : 0
                }
			}

			// Generate the response for the create user request
			let message = wm.wm.protobuf.CreateUserResponse.encode(msg);

            // Send response to client
            common.sendResponse(message, res);
		});


        // Load Drive Information
        app.post('/method/load_drive_information', async (req, res) => {

            // Get the request body for the load drive information request
			let body = wm.wm.protobuf.LoadDriveInformationRequest.decode(req.body);
			
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

            // TODO: Add notices to config
			let notice = (Config.getConfig().notices || []);

            // Create the notice window objects
			let noticeWindows = notice.map(a => wm.wm.protobuf.NoticeEntry.NOTICE_UNUSED_1);

            // Response data
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

            // Encode the response
            let message = wm.wm.protobuf.LoadDriveInformationResponse.encode(msg);
            
            // Send the response to the client
            common.sendResponse(message, res);
        })

        
        // Update User Session
		app.post('/method/update_user_session', (req, res) => {

			// Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
            }

			// Encode the response
            let message = wm.wm.protobuf.UpdateUserSessionResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
        })


        /*
        // Start Transfer
        app.post('/method/start_transfer', (req, res) => {

        });


        // Grant Car Right
        app.post('/method/grant_car_right', (req, res) => {

        });


        // Ask Access Code
        app.post('/method/ask_access_code', (req, res) => {

        });

        
        // Participate In Invite Friend Campaign
        app.post('/method/participate_in_invite_friend_campaign', (req, res) => {

        });
        */
    }
}