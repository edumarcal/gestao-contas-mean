// Agradeço a Deus pelo dom do conhecimento
// app/routes/index.js

module.exports = function (app) {

  var controller = app.controllers.produtos;

  app.get('/', function (req, res) {
    res.render('index');
  });

};
