const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db= require('./config/db.js');
const apiRouter = require('./routes/apiRouter').router;
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use( function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,PATCH,DELETE,PUT,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
})
app.get('/', (req, res)=> {
        res.sendFile(__dirname + '/index.html');
    })
 app.use('/', apiRouter);   
app.listen(8000, (err)=> {
    if(!err)
        console.log('listening on 8000');
    else
        console.log('erreur');    
    })