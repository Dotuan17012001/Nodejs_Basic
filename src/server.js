import express from 'express'
import configViewEngine from './configs/viewEngine';
const path = require('path')

const app = express();
const port = 3001;
configViewEngine(app)
app.get('/', function(req, res){
   res.render('index.ejs')
})
app.get('/wowy', function(req, res){
    res.send("IT Wowy???");
})

app.listen(port, () => {
    console.log(`server is running port:  http://localhost:${port}`);
})