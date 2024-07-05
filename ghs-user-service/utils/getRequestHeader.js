function getRequestHeader(iapToken) {
    return {
        headers: {
            Authorization: iapToken
        }
    };
}

module.exports = getRequestHeader
