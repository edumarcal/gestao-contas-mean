// Agradeço a Deus pelo dom do conhecimento
// app/models/produto.js

var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    codigo : {
      type : Number,
      required : true,
      unique : true,
      distinct : true
    },
    descricao : {
      type : String,
      required : true
    }
  }, { versionKey: false });

  return mongoose.model('Produto', schema);
};