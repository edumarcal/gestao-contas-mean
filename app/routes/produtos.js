// Agradeço a Deus pelo dom do conhecimento
// app/routes/produtos.js

module.exports = function(app) {
  var controller = app.controllers.produtos;

  app.get('/', function(req, res) {
      res.render('index');
    });

  app.route('/produto').post(controller.salvar);

};
