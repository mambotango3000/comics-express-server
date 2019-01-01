var path = require('path');
var comics = require('../controllers/controller-static');
var comicsDb = require('../controllers/controller-db');
var fs = require('fs');

module.exports = function (app) {
    app.get('/lib/comics/:id', comics.get);
    app.get('/lib/comics', comics.getAll);
    app.post('/lib/comics', comics.save);
    app.delete('/lib/comics/:id', comics.deleteComic);
    app.get('/', function(req, res) {
        res.send('Welcome.');
    });
}