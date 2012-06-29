var fs = require('fs');

var Storage = function () {};


Storage.prototype.getStorage = function(name, cb) {
	cb();
};

Storage.prototype.save = function(storage, key, value) {
	this.getStorage(storage, function () {
		console.log('Saving ' + key + ' -> ' + storage);
	});
};

Storage.prototype.load = function(storage, key) {
	this.getStorage(storage, function () {
		console.log('Loading ' + key);
	});
};

module.exports = Storage;