const ENV = {
    LOCAL:'local'
}

const SERVICES = {
    PAYMENT_SERVICE : 'ghs-payment-service'
}

const TOKEN_EXPIRED = {
    CODE: 'auth/id-token-expired',
    MESSAGE: 'token expired'
}

module.exports = {
    ENV,
    SERVICES,
    TOKEN_EXPIRED
}