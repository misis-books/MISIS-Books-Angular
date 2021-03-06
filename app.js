var express = require('express');
var path = require('path');

var debug = require('debug')('Angular-test:server');
var config = require('./server/config/config');
var routes = require('./server/routers/router');

var app = express();

app.use(express.static(path.join(__dirname, "app")));
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

/*
 * Указываем обработчик для шаблонов Angular
**/
app.get('/partials\/*:filename', routes.partials);

app.get('/', routes.index);
app.post('/api/:method', routes.api);
app.get('/oauth/:service', routes.oauth);

app.listen(config.server.port, function() {
    console.log('Express server listening on port ' + config.server.port);
});


//http://localhost:8888/?_escaped_fragment_=/