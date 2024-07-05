const constants = require('./constants');
const getCredentials = require('./getCredentials');
const iapClient = require('./iapClient');
const apiResponse = require('./apiResponse');
const getServiceUrls = require('./getServiceUrls');
const getFirebaseAuth = require('./getFirebaseAuth');
const verifyToken = require('./verifyToken');
const { checkPrivilege } = require('./checkPrivilege');
const { getTimeStamps } = require('./getCollectionTimeStamp');
const throwCustomError = require('./throwCustomError');
const chunkArray = require('./chunkArray');
const getRequestHeader = require('./getRequestHeader');
const handleApiError = require('./apiErrorHandle');

module.exports = {
    constants,
    getCredentials,
    iapClient,
    apiResponse,
    serviceUrls: getServiceUrls,
    getFirebaseAuth,
    verifyToken,
    checkPrivilege,
    getTimeStamps,
    throwCustomError,
    chunkArray,
    getRequestHeader,
    handleApiError
}
