//app/server.js

var http = require('http');
var app = require('./config/express')(app);
require('./config/database.js')('mongodb://localhost/contas');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server executando na porta '+ app.get('port'));
});
