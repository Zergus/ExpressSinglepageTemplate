let express = require('express');

let app = express();

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port localhost:3000!');
});

module.exports = app;
