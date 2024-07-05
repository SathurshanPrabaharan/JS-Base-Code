require('dotenv').config()
const PORT = process.env.PORT || 8080
async function start() {
    const express = require('express');
    const { errors } = require('celebrate');
    const controller = require('./controller')
    const { iapClient } = require('./utils')
    const cors = require('cors');
    const app = express();



    app.use(cors({ origin: true }));
    app.use(await iapClient);
    app.use(express.json());
    app.use('/api',controller)
    app.use(errors());

    app.listen(PORT, () => {
        console.log(`Node Server is listening to port ${PORT}`)
    })
}
start();
