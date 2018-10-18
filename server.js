// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
var bodyParser = require("body-parser");


const app = express();

// const routes = require('./routes/api-routes.js');

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 3000;


// Sets up our server to parse our request body for usage
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));
require('./routes/api-routes.js')(app);

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://user:google1@ds223343.mlab.com:23343/heroku_fflpdz1r",
    {
        useMongoClient: true
    }
);

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "./index.html"));
  });

// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
});