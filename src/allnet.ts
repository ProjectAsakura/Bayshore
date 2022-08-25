import bodyParser from "body-parser";
import { Application } from "express";
import { unzipSync } from "zlib";
import { Module } from "./module";
import iconv from "iconv-lite";
import { Config } from "./config";

// TODO: Move this into the config
const STARTUP_URI = `https://${Config.getConfig().serverIp || "localhost"}:9002`;
const STARTUP_HOST = `${Config.getConfig().serverIp || "localhost"}:9002`;

export default class AllnetModule extends Module {
    register(app: Application): void {
        app.use(bodyParser.raw({
            type: '*/*'
        }));

        app.use("/sys/servlet/PowerOn", function(req, res, next) {
            console.log('amauthd');

            if (req.method !== "POST") {
                return res.status(405).end();
            }
        
            if (!req.is("application/x-www-form-urlencoded")) {
                return next();
            }
        
            const base64 = req.body.toString('ascii');
            const zbytes = Buffer.from(base64, "base64");
            const bytes = unzipSync(zbytes);
            const str = bytes.toString("ascii").trim();
        
            const kvps = str.split("&");
            const reqParams: any = {};
        
            // Keys and values are not URL-escaped
        
            kvps.forEach(kvp => {
                const [key, val] = kvp.split("=");
        
                reqParams[key] = val;
            });
        
            const send_ = res.send;
        
            req.body = reqParams;
            res.send = resParams => {
                const str =
                    Object.entries(resParams)
                        .map(([key, val]) => key + "=" + val)
                        .join("&") + "\n";
        
                res.set("content-type", "text/plain");
        
                const bin = iconv.encode(str, "shift_jis");
        
                return send_.apply(res, [bin]);
            };
        
            return next();
        });
        
        app.post("/sys/servlet/PowerOn", function(req, res) {
            console.log('ALL.net: Startup request');
            
            // Cut milliseconds out of ISO timestamp
        
            const now = new Date();
            const adjusted = now;

            let shopName = Config.getConfig().shopName;
            let shopNick = Config.getConfig().shopNickname;
            let regionName = Config.getConfig().regionName;
            let placeId = Config.getConfig().placeId;
            let country = Config.getConfig().country;
            let regionId = Config.getConfig().regionId;

            // TODO: Implement board authentication here.
        
            const resParams = {
                stat: 1,
                uri: STARTUP_URI,
                host: STARTUP_HOST,
                place_id: placeId,
                name: shopName,
                nickname: shopNick,
                region0: regionId,
                region_name0: regionName,
                region_name1: "X",
                region_name2: "Y",
                region_name3: "Z",
                country: country,
                allnet_id: "456",
                timezone: "002:00",
                setting: "",
                year: adjusted.getFullYear(),
                month: adjusted.getMonth() + 1, // I hate JS
                day: adjusted.getDate(),
                hour: adjusted.getHours(),
                minute: adjusted.getMinutes(),
                second: adjusted.getSeconds(),
                res_class: "PowerOnResponseVer2",
                token: req.body.token,
            };
                
            res.send(resParams);
        });
    }
}