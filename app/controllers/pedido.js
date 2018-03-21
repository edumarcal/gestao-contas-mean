// Agradeço a Deus pelo dom do conhecimento
// app/controllers/pedido.js

var santize = require('mongo-sanitize');

module.exports = function(app){

  var controller = {};
  var Pedido = app.models.pedido;

//Lista todos os pedidos ativos
  controller.listar = function(req, res) {
    var promisse = Pedido.find().exec().then(
      function(pedidos) {
        res.json(pedidos);
        console.log(pedidos);
        console.log('Testes sucesso');
      }, function(erro) {
        console.error(erro);
        res.status(404).json(erro);
      }
    );
  };

//Obter um pedido
  controller.obter = function(req, res) {
    var _id = req.params.id;
    Pedido.findById(_id).exec().then(
      function(pedido) {
        if(!pedido) throw new Error("Pedido não encontrado");
        res.json(pedido);
      }, function(erro) {
        res.status(404).json(erro);
      }
    );
  };

//Salva o pedido
  controller.salvar = function(req, res) {
    console.log(req.body);
    Pedido.create(req.body).then(
      function(pedido) {
        res.status(201).json(pedido);
      },
      function (erro) {
        res.status(500).json(erro);
      }
    );
  };

//Remove|Adicina no histórico | status = 1
  controller.remover = function(req, res) {
    var pedido = santize(req.body);
    pedido.status = 1;
    res.status(204).json(pedido);
  };

//Atualiza os dados cadastrado do pedido
  controller.atualizar = function(req, res) {
    var pedidoDados = santize(req.body);
    var _id = pedidoDados.id;

    Pedido.findByIdAndUpdate(_id, pedidoDados).exec().then(
      function(pedido) {
        res.json(pedido);
      },function (erro) {
        res.status(500).json(erro);
      }
    );
  };

return controller;
};