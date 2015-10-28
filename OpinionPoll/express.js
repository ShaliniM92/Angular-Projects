
var express = require ('express');
var app= express();
var server= require('http').createServer(app);
var port= process.env.port||8080;

server.listen(port,function(){
console.log('Server listening');
})
//(process.env.PORT||8080);



app.use(express.static(__dirname + '/public'));