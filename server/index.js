
const express = require('express');
// const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
// const cors = require('cors');
var path = require('path');

var Picture = require('./pictures').Picture;
var db = require('./pictures').db;


var publicPath = path.resolve(__dirname, 'src');




// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.static('./src'));

app.get('/', function (request, response){
  var uri = request.body.url; //"http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg";
  Picture.findOne({ url: uri })
    .then(function(found) {
    	console.log(found);
      if (found === undefined) {
      	console.log('not found saving now');
      	var newPic = new Picture({url: uri});
      	newPic.save().then(function(newPic) {
      	  res.status(200).send(newPic);
      	});
      } else {
      	response.send(found);
      }
    })
})

// app.post('', function(request, response) {
//   var uri = "http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg";//request.body.url;
//   var pic = new Picture({url: uri});
//   pic.save(function(err) {
//   	if (err) {
//   	  response.send('error saving!');
//   	} else {
//   	  response.send('success posting');
//   	}
//   });
// })
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
// })

const server = http.createServer(app);

server.listen(port);
console.log("Server listening on: ", port);


