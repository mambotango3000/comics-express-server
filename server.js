var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/comicsApi');

var Comic = require('./models/comicModel');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

comicRouter = require('./routes/comic-routes')(Comic);

app.use('/lib/comics', comicRouter);

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');

module.exports = app;