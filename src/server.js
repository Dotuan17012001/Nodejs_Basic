import express from 'express'
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routes/web'

require('dotenv').config()
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

// config post method, giup gui data tu client len server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app)
//init web route
initWebRoute(app)



app.listen(port, () => {
    console.log(`server is running port: http://localhost:${port}`);
})