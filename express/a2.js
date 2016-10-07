var a = require('./a1');
var obj={
    get:function(req,res){
        console.log(req.body);
        console.log(req.query);
        console.log(req.params.id);
       // a.get("",function (data, response) {console.log(data);});
        //res.send("103");
        
        //http://ip-api.com/json
        a.get('http://localhost:3000/api/show',function (data, response) {
                    res.send(data);
            });
    }
};
module.exports=obj;