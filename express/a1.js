var Client = require('node-rest-client').Client;
var client = new Client();
var obj={
    get:function(data,success){
        client.get(data,"",success);
    }
}
module.exports=obj;