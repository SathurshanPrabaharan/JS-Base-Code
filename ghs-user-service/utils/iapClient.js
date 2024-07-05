const { GoogleAuth } = require('google-auth-library')
const path = require("path");
const constants = require("./constants");
require('dotenv').config();


let client = null;
async function iapClient(req, res, next) {
    if (process.env.ENV === constants.ENV.LOCAL) {
        req.iapToken = 'xxxx'
        next();
        return
    }
    if (!client) {
        const auth = process.env.GAE_APPLICATION ? new GoogleAuth()
            : new GoogleAuth({ keyFile: path.join(__dirname, process.env.IAP_FILE_LOCATION) });
        client = await auth.getIdTokenClient(process.env.IAP_CLIENT_ID)
    }

    req.iapToken = getToken(client)
    next();
}

async function getToken(client) {
    return (await client.getRequestHeaders()).Authorization
}
module.exports = iapClient
