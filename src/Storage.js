var fs = require('fs');

var Storage = function () {};

Storage.prototype.getStorage = function(name, cb) {
	fs.readFile('data/' + name + '.json', function (err, data) {
		if (err) throw err;
		cb(JSON.parse(data));
	});
};

Storage.prototype.saveStorage = function(name, data, done) {
	fs.writeFile('data/' + name + '.json', JSON.stringify(data), function (err) {
  		if (err) throw err;
  		done();
	});
};

Storage.prototype.save = function(storage, data, cb) {
	this.getStorage(storage, function (data) {
		data.push(data);

		console.log('Saving ' + data.key + ' -> ' + data.val + ' to ' + storage);
		this.saveStorage(storage, data, function () {
			cb('Saving ' + data.key + ' -> ' + data.val + ' to ' + storage);
		});
	});
};

Storage.prototype.load = function(storage, key, cb) {
	this.getStorage(storage, function (data) {
		console.log('Loading ' + key);

		for (var i in data) {
			if(data[i].key == key) {
				cb(data[i].val);
			}
		}

		cb('Loading ' + key);
	});
};

module.exports = Storage;