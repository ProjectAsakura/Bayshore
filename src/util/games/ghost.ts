import { prisma } from "../..";

// Import Proto
import { wm } from "../../wmmt/wm.proto";
import wmproto  from "../../wmmt/wm.proto";
import * as ghost_history from "../games/games_util/ghost_history";


// Save ghost battle result
export async function saveGhostBattleResult(body: wm.protobuf.SaveGameResultRequest, car: any)
{
    // Declare variable for return
    let ghostModePlay: boolean = false;
    let updateNewTrail: boolean = false;
    let OCMModePlay: boolean = false;

    // If the game was not retired / timed out
    if (!(body.retired || body.timeup)) 
    {
        console.log('Saving Ghost Battle Result');
        
        // Set ghost mode play to true for saving the ghost trail later
        ghostModePlay = true;

        // Set update new trail to true for updating the user's ghost trail after playing OCM ghost battle mode later
        updateNewTrail = true;

        // Get the ghost result for the car
        let ghostResult = body?.rgResult;

        // Declare data
        let dataGhost : any;
        let dataCar : any;

        // ghostResult is set
        if (ghostResult)
        {
            // Ghost update data
            dataGhost = {
                rgRegionMapScore: ghostResult.rgRegionMapScore || undefined, 
                rgPlayCount: ghostResult.rgPlayCount || undefined, 
                dressupLevel: ghostResult.dressupLevel || undefined, 
                dressupPoint: ghostResult.dressupPoint || undefined,
            }
        }

        // Get the ghost result for the car
        let cars = body?.car;

        // Car is set
        if (cars)
        {
            // Error handling to prevent set ghost level to out of range value
            if(cars.ghostLevel)
            {
                if(cars.ghostLevel < 1)
                {
                    cars.ghostLevel = 1;
                }
                else if(cars.ghostLevel > 11)
                {
                    cars.ghostLevel = 10;
                }
            }

            // Car update data
            dataCar = {
                wheel: cars.wheel || undefined, 
                wheelColor: cars.wheelColor || undefined, 
                aero: cars.aero || undefined, 
                bonnet: cars.bonnet || undefined,
                wing: cars.wing || undefined,
                mirror: cars.mirror || undefined,
                neon: cars.neon || undefined,
                trunk: cars.trunk || undefined,
                plate: cars.plate || undefined,
                plateColor: cars.plateColor || undefined,
                plateNumber: cars.plateNumber || undefined,
                ghostLevel: cars.ghostLevel || undefined,
            }
        }

        // Count total win based on region map score
        if(body.rgResult?.rgRegionMapScore && body.rgResult?.rgRegionMapScore.length !== 0)
        {
            let winCounter = 0;

            // Count the total win
            for(let i=0; i<body.rgResult.rgRegionMapScore.length; i++)
            {
                winCounter += body.rgResult.rgRegionMapScore[i];
            }
            
            // Set the data 
            dataGhost.rgWinCount = winCounter;
            dataGhost.rgScore = winCounter;
            dataGhost.rgTrophy = winCounter;
        }
        
        // Update the car properties
        await prisma.car.update({
            where: {
                carId: body.carId
            },
            data: {
                ...dataGhost,
                ...dataCar
            }
        }); 


        // --------------GHOST BATTLE SELECTION MODE--------------
        // Calling save ghost history battle function (BASE_PATH/src/util/games/games_util/ghost_history.ts)
        let ghost_historys: any;

        switch (body.rgResult!.selectionMethod) 
        {
            case wmproto.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_LEVEL:
            {
                console.log('Normal Ghost Mode Found');

                ghost_historys = await ghost_history.saveGhostHistory(body);

                // Update the updateNewTrail value
                updateNewTrail = ghost_historys.updateNewTrail;

                break;
            }

            // Crown Ghost Battle Mode
            case wmproto.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_CROWN_MATCH:
            {
                // If not losing to the crown ghost battle
                if (body.rgResult?.acquireCrown !== false && body.rgResult?.acquireCrown)
                {
                    console.log('Crown Ghost Mode Found');

                    // Get the ghost crown result
                    let ghostResultCrown = body?.rgResult;

                    // Declare data
                    let dataCrown : any;

                    // ghostResultCrown is set
                    if (ghostResultCrown)
                    {
                        let carId: number = 0;
                        if(body.carId)
                        {
                            carId = Number(body.carId);
                        }

                        // Ghost Crown update data
                        dataCrown = {
                            carId: carId,
                            playedAt: body.playedAt || undefined,
                            tunePower: body.car?.tunePower || undefined,
                            tuneHandling: body.car?.tuneHandling || undefined,
                        }

                        // Get the area id and ramp id
                        let area = 0;
                        let ramp = 0;
                        let path = 0;
                        if(body.rgResult?.path)
                        {
                            if(body.rgResult?.path >= 0 && body.rgResult?.path <= 9){ // GID_PATH_C1
                                area = Number(0);
                                ramp = Number(Math.floor(Math.random() * 4));
                            }
                            else if(body.rgResult?.path >= 10 && body.rgResult?.path <= 15){ // GID_PATH_N9
                                area = Number(1);
                                ramp = Number(Math.floor(Math.random() * 2) + 4);
                            }
                            else if(body.rgResult?.path >= 16 && body.rgResult?.path <= 17){ // GID_PATH_WTEAST
                                area = Number(2);
                                ramp = Number(Math.floor(Math.random() * 2) + 6);
                            }
                            else if(body.rgResult?.path >= 18 && body.rgResult?.path <= 19){ // GID_PATH_WT_UP_DOWN
                                area = Number(3);
                                ramp = Number(Math.floor(Math.random() * 2) + 8);
                            }
                            else if(body.rgResult?.path >= 20 && body.rgResult?.path <= 26){ // GID_PATH_WG
                                area = Number(4);
                                ramp = Number(Math.floor(Math.random() * 4) + 10);
                            }
                            else if(body.rgResult?.path >= 27 && body.rgResult?.path <= 33){ // GID_PATH_KG
                                area = Number(5);
                                ramp = Number(Math.floor(Math.random() * 4) + 14);
                            }
                            else if(body.rgResult?.path >= 34 && body.rgResult?.path <= 37){ // GID_PATH_YS
                                area = Number(6);
                                ramp = Number(Math.floor(Math.random() * 3) + 18);
                            }
                            else if(body.rgResult?.path >= 38 && body.rgResult?.path <= 48){ // GID_PATH_KG_SHINYAMASHITA_MINATOMIRAI
                                area = Number(7);
                                ramp = Number(Math.floor(Math.random() * 4) + 21);
                            }
                            else if(body.rgResult?.path === 49){ // GID_PATH_NGR
                                area = Number(8);
                                ramp = Number(25);
                            }
                            else if(body.rgResult?.path >= 50 && body.rgResult?.path <= 53){ // GID_PATH_OS
                                area = Number(9);
                                ramp = Number(26);
                            }
                            else if(body.rgResult?.path >= 54 && body.rgResult?.path <= 55){ // GID_PATH_KB
                                area = Number(10);
                                ramp = Number(Math.floor(Math.random() * 2) + 27);
                            }
                            else if(body.rgResult?.path >= 58 && body.rgResult?.path <= 61){ // GID_PATH_FK
                                area = Number(11);
                                ramp = Number(Math.floor(Math.random() * 4) + 29);
                            }
                            else if(body.rgResult?.path >= 62 && body.rgResult?.path <= 63){ // GID_PATH_HK
                                area = Number(12);
                                ramp = Number(Math.floor(Math.random() * 2) + 33);
                            }
                            else if(body.rgResult?.path >= 64 && body.rgResult?.path <= 65){ // GID_PATH_TP
                                area = Number(13);
                                ramp = Number(Math.floor(Math.random() * 2) + 35);
                            }
                            else if(body.rgResult?.path >= 56 && body.rgResult?.path <= 57){ // GID_PATH_HS
                                area = Number(18);
                                ramp = Number(Math.floor(Math.random() * 2) + 27);
                            }

                            path = Number(body.rgResult.path);
                        }

                        // Get the available crown holder data
                        let carCrowns = await prisma.carCrown.count({ 
                            where: {
                                area: area
                            }
                        });

                        // Crown holder data available
                        if(carCrowns !== 0)
                        { 
                            // Update it to the new one
                            let areaVal = Number(area);
                            await prisma.carCrown.update({ 
                                where: {
                                    area: areaVal
                                },
                                data: {
                                    ...dataCrown,
                                    area: area,
                                    ramp: ramp,
                                    path: path
                                }
                            });
                        }
                        // Crown holder data not available or still default crown holder data
                        else
                        { 
                            await prisma.carCrown.create({
                                data: {
                                    ...dataCrown,
                                    area: area,
                                    ramp: ramp,
                                    path: path
                                }
                            });
                        }
                    }
                }

                ghost_historys = await ghost_history.saveGhostHistory(body);

                // Update the updateNewTrail value
                updateNewTrail = ghost_historys.updateNewTrail;

                break;
            }

            // OCM Ghost Battle Mode
            case wmproto.wm.protobuf.GhostSelectionMethod.GHOST_COMPETITION:
            {
                console.log('OCM Ghost Mode Found');
                OCMModePlay = true;
                let saveExOCM: any = {};
                saveExOCM.carId = body.carId;
                if(body.rgResult?.competitionId){
                    saveExOCM.competitionId = body.rgResult?.competitionId!;
                }
                if(body.rgResult?.periodId){
                    saveExOCM.periodId = body.rgResult?.periodId!;
                }
                if(body.rgResult?.brakingPoint){
                    saveExOCM.brakingPoint = body.rgResult?.brakingPoint!;
                }
                if(body?.playedAt){
                    saveExOCM.playedAt = body?.playedAt!;
                }

                // Get the user's available OCM Battle data
                let countOCM = await prisma.oCMPlayRecord.count({ 
                    where: {
                        competitionId: saveExOCM.competitionId,
                        carId: body.carId
                    }
                });
                
                // User's OCM Battle data available
                if(countOCM !== 0){
                    console.log('OCM Play Record found');
                    console.log('Updaing OCM Play Record entry');

                    await prisma.oCMPlayRecord.updateMany({
                        where:{
                            carId: saveExOCM.carId,
                            competitionId: saveExOCM.competitionId,
                        },
                        data: saveExOCM
                    });
                }
                // First time User playing OCM Battle
                else{ 
                    console.log('OCM Play Record not found');
                    console.log('Creating new OCM Play Record entry');

                    await prisma.oCMPlayRecord.create({
                        data: saveExOCM
                    });
                }

                ghost_historys = await ghost_history.saveOCMGhostHistory(body);

                // Update the updateNewTrail value
                updateNewTrail = ghost_historys.updateNewTrail;

                break;
            }
        }
    }

    // Return the value to 'BASE_PATH/src/modules/game.ts'
    return { ghostModePlay, updateNewTrail, OCMModePlay }
} 