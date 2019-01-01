var express = require('express');
var mongoose = require('mongoose');
var app = express();

var db = mongoose.connect('mongodb://localhost/comicAPI');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./routes/comic-routes')(app);

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');