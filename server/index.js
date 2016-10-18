var http = require('http');
var babel = require('babel-register');
var express = require('express');

//var db = require('/config/db');

//mongoose.connect(db.url);

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  //try to render index html page in clientr
  res.send('/');
});

// //let user post on homepage
// app.post('/', function(req, res) {
//   res.send();
// })


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
