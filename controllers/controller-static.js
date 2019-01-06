/*Not in use.*/

var fs = require('fs');

module.exports.get = function (req, res) {
    var comic = fs.readFileSync('./data/comics/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(comic);
};

module.exports.save = function (req, res) {
    var comic = req.body;
    fs.writeFileSync('./data/comics/' + comic.id + '.json', JSON.stringify(comic));
    res.send(comic);
};

module.exports.getAll = function (req, res) {
    var path = './data/comics/';

    var files = [];
    try {
        files = fs.readdirSync(path);
    } catch (e) {
        console.log(e)
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};

module.exports.deleteComic = function (req, res) {
    fs.unlink('./data/comics/' + req.params.id + '.json', function () {
        res.send({
            status: "200",
            responseType: "string",
            response: "success"
        });
        console.log("controller: " + 'data/comics/' + req.params.id + '.json');
    });
};