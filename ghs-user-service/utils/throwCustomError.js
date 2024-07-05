function throwCustomError(status, message) {
    throw {
        custom: {
            status,
            message,
            error: new Error()
        }
    }
}

module.exports = throwCustomError
