var comicsController = function (Comic) {

    var get = function (req, res) {
        var query = {};

        Comic.find(query, function (err, comics) {
            if (err)
                console.log(err);
            else
                res.send(comics);
        });
    };

    return {
        get: get
    }

}

module.exports = comicsController;