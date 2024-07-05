const axios = require('axios');
const {serviceUrls} = require("../utils");
const serviceUrl = serviceUrls.getServiceUrls().PAYMENT_SERVICE
exports.sendRequest = async () => {
    console.log(serviceUrl)
}