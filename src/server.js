import express from 'express'
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routes/web'
import connection from './configs/connectdb'

require('dotenv').config()
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

//setup view engine
configViewEngine(app)
//init web route
initWebRoute(app)



app.listen(port, () => {
    console.log(`server is running port: http://localhost:${port}`);
})