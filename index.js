//var dotenv = require('dotenv');
var express = require('express');
var app = express();
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var moment = require('moment');
var GMAIL_USER = process.env.GMAIL_USER;
var GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;
var bodyParser = require('body-parser');
var date = moment().utcOffset(-240).format('LLLL');
var port = Number(process.env.NODEJS_SERVICE_PORT || process.env.PORT || 8080 || 3002);
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static('partials'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function(req, res) {
res.render('chat.ejs');
});

app.get('/support', function(req, res) {
var date = moment().utcOffset(-240).format('LL');
var time = moment().utcOffset(-240).format('LTS');
  res.render('contact.ejs');
});

app.post('/support', function(req, res) {
var date = moment().utcOffset(-240).format('LL');
var time = moment().utcOffset(-240).format('LTS');

var Transport = nodemailer.createTransport({


service: 'gmail',
auth: {
user: GMAIL_USER,
pass: GMAIL_PASSWORD
}
});


var to = "alexdeabot@gmail.com";
var subject = "Contact Form";
var name = req.body.name;
var email = req.body.email;
var reason = req.body.reason;
var text = "Name\n" + name + "\nEmail\n" + email + "\nReason for leaving\n" + reason; //" " + email + " " + reason;


var mailOptions = {


to: to,
from: 'alexdeabot@gmail.com',
subject: subject,
generateTextFromHTML: true,
text: text
};


Transport.sendMail(mailOptions, function(error, response) {
if (error) { // throw error; //{
console.log(error);
}
console.log(response);
//console.log(name + '\n' + email + '\n' + reason);

Transport.close();
});

 res.render('contact-ai.ejs');
});

app.listen(port, function(req, res) {
  console.log('Server started on port: ' + port);
});
