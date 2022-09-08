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
        // Get Current Competition Id
        app.get('/api/get_competition_id', async (req, res) => {

            // Get current date
            let date = Math.floor(new Date().getTime() / 1000);

            // Message Response
            let message: any = {
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

                // Send the response to the client
                res.send(message);
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

                // Send the response to the client
                res.send(message);
            }
        });

        // Get Competition Ranking
        app.get('/api/get_competition_ranking', async (req, res) => {

            // Get url query
            let competitionId = Number(req.query.competitionId);

            // Message Response
            let message: any = {
                cars: []
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
                            visualModel: true, 
                            level: true, 
                            title: true, 
                            regionId: true, 
                        }  
                    }
                }
            });

            // Send the response to the client
            res.send(message);
        });
    }
}