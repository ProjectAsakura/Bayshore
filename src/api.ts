import express, { Application } from "express";
import { prisma } from ".";
import { Module } from "./module";


export default class ApiModule extends Module {
    register(app: Application): void {
        
        app.use(express.urlencoded({
            type: '*/*',
            extended: true
        }));
    

        app.use(express.json({
            type: '*/*'
        }));


        // API Get Requests
        // Get Current Bayshore Version
        app.get('/api/bayshore_version', async (req, res) => {
            let message: any = {
                error: null,
                version: null
            };

            message.version = 'v1.0.0';

            // Send the response to the client
            res.send(message);
        })

        // Post Login
        app.post('/api/login', async (req, res) => {

            // Get the request body
			let query = req.query;

            // Message Response
            let message: any = {
                error: null,
                user: null
            };

            // Get the user from the database
			let user = await prisma.user.findFirst({
				where: {
					chipId: query.cardChipId?.toString(),
					accessCode: query.accessCode?.toString()
				},
				include: {
					cars: {
						select: {
							state: true,
							gtWing: true,
							lastPlayedPlace: true,
                            carId: true, 
                            name: true,
                            defaultColor: true,
                            visualModel: true, 
                            level: true, 
                            title: true, 
                            regionId: true, 
                        }
					}
				}
			});
            
            if(user)
            {
                message.user = user;
            }
            else
            {
                message.error = 404
            }

            // Send the response to the client
            res.send(message);
        })


        // Get Current Competition Id
        app.get('/api/get_competition_id', async (req, res) => {

            // Get current date
            let date = Math.floor(new Date().getTime() / 1000);

            // Message Response
            let message: any = {
                error: null,
                competitionId: 1 // default
            };

            // Get current / previous active OCM Event
            let ocmEventDate = await prisma.oCMEvent.findFirst({
                where: {
					// qualifyingPeriodStartAt is less than current date
					qualifyingPeriodStartAt: { lte: date },
		
					// competitionEndAt is greater than current date
					competitionEndAt: { gte: date },
				},
                orderBy: [
                    {
                        dbId: 'desc'
                    },
                    {
                        competitionEndAt: 'desc',
                    },
                ],
                select:{
                    competitionId: true
                }
            });

            if(ocmEventDate)
            {
                message.competitionId = ocmEventDate.competitionId;
            }
            else{
                ocmEventDate = await prisma.oCMEvent.findFirst({
                    orderBy: {
                        dbId: 'desc'
                    },
                    select:{
                        competitionId: true
                    }
                });

                message.competitionId = ocmEventDate!.competitionId;
            }

            // Send the response to the client
            res.send(message);
        });


        // Get Competition Ranking
        app.get('/api/get_competition_ranking', async (req, res) => {

            // Get url query
            let competitionId = Number(req.query.competitionId);

            // Message Response
            let message: any = {
                error: null,
                cars: [],
                lastPlayedPlace: 'Bayshore'
            };
 
            // Get all of the cars matching the query
            message.cars = await prisma.oCMTally.findMany({
                where:{
                    competitionId: competitionId
                },
                orderBy: {
                    result: 'desc'
                },
                include:{
                    car: {
                        select:{
                            carId: true, 
                            name: true,
                            defaultColor: true,
                            visualModel: true, 
                            level: true, 
                            title: true, 
                            regionId: true, 
                        }  
                    },
                }
            });

            let getLastPlayedPlace = await prisma.placeList.findFirst({
                where:{
                    id: message.cars[0].lastPlayedPlace
                }
            })

            message.lastPlayedPlace = getLastPlayedPlace?.shopName;

            // Send the response to the client
            res.send(message);
        });
    }
}