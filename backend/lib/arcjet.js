import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

export const arcj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules: [
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            allow:[
                "CATEGORY:SEARCH_ENGINE"
            ] //Exception for search engine bots
        }),

        //Rate limiting
        tokenBucket({
            mode:"LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        })
    ]
})