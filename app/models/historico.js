// Agradeço a Deus pelo dom do conhecimento
// app/models/historico

var mongoose = require('mongoose');

module.exports = function() {

  var schema = mongoose.Schema({
/*
    pedidos : {
      type : mongoose.Schema.Pedidos
    }
*/
  });

  return mongoose.model('Historico', schema);
};
