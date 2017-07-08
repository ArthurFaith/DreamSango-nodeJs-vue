var express = require('express');
var app = express();
var fs = require("fs");
 
//var bodyParser = require('body-parser');
//var multer  = require('multer');
//var upload = multer({ dest: 'upload/'});

//app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/q', function (req, res) {
	var qq= [
	{
		name:'jhon',
		sex:'man'
	},
	{
		name:'father',
		sex:'woman'
	},
	{
		name:'mother',
		sex:'woman'
	}]
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
   res.end(JSON.stringify(qq));
})

var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})