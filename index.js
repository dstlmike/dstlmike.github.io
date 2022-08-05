var express = require('express');
var app = express();
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var moment = require('moment');
var port = 8080;

app.use(express.static('partials'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function(req, res) {
res.render('chat.ejs');
});

app.listen(port, function(req, res) {
  console.log('Server started on port: ' + port);
});
