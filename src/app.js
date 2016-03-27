'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

var server = app.listen(5000, function () {
  console.log('Server running at 0.0.0.0:' + server.address().port)
})
