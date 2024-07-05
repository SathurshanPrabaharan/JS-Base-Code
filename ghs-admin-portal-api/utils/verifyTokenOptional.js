const apiResponse = require('./apiResponse')
const getCredentials = require("./getCredentials");
const getFirebaseAuth = require("./getFirebaseAuth");
const {TOKEN_EXPIRED} = require("./constants");


async function verifyToken (req,res,next) {
    const { authorization } = req.headers
    
    if(!authorization) {
        next();
        return ;
    }

    try {
        const credentials = await getCredentials();
        const firebaseAuth = await getFirebaseAuth(credentials);
        req.userGroups = [];
        const token = authorization.substring(7,authorization.length);
        const claims = await firebaseAuth.verifyIdToken(token);
        req.user  = {
            uid: claims.uid,
            id: claims._id ? claims._id : '',
            userGroups: claims.user_roles ? claims.user_roles : [],
            email: claims.email ? claims.email : '',
            company: claims.company ? claims.company : ''
        }
        next();
        
    }catch (err) {
        if(err.errorInfo && err.errorInfo.code === TOKEN_EXPIRED.CODE) {
            return apiResponse.unauthorizedResponse(res, TOKEN_EXPIRED.MESSAGE)
        }

        return apiResponse.unauthorizedResponse(res,"Invalid Token")
    }
}

module.exports = verifyToken