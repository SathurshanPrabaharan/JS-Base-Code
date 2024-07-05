const apiResponse = require('./apiResponse')
exports.checkPrivilege = (privilege) => {
    return async (req, res, next) => {
        //TODO
        next();
    }
}
exports.checkUserRole = (userRole) => {
    return async (req, res, next) => {

        const { userGroups } = req.user

        if (!userGroups.some(userGroup => userGroup.key === userRole)) {
            return apiResponse.noPrivilegesResponse(res, 'You do not have permission for this action')
        }

        next();
    }
}
