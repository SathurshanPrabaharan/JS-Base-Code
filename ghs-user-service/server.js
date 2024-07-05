require('dotenv').config()
const PORT = process.env.PORT || 8082
const mongoDB = require('./db/mongo-db');
async function start() {
    const express = require('express');
    const { errors } = require('celebrate');
    const controller = require('./controller')
    const cors = require('cors');
    const app = express();



    app.use(cors({ origin: true }));
    app.use(express.json());
    app.use('/api', controller)
    app.use(errors());

    await mongoDB.initializeConnection()
    app.listen(PORT, () => {
        console.log(`Node Server is listening to port ${PORT}`)
    })
}
start();
