const { celebrate, Joi, Segments } = require('celebrate');
const {initApiSuccess} = require("../../service/initial");
const {apiResponse,checkPrivilege} = require("../../utils");


const isAuthorized = checkPrivilege('init');

async function initial (req, res) {
    try {
       const response = await initApiSuccess(req);
       apiResponse.successResponse(res,"Success Message", response)
    }catch (e) {
        if(e.custom) {
            return  apiResponse.sendResponse(res,e.custom)
        }
        console.log(e)
        apiResponse.errorResponse(res,'Internal Server Error',e.message)
    }
}

const validation = celebrate({
    [Segments.QUERY] : Joi.object().keys({
        generateError: Joi.boolean().default(false)
    })
});


module.exports = [isAuthorized,validation,initial]