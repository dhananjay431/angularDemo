var a = require('./a1');
var obj={
    get:function(req,res){
       // a.get("",function (data, response) {console.log(data);});
        //res.send("103");
        a.get('http://ip-api.com/json',function (data, response) {
                    res.send(data);
            });
    }
};
module.exports=obj;