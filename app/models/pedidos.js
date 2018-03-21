// Agradeço a Deus pelo dom do conhecimento
// app/models/pedidos.js

var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function() {

  var schema = mongoose.Schema({
    cliente : {
      type : String,
      required : true
    },

    data : {
      type : Date,
      required : true
    },

    produto : {
      type : mongoose.Schema.ObjectId,
      ref: 'Produtos'
    },

    precoProduto : {
      type : Number,
      required : true
    },

    parcelas : {
      type : Number,
      required : true
    },

    ciclo : {
      type : Number,
      required : true
    },

    precoRepresentante : {
      type : Number,
      required : true
    },

    status : {
      type: Number,
      //aberto = 0 and fechado = 1
      default: 0

    }

  }, { versionKey: false });

  schema.plugin(findOrCreate);
  return mongoose.model('Pedidos', schema);
};
