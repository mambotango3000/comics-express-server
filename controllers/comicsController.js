/* NOT IN USE */

var comicsController = function (Comic) {

    var getAll = function (req, res) {
        var query = {};
        Comic.find(query, function (err, comics) {
            if (err)
                console.log(err);
            else
                res.send(comics);
        });
    };

    var save = function (req, res) {
        var comic = new Comic(req.body);
        if (!req.body.id) {
            res.status(400);
            res.send('id is required');
        } else {
            comic.save();
            res.status(201);
            res.send(comic);
        }
    };

    var get = function (req, res) {
        var query = Comic.where({
            id: req.params.id
        });
        query.findOne(function (err, comic) {
            if (err)
                res.status(500).send(err);
            else if (comic) {
                res.json(comic);
            } else {
                res.status(404).send('no comic found');
            }
        });
    };

    var deleteComic = function (req, res) {
        var query = Comic.where({
            id: req.params.id
        });
        query.findOne(function (err, comic) {
            if (err)
                res.status(500).send(err);
            else if (comic) {
                comic.remove(function (err) {
                    if (err)
                        res.status(500).send(err);
                    else {
                        res.send({
                            status: "200",
                            responseType: "string",
                            response: "success"
                        });
                    }
                });
            } else {
                res.status(404).send('no comic found');
            }
        });
    };



    return {
        getAll: getAll,
        save: save,
        deleteComic: deleteComic,
        get: get
    };

}

module.exports = comicsController;