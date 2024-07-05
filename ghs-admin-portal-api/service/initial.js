const httpStatus = require("http-status");
const {throwCustomError} = require("../utils");


exports.initApiSuccess = async ({query}) => {
    const { generateError } = query
    if(!generateError) {
        return "API is Initialized"
    }
    
    return throwCustomError( httpStatus.NOT_FOUND, "Not Found",)
}