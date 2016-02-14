var express = require('express');

var app = express();

app.use(express.static('./public'));
//app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
//app.use(express.static(__dirname + '/node_modules/jquery/dist'));
//app.get('/', function (req, res){
//	res.send('Hello, world!')
//})

app.listen(8080);
console.log("Pearce, launched.");