// Bayshore - a Wangan Midnight Maximum Tune 6 private server.
// Made with love by Luna, and part of Project Asakura.

import express, { Router } from 'express';
import {PrismaClient} from '@prisma/client';
import https, {globalAgent} from 'https';
import http from 'http';
import fs from 'fs';
import bodyParser from 'body-parser';
import AllnetModule from './allnet';
import MuchaModule from './mucha';
import { Config } from './config';
import process from 'process';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

import * as dotenv from "dotenv";
dotenv.config({path: __dirname + '/.env'});

globalAgent.options.keepAlive = true;

// @ts-ignore
require('http').globalAgent.options.keepAlive = true;

export const prisma = new PrismaClient();

const appRouter = Router();

const PORT_ALLNET = 80;
const PORT_MUCHA = 10082;
const PORT_BNGI = 9002;

const app = express();
app.use(bodyParser.raw({
    type: '*/*'
}));

let useSentry = !!Config.getConfig().sentryDsn;
if (useSentry) {
    Sentry.init({
        dsn: Config.getConfig().sentryDsn,
        integrations: [
            new Sentry.Integrations.Http({tracing: true}),
            new Tracing.Integrations.Express({
                router: appRouter,
            })
        ],

        tracesSampleRate: 0.5
    });
}

const muchaApp = express();
const allnetApp = express();

if (useSentry) {
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());
}

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

// Get all of the files in the modules directory
let dirs = fs.readdirSync('dist/modules');
// Loop over the files
for (let i of dirs) 
{
    // If the file is a .js file
    if (i.endsWith('.js')) 
    {
        // Require the module file
        let mod = require(`./modules/${i.substring(0, i.length - 3)}`); // .js extension

        // Create an instance of the module
        let inst = new mod.default();

        // Register the module with the app
        inst.register(appRouter);
    }
}

// Host on / and /wmmt6/ path
app.use('/', appRouter);
app.use('/wmmt6/', appRouter);

app.all('*', (req, res) => {
    console.log(`[  MAIN] ${req.method} ${req.url} is unhandled`);
    res.status(200).end();
})

// Register the ALL.NET / Mucha Server
new AllnetModule().register(allnetApp);
new MuchaModule().register(muchaApp);

// Sentry is in use
if (useSentry)
{
     // Use the sentry error handler
    app.use(Sentry.Handlers.errorHandler());
}

// Get the wangan key / certificate file
let key = fs.readFileSync('./server_wangan.key');
let cert = fs.readFileSync('./server_wangan.crt');

// Create the (ALL.Net) server
http.createServer(allnetApp).listen(PORT_ALLNET, '0.0.0.0', 511, () => {
    console.log(`ALL.net server listening on port ${PORT_ALLNET}!`);
    let unix = Config.getConfig().unix;
    if (unix && process.platform == 'linux') {
        console.log('Downgrading permissions...');
        process.setgid!(unix.setgid);
        process.setuid!(unix.setuid);
        console.log('Done!');
    }
})

// Create the mucha server
https.createServer({key, cert}, muchaApp).listen(PORT_MUCHA, '0.0.0.0', 511, () => {
    console.log(`Mucha server listening on port ${PORT_MUCHA}!`);
})

// Create the game server
https.createServer({key, cert}, app).listen(PORT_BNGI, '0.0.0.0', 511, () => {
    console.log(`Game server listening on port ${PORT_BNGI}!`);
})
