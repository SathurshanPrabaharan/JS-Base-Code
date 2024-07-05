const httpStatus = require("http-status");
exports.createdResponse = function (res, message, data) {
    const response = {
        message,
        data
    }
    return res.status(httpStatus.CREATED).json(response)
}
exports.successResponse = function (res, message, data) {
    const response = {
        message,
        data
    }
    return res.status(httpStatus.OK).json(response)
}
exports.sendResponse = function (res, { status, message, data }) {
    const response = {
        status,
        message,
        data
    };
    return res.status(status).json(response)
}
exports.unauthorizedResponse = function (res, message) {
    const response = {
        message,
    };
    return res.status(httpStatus.UNAUTHORIZED).json(response)
}
exports.noPrivilegesResponse = function (res, message) {
    const response = {
        message,
    };
    return res.status(httpStatus.FORBIDDEN).json(response)
}
exports.errorResponse = function (res, message, data) {
    const response = {
        message,
        data
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(response)
}
