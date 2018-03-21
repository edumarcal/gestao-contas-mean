// Agradeço a Deus pelo dom do conhecimento
// server.js

var http = require('http');
//var express = require('express');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/webgcontas');

http.createServer(app).listen(app.get('port'), function() {
  console.log('Servidor executando na porta '+ app.get('port'));
});
