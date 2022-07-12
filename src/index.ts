// Bayshore - a Wangan Midnight Maximum Tune 6 private server.
// Made with love by Luna, and part of Project Asakura.

import express from 'express';
import {PrismaClient} from '@prisma/client';
import https, {globalAgent} from 'https';
import http from 'http';
import fs from 'fs';
import bodyParser from 'body-parser';
import AllnetModule from './allnet';
import MuchaModule from './mucha';
import { Config } from './config';
globalAgent.options.keepAlive = true;

// @ts-ignore
require('http').globalAgent.options.keepAlive = true;

const PORT_ALLNET = 80;
const PORT_MUCHA = 10082;
const PORT_BNGI = 9002;

Config.load();

const app = express();
app.use(bodyParser.raw({
    type: '*/*'
}));

const muchaApp = express();
const allnetApp = express();

app.use((req, res, next) => {
    console.log(`[  MAIN] ${req.method} ${req.url}`);
    next()
});

muchaApp.use((req, res, next) => {
    console.log(`[ MUCHA] ${req.method} ${req.url}`);
    next()
});

allnetApp.use((req, res, next) => {
    console.log(`[ALLNET] ${req.method} ${req.url}`);
    next()
});

let dirs = fs.readdirSync('dist/modules');
for (let i of dirs) {
    if (i.endsWith('.js')) {
        let mod = require(`./modules/${i.substring(0, i.length - 3)}`); // .js extension
        let inst = new mod.default();
        inst.register(app);
    }
}

app.all('*', (req, res) => {
    res.status(200).end();
})

new AllnetModule().register(allnetApp);
new MuchaModule().register(muchaApp);

let key = fs.readFileSync('./server_wangan.key');
let cert = fs.readFileSync('./server_wangan.crt');

http.createServer(allnetApp).listen(PORT_ALLNET, '0.0.0.0', 511, () => {
    console.log(`ALL.net server listening on port ${PORT_ALLNET}!`);
})

https.createServer({key, cert}, muchaApp).listen(PORT_MUCHA, '0.0.0.0', 511, () => {
    console.log(`Mucha server listening on port ${PORT_MUCHA}!`);
})

https.createServer({key, cert}, app).listen(PORT_BNGI, '0.0.0.0', 511, () => {
    console.log(`Game server listening on port ${PORT_BNGI}!`);
})
