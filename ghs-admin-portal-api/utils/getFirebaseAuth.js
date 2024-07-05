const admin = require('firebase-admin')

async function getFirebaseAuth (configurations) {
    if(!admin.apps.length) {
        admin.initializeApp( {
            credential: admin.credential.cert(configurations.firebaseConfig.serviceAccount)
        })
    }

    return admin.auth();
}


module.exports = getFirebaseAuth