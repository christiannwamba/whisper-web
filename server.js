var express = require('express');

var app = express();

var port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');

app.get('/', function (req, res) {
    res.render('pages/index.ejs');
});

app.get('/threads', function (req, res) {
    res.render('thread.ejs');
});


app.listen(port);

console.log('app @ ' + port);