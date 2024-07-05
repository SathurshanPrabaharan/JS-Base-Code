const apiResponse = require("./apiResponse");
function handleError(error, res) {
    if (error.custom) {
        return apiResponse.sendResponse(res, error.custom)
    }
    console.error(error)
    return apiResponse.errorResponse(res, 'Internal Server Error', error.message);
}

module.exports = handleError
