const express = require('express');
const routes = require('./api/login_api.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//express app
const app = express();

//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/isuue_tracker',{useNewUrlParser: true});

// middleware to handle POST requests
app.use(bodyParser.json());

// //middleware to handle routes
app.use('/api',routes);

//Middleware to handle errors
app.use(function(err,req,res,next){
    // console.log(err);
    res.send({error: err.message});
});

app.listen(4000,function(){
    console.log('server is up!');
})