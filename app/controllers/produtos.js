// Agradeço a Deus pelo dom do conhecimento
// app/controllers/pedidos.js

var santize = require('mongo-sanitize');

module.exports = function(app) {

  var controller = {};
  var Produtos = app.models.produtos;

  controller.listar = function(req, res) {
    Produtos.find().exec().then(
      function(produto) {
        res.json(produto);
      }, function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.salvar = function(req, res) {
    console.log(req.body);
    Produtos.create(req.body).then(
      function(produto) {
        res.status(201).json(produto);
      },
      function (erro) {
        res.status(500).json(erro);
      }
    );
  };

//Adicina no histórico | status = 1
  controller.remover = function(req, res) {
    var produto = santize(req.body);
    Produtos.remove(produto).exec().then(
      function() {
        res.status(204).end();
      },
      function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.atualizar = function(req, res) {

    var produtoDados = santize(req.body);
    var _id = produtoDados.id;

    Produtos.findByIdAndUpdate(_id, produtoDados).exec().then(
      function(produto) {
        res.json(produto);
      },function (erro) {
        res.status(500).json(erro);
      }
    );
  };

  return controller;

};
