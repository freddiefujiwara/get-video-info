#!/bin/env node

if(process.argv.length < 3) process.exit(1);

(async () => {
    const fetch = require('node-fetch');
    (await (await fetch(`https://www.youtube.com/get_video_info?video_id=${process.argv[2]}`))
        .text())
    .split('&')
        .forEach((kv) => {
            const kva = kv.split("=", 2);
            if (kva[0] === "player_response") {
                console.log(JSON.stringify(JSON.parse(unescape(decodeURI(kva[1]))), null, 2));
            }
        });
})();
