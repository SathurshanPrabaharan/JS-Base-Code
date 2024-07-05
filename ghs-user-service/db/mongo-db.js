const { getCredentials } = require("../utils");
const MongoClient = require('mongodb').MongoClient;

const DbConnection = function () {

    let db = null;

    async function DbConnect() {
        try {
            const credentials = await getCredentials();
            let url = credentials.mongo.url;
            let _db = await MongoClient.connect(url);

            return _db.db(credentials.mongo.db)
        } catch (e) {
            return e;
        }
    }

    async function Get() {
        return db
    }

    async function initializeConnection() {
        try {

            if (!db) {
                console.log(`Establishing mongo db connection`);
                db = await DbConnect();

            }
        } catch (e) {
            return e;
        }
    }

    return {
        Get: Get,
        initializeConnection
    }
}


module.exports = DbConnection();
