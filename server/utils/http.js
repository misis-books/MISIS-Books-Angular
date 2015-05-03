var https = require('https');
var http = require('http');
var bl = require('bl');

module.exports = {
    get: function(url, callback, secure) {
        var driver = secure ? https : http,
            result = '';
        driver.get(url, function(res) {
            res.setEncoding('utf8');

            res.pipe(bl(function(err, data) {
                result += data.toString();
            }));

            res.on('error', function(e) {
                callback(e);
            });

            res.on('end', function() {
                callback(null, result);
            });
        });
    }
};
