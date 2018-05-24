'use strict';
const unirest = require('unirest');

class RapidAPIRequest {

    constructor(api_key) {
        this.url = "https://data-cache-datacache-calendar-v1.p.mashape.com/calendar";
        this.key = api_key;
    }

    exec(endpoint, data) {

        console.log('Input json:', JSON.stringify(data));
        return new Promise((resolve, reject) => {
            unirest.post(this.url + "/" + endpoint)
                .header("X-Mashape-Key", this.key)
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .send(data)
                .end(function (result) {
                    //console.log(result.status, result.headers, result.body);
                    resolve(result.body.data);
                });
        });

    }

};


module.exports = RapidAPIRequest;
