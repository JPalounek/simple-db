var fs = require('fs');

var Storage = function () {};

Storage.prototype.getStorage = function(name, cb) {
	cb();
};

Storage.prototype.save = function(storage, key, value, cb) {
	this.getStorage(storage, function () {
		console.log('Saving ' + key + ' -> ' + storage);
		cb('Saving ' + key + ' -> ' + storage);
	});
};

Storage.prototype.load = function(storage, key, cb) {
	this.getStorage(storage, function () {
		console.log('Loading ' + key);
		cb('Loading ' + key);
	});
};

module.exports = Storage;