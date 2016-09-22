
var a2 = require('./a2');
var express = require('express');
var path = require('path');
var app = express();
//
var api = express.Router();
var appTemp = express.Router();


appTemp.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
appTemp.get('/nrp', function (req, res) {
  res.sendFile(path.join(__dirname + '/nrp/index.html'));
});


//api.get('/a/:id',a.get);
api.get('/a/:id',a2.get);


app.listen(3000);
app.use('/api', api);
app.use('/', appTemp);