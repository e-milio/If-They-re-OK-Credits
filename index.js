var express = require('express');
var app = express();
var Firebase = require('firebase');
var fbRef = new Firebase('https://if-theyre-ok.firebaseio.com');
var Mustache = require('mustache');

app.use(express.static(__dirname + '/public'))


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
