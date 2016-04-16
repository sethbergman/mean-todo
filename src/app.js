'use strict';

var express = require('express');
var favicon = require('serve-favicon');

var app = express();

app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use('/', express.static('public'));

var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
