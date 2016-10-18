
var Promise = require('bluebird');
var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/wishlistdb';
mongoose.connect(mongoURI);
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});


var picSchema = mongoose.Schema({
//add price if time
  url: String
});

var Picture = mongoose.model('Picture', picSchema);

module.exports.Picture = Picture;
module.exports.db = db;
