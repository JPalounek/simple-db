var express = require('express');
var fs = require('fs');
var http = require('http');
var Storage = require('./src/Storage.js');
var Security = require('./src/Security.js');

var app = express.createServer();

Security = new Security();
Storage = new Storage();

app.get('/', function(req, res) {
	res.send('Simple-db is simple key value storage with friendly API, using JSON storage file and nodejs.');
	res.end;
});

app.get('/save/:key/:value', function(req, res) {
	var params = req.route.params;

	Security.isRequestSafe(req, function (result) {
		if(result == true) {
			var data = {};
			data.key = params.key;
			data.val = params.value;

			Storage.save('storage', data, function (result) {
				res.send(result);
			});
		} else {
			res.send('Your request was identified as attack, stop it please.');
		}

		res.end;
	});
});

app.get('/load/:key', function(req, res) {
	var params = req.route.params;

	Security.isRequestSafe(req, function (result) {
		if(result == true) {
			Storage.load('storage', params.key, function (result) {
				res.send(result);
			});
		} else {
			res.send('Your request was identified as attack, stop it please.');
		}

		res.end;
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});