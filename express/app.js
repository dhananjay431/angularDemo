
var a2 = require('./a2');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var api = express.Router();
var appTemp = express.Router();



api.use(bodyParser.urlencoded({extended: true}));

api.use(bodyParser.json());
api.use(function (req, res, next) {
 if(req.headers.csrf)
  next();
  else
   res.send({'error':404});
});
appTemp.use('/static', express.static('dist'));

mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var tbl2= new Schema({fname: String ,lname:String});
var tbl= new Schema({name: String,ref:tbl2 });
var Cat = mongoose.model('Cat', tbl);


function dist(field,conditions,callback){
    return Cat.distinct(field, conditions, callback);
}
// var field='name',conditions={name:{$ne:null}};
//   dist(field,conditions,function(err,data){
//       res.send(data);
//   });
function bsave(query,cb)
{
  var kitty = new Cat(query);
  return kitty.save(cb);
}
function show(query,cb){
    return Cat.find(query,cb);
}
appTemp.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
appTemp.get('/nrp', function (req, res) {
  res.sendFile(path.join(__dirname + '/nrp/index.html'));
});
api.get('/show',function(req,res){
  res.send({foo:132,bar:465});
});
api.post('/post',function(req,res){
  var query=req.body;
  console.log(query);
    show(query,function(err,data){
        var d=Date.now();
      res.set({  
        'csrf':d.toString()
        });
        console.log("sendData",data);
        res.send(data);     
});
});
//api.get('/a/:id',a.get);
api.get('/a/:id',a2.get);

api.post('/getAll',function(req,res){
   console.log(req.body);
   var arr=req.body;
   arr.ref={fname:req.headers.csrf};
      bsave(arr,function (err,bdata) {
      if (err) {
        console.log(err);
      } else {
     res.send(bdata);

      }
    });
});
api.get('/getAll',function(req,res){
  var query =req.params.data;
  show(query,function(err,data){
        var d=Date.now();
        res.set({  
        'csrf':d.toString()
});
        res.send(data);     
});
})

app.listen(3000);
app.use('/api', api);
app.use('/', appTemp);