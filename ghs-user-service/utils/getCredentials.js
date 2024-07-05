const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')
const { GOOGLE_CLOUD_PROJECT } = process.env
require('dotenv').config();
const fs = require("fs");
const constants = require("./constants");


async function getCredentials(secretId = process.env.DEFAULT_SECRET_NAME, version = 'latest') {
    if (process.env.ENV === constants.ENV.LOCAL) {
        const config = fs.readFileSync('.config.json');
        return JSON.parse(config)
    }


    const serviceClient = new SecretManagerServiceClient();
    const secretPath = `projects/${GOOGLE_CLOUD_PROJECT}/secrets/${secretId}/versions/${version}`;
    const [response] = await serviceClient.accessSecretVersion({
        name: secretPath
    })
    return JSON.parse(response.payload.data.toString('utf8'))
}

module.exports = getCredentials
