// Agradeço a Deus pelo dom do conhecimento
// config/database.js

var mongoose = require('mongoose');

module.exports = function (uri) {
  mongoose.connect(uri);
  
  mongoose.connection.on('connected', function() {
    console.log('Mongoose! Conectado em ' + uri);
  });
  
  mongoose.connection.on('desconnected', function() {
    console.log('Mongoose! Desconectado em ' + uri);
  });
  
  mongoose.connection.on('error', function(erro) {
    console.log('Mongoose! Error na Conectado ' + erro);
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log('Mongoose! Desconectado pelo término da aplicação');
      process.exit(0);
    });
  });
};
