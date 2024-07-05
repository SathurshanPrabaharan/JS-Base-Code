const httpStatus = require("http-status");
const { throwCustomError } = require("../utils");
const mongoDB = require("../db/mongo-db");
const { DB_COLLECTIONS } = require("../utils/constants");


exports.initApiSuccess = async ({ query }) => {
    const { generateError } = query
    if (!generateError) {
        return "API is Initialized"
    }
    return throwCustomError(httpStatus.NOT_FOUND, "Not Found",)
}