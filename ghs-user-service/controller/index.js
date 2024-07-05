const express = require('express');
const router = express.Router();


const initial = require('./initial')


router.use('/initial', initial)


module.exports = router