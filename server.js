var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(env === 'development') {
    console.log('developmnet');
    mongoose.connect('mongodb://localhost/comicsApi');
  } else {
      console.log('production');
    mongoose.connect('mongodb://comicsApp:comicsAppPW1@ds145325.mlab.com:45325/comicsapi');
  }

var Comic = require('./models/comicModel');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

comicRouter = require('./routes/comic-routes')(Comic);

app.use('/', comicRouter);

var port = process.env.PORT || 8000;

app.listen(port);
console.log('Listening on port ' + port + '...');

module.exports = app;