// Bayshore - a Wangan Midnight Maximum Tune 6 private server.
// Made with love by Luna, and part of Project Asakura.

import express from 'express';
import {PrismaClient} from '@prisma/client';
import https from 'https';
import fs from 'fs';

const app = express();

let dirs = fs.readdirSync('dist/modules');
for (let i of dirs) {
    if (i.endsWith('.js')) {
        let mod = require(`./modules/${i.substring(0, i.length - 3)}`); // .js extension
        let inst = new mod.default();
        inst.register(app);
    }
}

app.all('*', (req, res) => {
    console.log(`CATCH-ALL: ${req.method} ${req.originalUrl}`);
})

https.createServer({
    key: fs.readFileSync('server_wangan.key'),
    cert: fs.readFileSync('server_wangan.crt')
}, app).listen(9002, () => {
    console.log('Server listening on port 9002!');
})