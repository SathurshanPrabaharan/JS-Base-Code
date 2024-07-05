const apiResponse = require('./apiResponse')
const getCredentials = require("./getCredentials");
const getFirebaseAuth = require("./getFirebaseAuth");
const {TOKEN_EXPIRED} = require("./constants");


async function verifyToken (req,res,next) {

    const { authorization } = req.headers
    
    if(!authorization || authorization.startsWith("Bearer ")) {
        return apiResponse.unauthorizedResponse(res,"Token is required for authentication")
    }

    try {
        // const credentials = await getCredentials();
        // const firebaseAuth = await getFirebaseAuth(credentials);
        // req.userGroups = [];
        // const token = authorization.substring(7,authorization.length);
        // const claims = await firebaseAuth.verifyIdToken(token);
        // req.user  = {
        //     id: claims.user ? claims.id : '',
        //     userGroups: claims.userGroups ? claims.userGroups : [],
        //     email: claims.email ? claims.email : ''
        // }
        next();

    }catch (err) {
        if(err.errorInfo && err.errorInfo.code === TOKEN_EXPIRED.CODE) {
            return apiResponse.unauthorizedResponse(res, TOKEN_EXPIRED.MESSAGE)
        }

        return apiResponse.unauthorizedResponse(res,"Invalid Token")
    }
}


module.exports = verifyToken