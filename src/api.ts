import express, { Application } from "express";
import { prisma } from ".";
import { Module } from "./module";
const cors = require('cors');


export default class ApiModule extends Module {
    register(app: Application): void {
        
        app.use(express.urlencoded({
            type: '*/*',
            extended: true
        }));
    

        app.use(express.json({
            type: '*/*'
        }));


        app.use(cors({
            origin: '*'
        }));


        // API Get Requests
        // Get Current Bayshore Version
        app.get('/api/bayshore_version', async (req, res) => {
            let message: any = {
                error: null,
                version: null
            };

            let myJSON = '{'+
                            '"version": "v1.0.0",'+
                            '"log":'+
                                '['+
                                    '"• Fix ghost play count when retiring ocm",'+
                                    '"• API for ocm ranking",'+
                                    '"• Fix unlimited ghost stamp return (hopefully no more of this)",'+
                                    '"• Fix give meter reward bug if playCount still 0",'+
                                    '"• Hopefully fix ocm HoF bug"'+
                                    '"• Fix duplicate id in carOrder"'+
                                    '"• Fix OCM HoF wrong shopName"'+
                                ']'+
                         '}';
            message.version = JSON.parse(myJSON);

            // Send the response to the client
            res.send(message);
        })

        // Post Login
        app.post('/api/login', async (req, res) => {

            // Get the request body
			let query = req.body;

            // Message Response
            let message: any = {
                error: null,
                user: null
            };

            // Get the user from the database
			let user = await prisma.user.findFirst({
				where: {
					chipId: {
                        startsWith: query.cardChipId.toString()
                    },
					accessCode: query.accessCode.toString()
				},
                select:{
                    id: true,
                    chipId: true
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


        // Get Lastest Competition Id
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


        // Get Lastest HoF Competition Id
        app.get('/api/get_hof_competition_id', async (req, res) => {

            // Message Response
            let message: any = {
                error: null,
                competitionId: 1 // default
            };

            // Get current / previous active OCM Event
            let ocmEventDate = await prisma.oCMTally.findFirst({
                where:{
                    periodId: 999999999
                },
                orderBy: {
                    competitionId: 'desc'
                },
                select:{
                    competitionId: true
                }
            });

            if(ocmEventDate)
            {
                message.competitionId = ocmEventDate.competitionId;
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

            let getLastPlayedPlace = await prisma.oCMGhostBattleRecord.findFirst({
                where:{
                    carId: message.cars[0].carId,
                    competitionId: competitionId
                }
            })

            message.lastPlayedPlace = getLastPlayedPlace?.playedShopName;

            // Send the response to the client
            res.send(message);
        });


        // Get Car List
        app.post('/api/get_carlist', async (req, res) => {

            // Get the request body
			let query = req.body;

            // Message Response
            let message: any = {
                error: null,
                cars: [],
                carsOrder: null,
            };

            let user = await prisma.user.findFirst({
                where:{
                    id: Number(query.userId),
                    chipId: query.cardChipId.toString()
                }
            })

            if(user)
            {
                // Get all of the cars matching the query
                message.cars = await prisma.car.findMany({
                    where:{
                        userId: Number(query.userId),
                    },
                    select:{
                        carId: true, 
                        name: true,
                        defaultColor: true,
                        visualModel: true, 
                        level: true, 
                        title: true, 
                        regionId: true, 
                    },
                    orderBy:{
                        carId: 'asc'
                    }
                });

                let getCarOrder = await prisma.user.findFirst({
                    where:{
                        id: Number(query.userId)
                    },
                    select:{
                        carOrder: true
                    },
                })

                message.carsOrder = getCarOrder?.carOrder;
            }

            // Send the response to the client
            res.send(message);
        })
    }
}