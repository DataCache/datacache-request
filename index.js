'use strict';

const api = require('./lib/call.js');

class Calendar {

    constructor(api_key) {
        this.key = api_key;
    }

    exec(endpoint, data) {

        let apiob = new api(this.key);
        return new Promise((resolve, reject) => {
            apiob.exec(endpoint, data).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
};

class Cache {

    constructor(api_key) {
        this.key = api_key;
    }

    exec(msg) {
    }

};

let DataCache = {
    "Calendar": Calendar,
    "Cache": Cache
};

module.exports = DataCache;
