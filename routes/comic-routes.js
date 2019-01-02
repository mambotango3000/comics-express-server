var express = require('express');

var routes = function(Comic) {
    var comicRouter = express.Router();
    var comicsController = require('../controllers/controller-static');

    /*Plugin for the controller above when implemented.
    var comicsController = require('../controllers/comicsController')(Comic);*/

    comicRouter.route('/')
        .get(comicsController.getAll)
        .post(comicsController.save);

    comicRouter.route('/:id')
        .get(comicsController.get)
        .delete(comicsController.deleteComic);

    return comicRouter;

};

module.exports = routes;