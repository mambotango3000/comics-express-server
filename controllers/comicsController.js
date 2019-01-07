var fetch = require('node-fetch');

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
                res.status(404).send('No comic found');
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

    var searchForIssues = function (req, result) {

        var apiKey = "?api_key=175d0376cf76c1545407d36174abeef59448a72d";
        var baseUrl = "https://comicvine.gamespot.com/api/";
        var parameters = "&format=json&sort=cover_date:asc&resources=issue&limit=100&query=";

        console.log('searchForIssues:' + req.params.term);

        fetch(baseUrl + 'search/' + apiKey + parameters + req.params.term)
            .then(res => res.json())
            .then(json => {
                console.log('results: ');
                console.log(json.results);
                result.send(json.results);
            });
    };



    return {
        getAll: getAll,
        save: save,
        deleteComic: deleteComic,
        get: get,
        searchForIssues: searchForIssues
    };

}

module.exports = comicsController;