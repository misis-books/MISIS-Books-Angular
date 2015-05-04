var http = require('../utils/http'),
    config = require('../config/config');

module.exports = {
    partials: function(req, res) {
        var filename = req.params.filename;
        if (!filename) return;
        res.render('../../app/partials/' + filename.replace(/(\.htm|\.html)$/i, ''));
    },
    index: function(req, res) {
        res.render('index/index');
    },
    oauth: function(req, res) {
        if (req.query.error) {
            res.render('oauth/fail', {
                error_description: 'Auth failed'
            });
            return;
        }

        var successAuth = false;
        switch (req.params.service) {
            case 'vk':
                if (req.query.code) {
                    var responseCode = req.query.code,
                        urlForAccessToken = 'https://oauth.vk.com/access_token?';
                    var params = {
                        redirect_uri: 'http://' + config.server.domains[config.server.cur_domain] + '/oauth/vk',
                        client_id: config.vkOauth.clientId,
                        client_secret: config.vkOauth.clientSecret,
                        code: responseCode
                    };
                    var pairParts = [];
                    for (var el in params) {
                        if (!params.hasOwnProperty(el)) continue;
                        pairParts.push(el + '=' + params[el]);
                    }
                    urlForAccessToken += pairParts.join('&');

                    http.get(urlForAccessToken, function(err, response) {
                        if (err) throw err;
                        var jsonResponse = JSON.parse(response);
                        console.log('[Vk auth success]', jsonResponse);

                        var misisBooksAuthUrl = 'http://twosphere.ru/api/auth.signin?vk_access_token='
                            + jsonResponse.access_token;
                        http.get(misisBooksAuthUrl, function(err, response) {
                            if (err) throw err;
                            var jsonResponse = JSON.parse(response);
                            if (jsonResponse && jsonResponse.response) {
                                var mbAccessToken = jsonResponse.response.access_token;
                                console.log('[Mb auth success]', jsonResponse.response.access_token);
                                res.setHeader("Set-Cookie", [
                                    "mb_access_token=" + mbAccessToken
                                ]);
                                successAuth = true;
                                res.render('oauth/success', {
                                    accessToken: mbAccessToken
                                });
                            } else {
                                res.render('oauth/fail', {
                                    error_description: jsonResponse.error.error_description
                                });
                            }
                        });
                    }, true);
                } else {
                    res.render('oauth/fail', {
                        error_description: 'An error during auth process period'
                    });
                }
                break;
            default:
                res.render('oauth/fail', {
                    error_description: 'Invalid service'
                });
                break;
        }
    },
    api: function(req, res) {
        var body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            var jsonObj = JSON.parse(body);
            sendApiRequest(jsonObj);
        });

        function sendApiRequest(params) {
            var apiMethod = req.params.method,
                apiUrl = 'http://twosphere.ru/api/' + apiMethod;
            var dataEncode = function(data) {
                if (data) {
                    var pairs = [];
                    for (var el in data) {
                        if (!data.hasOwnProperty(el)) continue;
                        pairs.push(el + '=' + data[el]);
                    }
                }
                return pairs.join('&');
            };
            apiUrl += '?' + dataEncode(params);
            console.log(apiUrl);
            http.get(apiUrl, function(err, response) {
                if (err) throw err;
                var jsonResponse = JSON.parse(response);
                res.send(jsonResponse);
            });
        }
    }
};