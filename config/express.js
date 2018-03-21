// Agradeço a Deus pelo dom do conhecimento
// config/express.js

var helmet = require('helmet');
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

module.exports = function () {
  var app = express();
  app.set('port', 3001);
  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
	app.set('views','./app/views');

  app.use(bodyParser.urlencoded({ extended:true }));
	app.use(bodyParser.json());
	app.use(require('method-override')());

  app.use(cookieParser());
  app.use(session({
    secret : 'Meu Amor',
    resave : true,
    saveUninitialized: true
  }));

  app.use(helmet());
  app.disable('x-powered-by');
  app.use(helmet.hidePoweredBy({setTo: 'Java Forever'}));
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());

  load('models', {cwd : 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  app.get('*', function(req, res) {
    res.status(404).render('404');
  });

  return app;
};
