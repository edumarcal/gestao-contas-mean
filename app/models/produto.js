// Agradeço a Deus pelo dom do conhecimento
// app/models/produtos

var mongoose = require('mongoose');
//var findOrCreate = require('mongoose-findorcreate');

module.exports = function() {

  var schema = mongoose.Schema({
    codigo : {
      type : Number,
      unique : true,
      required : true
    },
    descricao : {
      type : String,
      required : true
    }
  }, { versionKey: false });

  //schema.plugin(findOrCreate);
  return mongoose.model('Produtos', schema);
};
