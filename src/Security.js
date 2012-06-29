var fs = require('fs');

var Security = function () {};

Security.prototype.isRequestSafe = function(req, cb) {
	console.log('Hard to judge ' + req.headers);
	cb(true);
};

module.exports = Security;