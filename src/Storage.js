var fs = require('fs');

var Storage = function () {};

Storage.prototype.getStorage = function(name, cb) {
	fs.readFile('data/' + name + '.json', function (err, data) {
		if (err) throw err;
		if(data != '') {
			cb(JSON.parse(data));
		} else {
			cb();
		}
	});
};

Storage.prototype.saveStorage = function(name, data, done) {
	fs.writeFile('data/' + name + '.json', JSON.stringify(data), function (err) {
  		if (err) throw err;
  		done();
	});
};

Storage.prototype.recordExists = function(storage, key, cb) {
	for (var i in storage) {
		if(storage[i].key == key) {
			console.log('Record found by recordExists. Its ' + i + 'th record');
			cb(i);
		}
	}

	console.log('Record not found by recordExists');
	cb(false);
}

Storage.prototype.save = function(storage, data, cb) {
	this.getStorage(storage, function (item) {
		if(typeof item == 'undefined') {
			item = new Array();
			item.push(data);
		} else {
			/*
			Storage.prototype.recordExists(item, data.key, function (result) {
				console.log(typeof result);
				if(typeof result != 'string') {
					console.log('Not stored yet, creating new record.');
					item.push(data);
				} else {
					result = parseInt(result);
					console.log('Already stored, rewriting ' + result + 'th record from ' + item[result].val + ' to ' + data.val + '.');
					item[result].val = data.val;
				}
			});
			*/

			item.push(data);
		}

		console.log('Saving ' + data.key + ' -> ' + data.val + ' to ' + storage);
		Storage.prototype.saveStorage(storage, item, function () {
			cb('Saving ' + data.key + ' -> ' + data.val + ' to ' + storage);
		});
	});
};

Storage.prototype.load = function(storage, key, cb) {
	this.getStorage(storage, function (data) {
		console.log('Loading ' + key);

		for (var i in data.reverse()) {
			if(data[i].key == key) {
				cb(data[i].val);
			}
		}

		cb('failed');
	});
};

module.exports = Storage;