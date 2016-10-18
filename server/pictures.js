
var Promise = require('bluebird');
var mongoose = require('mongoose');
var db = mongoose.connection;

mongoURI = 'mongodb://localhost/wishlistdb';
mongoose.connect(mongoURI);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});


var picSchema = mongoose.Schema({
//add price if time
  url: String
});

var Picture = mongoose.model('Picture', picSchema);

module.exports = Picture;
