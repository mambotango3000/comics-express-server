var express = require('express');

var routes = function (Comic) {
    var comicRouter = express.Router();
    var comicsController = require('../controllers/comicsController')(Comic);

    comicRouter.route('/lib/comics/')
        .get(comicsController.getAll)
        .post(comicsController.save);

    comicRouter.route('/lib/comics/:id')
        .get(comicsController.get)
        .delete(comicsController.deleteComic);

    comicRouter.route('/lib/add/:term')
        .get(comicsController.searchForIssues);

    return comicRouter;

};

module.exports = routes;