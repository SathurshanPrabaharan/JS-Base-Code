const ENV = {
    LOCAL: 'local'
}
const SERVICES = {
    PAYMENT_SERVICE: 'ghs-payment-service'
}
const TOKEN_EXPIRED = {
    CODE: 'auth/id-token-expired',
    MESSAGE: 'token expired'
}
const DB_COLLECTIONS = {
    USERS: 'users',
}
const SYSTEM_ACTION = 'SYSTEM';


const MONGODB_CONFIG = {
    INSERT_MANY_CHUNKS: 170
}
const CONFIGS = {
    VERIFY_TOKEN_LENGTH: 75
}


module.exports = {
    ENV,
    SERVICES,
    TOKEN_EXPIRED,
    DB_COLLECTIONS,
    SYSTEM_ACTION,
    MONGODB_CONFIG,
    CONFIGS
}
