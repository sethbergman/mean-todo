'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

var server = app.listen(5000, function () {
  console.log('Server running at 0.0.0.0:' + server.address().port)
})
