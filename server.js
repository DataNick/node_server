//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://localhost/rest_test');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//This is not an API - it is static
// app.get('/', function (req, res){
//   res.send('This is working');
// });

//Start server
app.listen('3000');
console.log('API is running on port 3000!');