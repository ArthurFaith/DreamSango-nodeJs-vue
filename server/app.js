var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var routes = require('./route/route')(app);
//var multer  = require('multer');
//var upload = multer({ dest: 'upload/'});
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer());


var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
