var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('index.html');
});


app.listen(port);

console.log('app @ ' + port);