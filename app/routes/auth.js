// Agradeço a Deus pelo dom do conhecimento
// app/routes/auth.js

module.exports = function (app) {
 
  var controller = app.controllers.user;
 
  app.get('/auth', controller.auth);
  
};
