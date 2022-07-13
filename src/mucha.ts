import express, { Application } from "express";
import formUrlEncoded from "form-urlencoded";
import moment from "moment";
import { Config } from "./config";
import { Module } from "./module";

const PORT = 10082;

export default class MuchaModule extends Module {
    register(app: Application): void {
        const URL_BASE = `https://${Config.getConfig().serverIp || "localhost"}:${PORT}`

        app.use(express.urlencoded({
            type: '*/*',
            extended: true
        }))

        app.post('/updatacheck.do', (req, res) => {
            let response = {
                RESULTS: "001",
                UPDATE_VER_1: req.body.gameVer,
                UPDATE_URL_1: `${URL_BASE}/updUrl1/`,
                UPDATE_SIZE_1: 9318000,
                UPDATE_CRC_1: "55C4000000000000",
                CHECK_URL_1: `${URL_BASE}/checkUrl/`,
                EXE_VER_1: req.body.gameVer,
                INFO_SIZE_1: 180,
                COM_SIZE_1: 16384,
                COM_TIME_1: 100,
                LAN_INFO_SIZE_1: 180                        
            }

            let urlResponse = formUrlEncoded(response);
            let decResponse = decodeURIComponent(urlResponse);

            res.status(200).send(decResponse);
        })

        app.post('/boardauth.do', (req, res) => {
            let serverTime = moment().format('YYYYMMDDHHmm');
            let utcServerTime = moment().utc().format('YYYYMMDDHHmm');

            let shopName = Config.getConfig().shopName;
            let shopNick = Config.getConfig().shopNickname;

            let response = {
                RESULTS: "001",
                AREA_0: "008",
                AREA_0_EN: "",
                AREA_1: "009",
                AREA_1_EN: "",
                AREA_2: "010",
                AREA_2_EN: "",
                AREA_3: "011",
                AREA_3_EN: "",
                AREA_FULL_0: "",
                AREA_FULL_0_EN: "",
                AREA_FULL_1: "",
                AREA_FULL_1_EN: "",
                AREA_FULL_2: "",
                AREA_FULL_2_EN: "",
                AREA_FULL_3: "",
                AREA_FULL_3_EN: "",
                AUTH_INTERVAL: "86400",
                CHARGE_URL: `${URL_BASE}/charge/`,
                CONSUME_TOKEN: "0",
                COUNTRY_CD: "JPN",
                DONGLE_FLG: "1",
                EXPIRATION_DATE: "null",
                FILE_URL: `${URL_BASE}/file/`,
                FORCE_BOOT: "0",
                PLACE_ID: req.body.placeId,
                PREFECTURE_ID: "14",
                SERVER_TIME: serverTime,
                UTC_SERVER_TIME: utcServerTime,
                SHOP_NAME: shopName,
                SHOP_NAME_EN: shopName,
                SHOP_NICKNAME: shopNick,
                SHOP_NICKNAME_EN: shopNick,
                URL_1: `${URL_BASE}/url1/`,
                URL_2: `${URL_BASE}/url2/`,
                URL_3: `${URL_BASE}/url3/`,
                USE_TOKEN: "0"
            }

            let urlResponse = formUrlEncoded(response);
            let decResponse = decodeURIComponent(urlResponse);

            res.status(200).send(decResponse);
        })
    }
}