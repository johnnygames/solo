var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:9000');

var app = express();
var server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);

server.listen(9000, function () {
  console.log('starting');
});

// Expose app
exports = module.exports = app;