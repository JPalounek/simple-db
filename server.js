var express = require('express');
var fs = require('fs');
var http = require('http');
var Storage = require('./src/Storage.js');
var Security = require('./src/Security.js');

var app = express.createServer();

app.get('/', function(req, res) {
	res.send('Simple-db is simple key value storage with friendly API, using JSON storage file and nodejs.');
	res.end;
});

app.get('/save/:key/:value', function(req, res) {
	var params = req.route.params;

	Security.isRequestSecure(req, function (res) {
		if(res == true) {
			res.send();
		} else {
			res.send();
		}

		res.end;
	});
});

app.get('/load/:key', function(req, res) {
	var params = req.route.params;

	res.send();
   	res.end;
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});