// Agradeço a Deus pelo dom do conhecimento
// app/routes/produto.js

module.exports = function(app) {
  var controller = app.controllers.produto;

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.route('/produto').get(controller.obter);
  app.route('/produto').post(controller.salvar);

  app.route('/produto/:id').get(controller.obter);

  //app.get('/produto/:id', function(req, res){
    //console.log(req.params.id);
  //});

};
