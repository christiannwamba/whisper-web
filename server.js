var express = require('express');
var Config = require('./config/env');
var config = new Config();

var app = express();

var port = process.env.PORT || 4000;
var env = process.env.NODE_ENV;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');

app.get('/', function (req, res) {
    res.render('pages/index.ejs', {
        jsFiles: config.js,
        cssFiles: config.css
    });
});

app.get('/threads', function (req, res) {
    res.render('thread.ejs');
});

app.listen(port);
console.log('app @ ' + port + ' using ' + env);