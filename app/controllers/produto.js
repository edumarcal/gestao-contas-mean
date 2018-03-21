// Agradeço a Deus pelo dom do conhecimento
// app/controllers/produto.js

module.exports = function(app) {
  var controller = {};
  var Produto = app.models.produto;

//Salvar o produto
  controller.salvar = function(req, res) {
    var dados = {
      "codigo" : req.body.codigo,
      "descricao" : req.body.descricao
    };

    //console.log(dados.codigo + '\t'+ dados.descricao);

    Produto.create(req.body).then(
      function(produto) {
        res.json(produto);
      }, function(erro) {
        console.log(erro);
        res.status(500).json(erro);
      }
    );
  };

//Obtem apenas um produto
  controller.obter = function(req, res) {
   var codigo = parseInt(req.query.id);
   //var _id = req.query.id;
   //console.log(codigo);
   //console.log(typeof(codigo));

     Produto.findOne({ 'codigo': codigo }).exec().then(
      //Produto.findById(_id).exec().then(
        function(produto) {
          if(!produto) res.status(404).send("Produto não encontrado");
          res.json(produto);
          //  console.log('-------');
          //  console.log(produto);
          //  console.log('-------');
        },
        function(erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
      );
  };

  return controller;

};