const express = require('express')
const router = express.Router()
const {verifyToken} = require("../../utils");


const initial = require('./initial');

router.get('/',verifyToken,initial)


module.exports = router