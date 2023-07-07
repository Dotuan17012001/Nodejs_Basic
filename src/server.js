import express from 'express'
import configViewEngine from './configs/viewEngine';
require('dotenv').config()
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;
configViewEngine(app)
app.get('/', function(req, res){
   res.render('index.ejs')
})
app.get('/wow', function(req, res){
    res.send("IT Wow???");
})

app.listen(port, () => {
    console.log(`server is running port:  http://localhost:${port}`);
})