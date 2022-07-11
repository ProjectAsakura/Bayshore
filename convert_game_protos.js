const pbjs = require('protobufjs-cli/pbjs');
const pbts = require('protobufjs-cli/pbts');
const fs = require('fs');
const path = require('path');

fs.mkdirSync('src/wmmt', {recursive:true});

function generateProto(proto, out) {
    pbjs.main(['--target', 'static-module', '--wrap', 'es6', '--out', out, proto], (err, o) => {
        if (err)
            throw err;
    });
}

function generateTypescript(proto, out) {
    pbts.main(['--out', out, proto], (err, o) => {
        if (err)
            throw err;
    });
}

let dir = fs.readdirSync('proto');
for (let i of dir) {
    let n = path.basename(i);
    console.log(`generating src/wmmt/${n}.js (proto/${n})`);
    generateProto(`proto/${i}`, `src/wmmt/${n}.js`);
    console.log(`generating src/wmmt/${n}.d.ts (src/wmmt/${n}.js)`);
    generateTypescript(`src/wmmt/${n}.js`, `src/wmmt/${n}.d.ts`)
}