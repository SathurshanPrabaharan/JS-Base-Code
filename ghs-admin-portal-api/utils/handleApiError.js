const httpStatus = require("http-status");
const apiResponse = require("./apiResponse");

function handleApiError(error, res) {

    if(error.response) {
        const {status} = error.response

        if(status === httpStatus.BAD_REQUEST) {

            return  apiResponse.sendResponse(res,{status,message:'validation error',data:error.response.data.validation})
        }

        const { message,data } = error.response.data
        return  apiResponse.sendResponse(res,{status,message,data})
    }
    if(error.custom) {
        return  apiResponse.sendResponse(res,error.custom)
    }
    console.log(error)
    return apiResponse.errorResponse(res,'Internal Server Error',error.message)

}

module.exports = handleApiError
