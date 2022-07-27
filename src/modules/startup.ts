import { Application } from "express";
import {Module} from "module";
import { Config } from "../config";
import * as wm from "../wmmt/wm.proto";
import * as wms from "../wmmt/service.proto";
import { prisma } from "..";

export default class StartupModule extends Module {
    register(app: Application): void {
        app.post('/method/register_system_info', (req, res) => {
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                regionId: 1,
                placeId: "JPN0123",
                allowedClientLogTypes: [],
                ghostSelectionMinRedoWait: 30,
                ghostSelectionMaxRedoWait: 4000,
                featureVersion: {
                    version: 9,
                    year: 2022,
                    month: 7,
                    pluses: 0,
                    releaseAt: 0 // idk what this is
                }
            }
            let resp = wm.wm.protobuf.RegisterSystemInfoResponse.encode(msg);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })

        app.get('/resource/place_list', (req, res) => {
            console.log('place list');
            let places: wm.wm.protobuf.Place[] = [];
            places.push(new wm.wm.protobuf.Place({
                placeId: "JPN0123",
                regionId: 1,
                shopName: Config.getConfig().shopName,
                country: "JPN"
            }));
            let resp = wm.wm.protobuf.PlaceList.encode({places});
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })

        app.get('/resource/ranking', async (req, res) => {
            console.log('ranking');
            let lists: wms.wm.protobuf.Ranking.List[] = [];

            // Get TA Ranking
            for(let i=0; i<25; i++){
                let ta_time = await prisma.timeAttackRecord.findMany({
                    where: {
                        course: i
                    },
                    orderBy: {
                        time: 'asc'
                    }
                });
                if(ta_time.length !== 0){
                    let list_ta: wms.wm.protobuf.Ranking.Entry[] = [];
                    for(let j=0; j<ta_time.length; j++){
                        let car_ta = await prisma.car.findFirst({
                            where: {
                                carId: ta_time[j].carId
                            }
                        });
                        
                        list_ta.push(wms.wm.protobuf.Ranking.Entry.create({
                            carId: car_ta!.carId,
                            rank: car_ta!.level,
                            result: ta_time[j].time,
                            name: car_ta!.name,
                            regionId: car_ta!.regionId,
                            model: car_ta!.model,
                            visualModel: car_ta!.visualModel,
                            defaultColor: car_ta!.defaultColor,
                            tunePower: car_ta!.tunePower,
                            tuneHandling: car_ta!.tuneHandling,
                            title: car_ta!.title,
                            level: car_ta!.level
                         }));
                    }
                    if(ta_time.length < 20){
                        for(let j=ta_time.length; j<20; j++){
                            let resulttime = 599999;
                            if(i === 22 || i === 23){
                                resulttime = 1199999
                            }
                            list_ta.push(wms.wm.protobuf.Ranking.Entry.create({
                                carId: 0,
                                rank: 0,
                                result: resulttime,
                                name: 'ＧＵＥＳＴ',
                                regionId: 0,
                                model: Math.floor(Math.random() * 106) + 1,
                                visualModel: Math.floor(Math.random() * 106) + 1,
                                defaultColor: 0,
                                tunePower: 0,
                                tuneHandling: 0,
                                title: 'Wangan Beginner',
                                level: 0
                            }));
                        }
                    }
    
                    lists.push(new wms.wm.protobuf.Ranking.List({
                        rankingType: i,
                        topRecords: list_ta
                    }));
                }
            }


            // Get VS Star Ranking
            let car_vs = await prisma.car.findMany({
                orderBy: {
					vsStarCount: 'desc'
				}
            });
            let list_vs: wms.wm.protobuf.Ranking.Entry[] = [];
            for(let i=0; i<car_vs.length; i++){
                list_vs.push(wms.wm.protobuf.Ranking.Entry.create({
                    carId: car_vs[i].carId,
                    rank: car_vs[i].level,
                    result: car_vs[i].vsStarCount,
                    name: car_vs[i].name,
                    regionId: car_vs[i].regionId,
                    model: car_vs[i].model,
                    visualModel: car_vs[i].visualModel,
                    defaultColor: car_vs[i].defaultColor,
                    tunePower: car_vs[i].tunePower,
                    tuneHandling: car_vs[i].tuneHandling,
                    title: car_vs[i].title,
                    level: car_vs[i].level
                 }));
            }
            if(car_vs.length < 20){
                for(let j=car_vs.length; j<20; j++){
                    list_vs.push(wms.wm.protobuf.Ranking.Entry.create({
                        carId: 0,
                        rank: 0,
                        result: 0,
                        name: 'ＧＵＥＳＴ',
                        regionId: 0,
                        model: Math.floor(Math.random() * 106) + 1,
                        visualModel: Math.floor(Math.random() * 106) + 1,
                        defaultColor: 0,
                        tunePower: 0,
                        tuneHandling: 0,
                        title: 'Wangan Beginner',
                        level: 0
                    }));
                }
            }
            lists.push(new wms.wm.protobuf.Ranking.List({
                rankingType: 100,
                topRecords: list_vs
            }));

            
            // Get Ghost Win Ranking
            let car_ghost = await prisma.car.findMany({
                orderBy: {
					rgWinCount: 'desc'
				}
            });
            let list_ghost: wms.wm.protobuf.Ranking.Entry[] = [];
            for(let i=0; i<car_ghost.length; i++){
                list_ghost.push(wms.wm.protobuf.Ranking.Entry.create({
                    carId: car_ghost[i].carId,
                    rank: car_ghost[i].level,
                    result: car_ghost[i].rgWinCount,
                    name: car_ghost[i].name,
                    regionId: car_ghost[i].regionId,
                    model: car_ghost[i].model,
                    visualModel: car_ghost[i].visualModel,
                    defaultColor: car_ghost[i].defaultColor,
                    tunePower: car_ghost[i].tunePower,
                    tuneHandling: car_ghost[i].tuneHandling,
                    title: car_ghost[i].title,
                    level: car_ghost[i].level
                 }));
            }
            if(car_ghost.length < 20){
                for(let j=car_ghost.length; j<20; j++){
                    list_ghost.push(wms.wm.protobuf.Ranking.Entry.create({
                        carId: 0,
                        rank: 0,
                        result: 0,
                        name: 'ＧＵＥＳＴ',
                        regionId: 0,
                        model: Math.floor(Math.random() * 106) + 1,
                        visualModel: Math.floor(Math.random() * 106) + 1,
                        defaultColor: 0,
                        tunePower: 0,
                        tuneHandling: 0,
                        title: 'Wangan Beginner',
                        level: 0
                    }));
                }
            }
            lists.push(new wms.wm.protobuf.Ranking.List({
                rankingType: 101,
                topRecords: list_ghost
            }));
            
			let resp = wms.wm.protobuf.Ranking.encode({lists});
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
		  })

        app.post('/method/ping', (req, res) => {
            console.log('ping');
            let body = wm.wm.protobuf.PingRequest.decode(req.body);
            let ping = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                pong: body.ping || 1
            };
            let resp = wm.wm.protobuf.PingResponse.encode(ping);
            let end = resp.finish();
            let r = res
                .header('Server', 'v388 wangan')
                .header('Content-Type', 'application/x-protobuf; revision=8053')
                .header('Content-Length', end.length.toString())
                .status(200);
            r.send(Buffer.from(end));
        })
    }
}