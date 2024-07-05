const admin = require('firebase-admin')
const getCredentials = require("./getCredentials");

async function getFirebaseAuth() {

    const configurations = await getCredentials();

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(configurations.firebaseConfig.serviceAccount)
        })
    }
    return admin.auth();
}
module.exports = getFirebaseAuth
