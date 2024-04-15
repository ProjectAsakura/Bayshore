import { Application } from "express";
import { Module } from "module";
import { Config } from "../config";
import { prisma } from "..";
import path from 'path';

// Import Proto
import * as wm from "../wmmt/wm.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "./util/common";
import * as crown_list from "./resource/crown_list";
import * as ranking from "./resource/ranking";


export default class ResourceModule {
    register(app: Application): void {

        // Place List
        app.get('/resource/place_list', async (req, res) => {

            console.log('place list');

            // Empty list of place records
            let places: wm.wm.protobuf.Place[] = [];

            // Region ID must not 0
            let regionId = common.sanitizeInputNotZero(Number(Config.getConfig().regionId)) || 1;

            // Response data
            places.push(new wm.wm.protobuf.Place({
                placeId: Config.getConfig().placeId || 'JPN0123',
                regionId: regionId,
                shopName: Config.getConfig().shopName || 'Bayshore',
                country: Config.getConfig().country || 'JPN'
            }));

            let checkPlaceList = await prisma.placeList.findFirst({
                where:{
                    placeId: Config.getConfig().placeId,
                }
            })

            if(!(checkPlaceList))
            {
                console.log('Creating new Place List entry')

                await prisma.placeList.create({
                    data:{
                        placeId: Config.getConfig().placeId || 'JPN0123',
                        regionId: regionId,
                        shopName: Config.getConfig().shopName || 'Bayshore',
                        country: Config.getConfig().country || 'JPN'
                    }
                })
            }
            else
            {
                if(checkPlaceList.shopName !== Config.getConfig().shopName)
                {
                    await prisma.placeList.update({
                        where:{
                            id: checkPlaceList.id
                        },
                        data:{
                            regionId: regionId,
                            shopName: Config.getConfig().shopName,
                            country: Config.getConfig().country
                        }
                    })
                }
            }

            // Encode the response
            let message = wm.wm.protobuf.PlaceList.encode({places});
             // Send the response to the client
             common.sendResponse(message, res, req.rawHeaders);
        })

        // Get Ranking data for attract screen (TA, Ghost, VS)
        app.get('/resource/ranking', async (req, res) => {

            console.log('ranking');
            
            // Empty list of all ranking records (Combination of TA, VS Stars, and Ghost Battle Win)
            let lists: wmsrv.wm.protobuf.Ranking.List[] = [];

            // Get TA Ranking
            let rankingTA = await ranking.getTimeAttackRanking();
            lists.push( ...rankingTA.lists );

            // Get VS Outrun Ranking
            let rankingVSOutrun = await ranking.getVSOutrunRanking();
            lists.push( ...rankingVSOutrun.lists );

            // Get Ghost Trophies Ranking
            let rankingGhostTrophies = await ranking.getTGhostTrophiesRanking();
            lists.push( ...rankingGhostTrophies.lists );
            
            // Encode the response
			let message = wmsrv.wm.protobuf.Ranking.encode({lists});

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
        })


        // Crown List for attract screen and Crown Ghost Battle mode
        app.get('/resource/crown_list', async (req, res) => {

            console.log('crown_list');

            // Empty list of crown records
            let crowns: wmsrv.wm.protobuf.Crown[] = []; 

            // Get Crown List
            let crown_lists = await crown_list.getCrownList();
            crowns.push( ...crown_lists.list_crown );

            // Encode the response
            let message = wmsrv.wm.protobuf.CrownList.encode( {crowns} );

            // Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
        })


        // For File List
        app.get('/static/:filename', async function(req, res){
            
            // Static Files
            let paths = await prisma.fileList.findFirst({
                where:{
                    urlFileName: req.params.filename
                },
                select: {
                    filePath: true
                }
            });

            res.sendFile(path.resolve(paths!.filePath, req.params.filename), { cacheControl: false });
        });


        // File List
        app.get('/resource/file_list', async (req, res) => {

            console.log('file_list');

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots
            let files: wm.wm.protobuf.FileList.FileInfo[] = [];

            let fileList = await prisma.fileList.findMany({
                orderBy:{
                    fileId: 'asc'
                }
            });

            for(let i=0; i<fileList.length; i++)
            {
                files.push(wm.wm.protobuf.FileList.FileInfo.create({
                    fileId: fileList[i].fileId,
                    fileType: fileList[i].fileType,
                    fileSize: fileList[i].fileSize,
                    url: 'https://'+Config.getConfig().serverIp+':9002/static/' +fileList[i].urlFileName,
                    sha1sum: Buffer.from(fileList[i].sha1sum, "hex"),
                    notBefore: fileList[i].notBefore,
                    notAfter: fileList[i].notAfter,
                }));
            }
            

			// Response data
			let msg = {
				error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                files: files,
                interval: 2
			}

			// Encode the response
			let message = wm.wm.protobuf.FileList.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})

        
        // Ghost List
        app.get('/resource/ghost_list', async (req, res) => {

            console.log('ghost_list');

            // TODO: Actual stuff here
            // This is literally just bare-bones so the shit boots

			// Response data
            let msg = {
				error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
                ghosts: null
			};

            // Encode the response
			let message = wmsrv.wm.protobuf.GhostList.encode(msg);

			// Send the response to the client
            common.sendResponse(message, res, req.rawHeaders);
		})
    }
}