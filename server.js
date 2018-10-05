// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const routes = require('./routes');
var bodyParser = require("body-parser");


const app = express();

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 3000;


// Sets up our server to parse our request body for usage
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://mongodb://user:google1@ds223343.mlab.com:23343/heroku_fflpdz1r",
    {
        useMongoClient: true
    }
);

// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
});