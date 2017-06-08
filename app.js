(function () {

    // bring in the express library to use
    const express = require('express');
    // app = whatever express function returns
    const app = express();

    // default route
    app.get('/', function (req, res) {
        res.send("<div>Hello world</div>");
    })

    app.get('/stuff', function (req, res) {
        res.send('Hello World stuffy!');
    })

    app.post('/', function (req, res) {
        res.send('Got a POST request');
    })

    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user');
    })

    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user');
    })

    // return list of pets
    app.get('/api/pets', function (req, res) {
        res.json({
            "data": {
                "pets": [
                    {
                        "id": 1,
                        "name": "Fluffy",
                        "age": 5,
                        "uri": "/api/pets/1"
      }, {
                        "id": 2,
                        "name": "Bob",
                        "age": 6,
                        "uri": "/api/pets/2"
      }
    ]
            }
        });
    });

    // return specific pet requested
    app.get('/api/pets/1', function (req, res) {
        res.json({
            "id": 1,
            "name": "Fluffy",
            "age": 5,
            "type": "dog"
        });
    });

    // return specific pet requested
    app.get('/api/pets/2', function (req, res) {
        res.json({
            "id": 2,
            "name": "Bob",
            "age": 6,
            "type": "cat"
        });
    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })

})();
