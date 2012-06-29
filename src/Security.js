var fs = require('fs');

var Security = function () {};

Security.prototype.isRequestSecure = function(req, cb) {
	console.log('Hard to judge ' + req.headers);
	cb(true);
};

module.exports = Security;