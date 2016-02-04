var express = require('express');
var mongoose = require('mongoose');
var app = express();

//This is not an API - it is static
app.get('/', function (req, res){
  res.send('This is working');

});

app.listen('3000');
console.log('API is running on port 3000!');