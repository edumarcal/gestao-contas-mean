// Agradeço a Deus pelo dom do conhecimento
// app/routes/pedidos.js

module.exports = function(app) {

  var controller = app.controllers.pedidos;
  
  app.route('/pedido')
    .get(controller.list)
    .post(controller.save)
    .delete(controller.remove);

};
