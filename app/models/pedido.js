// Agradeço a Deus pelo dom do conhecimento
// app/models/pedido.js

var mongoose = require('mongoose');

module.exports = function() {

  var schema = mongoose.Schema({
    cliente : {
      type : String,
      required : true
    },

    datacompra : {
      type : Date,
      required : true
    },

    precoproduto : {
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

    precorepresentante : {
      type : Number,
      required : true
    },

    status : {
      type: Number,
      //aberto = 0 and fechado = 1
      default: 0

    },

    produto : {
      type : mongoose.Schema.ObjectId,
      ref: 'Produto'
    }

  }, { versionKey: false });

  return mongoose.model('Pedido', schema);
};
