require('dotenv').config();
const {ENV:SERVER_ENV,SERVICES} = require("./constants");
const { GOOGLE_CLOUD_PROJECT,ENV } = process.env
exports.getServiceUrls = function () {
    if(process.env.ENV === SERVER_ENV.LOCAL) {
        return {
            PAYMENT_SERVICE : `http://localhost:8081/api`
        }
    }
    return  {
        PAYMENT_SERVICE : `https://${SERVICES.PAYMENT_SERVICE}-dot-${GOOGLE_CLOUD_PROJECT}.ue.r.appspot.com/api`,
    }
}