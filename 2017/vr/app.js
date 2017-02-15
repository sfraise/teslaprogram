var express = require('express');

var app = express();



app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//Routes

//Home
app.get('/', routes.home);

/*** SCENES ***/
//Auditorium 1
app.get('/auditorium-1', function (req, res) {
    res.render('scenes/auditorium-1');
});
//Gym 1
app.get('/gym-1', function (req, res) {
    res.render('scenes/gym-1');
});
//Hall 1
app.get('/hall-1', function (req, res) {
    res.render('scenes/hall-1');
});
//Library 1
app.get('/library-1', function (req, res) {
    res.render('scenes/library-1');
});
//Lobby 1
app.get('/lobby-1', function (req, res) {
    res.render('scenes/lobby-1');
});

//  notFound
app.get('*', routes.notFound);

app.listen(3000, function() {
    console.log("The application is running on localhost:3000");
});