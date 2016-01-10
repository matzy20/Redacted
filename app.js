//if unable to find module need to npm install -S (express, body-parser, jade)
//FOLLOW-UP with Tony on github commit issue
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));



app.use('/words', validateSlang, scrubMessage);

  var convertWords = {
    //needed to make "selfie" into a string to use replace below
    "selfie": 'self-portrait',
    "yummers": 'delicious',
    "outchea": 'are out here',
    "bruh": 'wow',
    "doge": 'pug',
    "cilantro": 'soap',
    "bae": 'loved one',
    "swag": 'style',
    "yolo": 'carpe diem',
  };

function validateSlang (req, res, next) {
  if (!req.body){
    res.status = 404;
    return res.send('Please provide a message');
  }
  return next();
}

function scrubMessage (req, res, next){
  var message = req.body.message;
  // console.log(typeof message);

  for (var key in convertWords){
    //dynamically creating RegExp to match all instances of a word, e.g. key
    //redefined message to be able to use replace, which works with strings
    message = message.replace(new RegExp(key, 'gi'), convertWords[key]);
  }
  res.send(message);
  return next();
}

app.get('/views', function (req, res){
  res.render('index.jade', function (err, html) {
    if(err){
      res.status = 404;
      return res.send('Error Error');
    }
    res.send(html);
  });
});
/*make sure index.jade has action pointing to where logic is, which was /words*/
app.post('/words', function (req, res){
  console.log(req.body);
  res.send('Post coming through');
});



var server = app.listen(3000, function (){
  var port = server.address().port;
  console.log('Server listening on Port ' + port);
});