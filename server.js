var express = require('express');
var app = express();

app.get('/', function (req, res){
  res.send('This is working');

});

app.listen('3000');
console.log('API is running on port 3000');