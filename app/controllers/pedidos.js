// Agradeço a Deus pelo dom do conhecimento
// app/controllers/pedidos.js

var santize = require('mongo-sanitize');

module.exports = function(app) {

  var controller = {};
  var Pedidos = app.models.pedidos;

  controller.list = function(req, res) {
    Pedidos.find().exec().then(
      function(pedido) {
        res.json(pedido);
      }, function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  controller.save = function(req, res) {
    Pedidos.create(req.body).then(
      function(pedido) {
        res.status(201).json(pedido);
      },
      function (erro) {
        res.status(500).json(erro);
      }
    );
  };

//Adicina no histórico | status = 1
  controller.remove = function(req, res) {
    var pedido = santize(req.body);
    pedido.status = 1;
    res.status(204).json(pedido);
  };

//TODO: ver se a lógica estar correta
  controller.update = function(req, res) {

    var pedidoDados = santize(req.body);
    var _id = pedidoDados.id;

    Pedidos.findByIdAndUpdate(_id, pedidoDados).exec().then(
      function(pedido) {
        res.json(pedido);
      },function (erro) {
        res.status(500).json(erro);
      }
    );
  };

return controller;
};
