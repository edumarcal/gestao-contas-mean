// Agradeço a Deus pelo dom do conhecimento
// app/controllers/user.js

var qtdAcesso = 0;

module.exports = function(app) {

  var controller = {};
  var User = app.models.user;

  controller.isAuthenticated = false;

  controller.auth = function(req, res) {
    if (req.body.username == User.username && req.body.password == User.password) {
      res.status(200).json();
      controller.isAuthenticated = true;
    } else {
        res.status(401).json('Não autorizado');
        controller.isAuthenticated = false;
    }
  };

return controller;
};
