// Agradeço a Deus pelo dom do conhecimento
// app/routes/pedido.js

module.exports = function (app) {

	var controller = app.controllers.pedido;

	app.route('/pedido')
	.get(controller.listar)
	.post(controller.salvar)
	.put(controller.atualizar)
	.delete(controller.remover);

	//app.route('/principal').get(controller.listar);
	app.route('/pedido/:id').get(controller.obter);
};
