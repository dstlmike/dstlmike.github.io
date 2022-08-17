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

app.get('/support', function(req, res) {

res.render('contact.ejs');

});

app.post('/', function(req, res) {

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

var subject = "Question Request";

var name = req.body.name;

var email = req.body.email;

var reason = req.body.reason;

var text = "Name\n" + name + "\nEmail\n" + email + "\nQuestion\n" + reason; //" " + email + " " + reason;

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

//var msg = "There was an error sending email.";

//callback(true, msg, []);

//return msg;

}

console.log(response);

console.log('Question Alert!!\n' + name + '\n' + email + '\n' + reason);

Transport.close();

});

//var logg = date + ' ' + time + '\n' + ipp + '\n' + req.protocol + '://' + req.hostname + '\n' + req.url + '\n' + 'Location: {' + '\n' + 'City: ' + city + ', \n' + 'Contry: ' + country_name + ', \n' + 'Postal: ' + postal + '\n' + '},' + '\n' + 'Asn: {' + '\n' + 'Name: ' + name + ', \n' + 'Domain: ' + domain + '\n' + '},' + '\n' + 'Threat: {' + '\n' + 'is_threat: ' + is_threat + ', \n' + 'is_known_attacker: ' + is_known_attacker + ', \n' + 'is_known_abuser: ' + is_known_abuser + ', \n' + 'is_anonymous: ' + is_anonymous + '\n' + '};';

//  console.log(logg);

 res.render('chat.ejs');

});


app.listen(port, function(req, res) {
  console.log('Server started on port: ' + port);
});
