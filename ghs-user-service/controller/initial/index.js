const express = require('express')
const router = express.Router()


const initial = require('./initial');


router.get('/', initial)


module.exports = router