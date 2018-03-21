// Agradeço a Deus pelo dom do conhecimento
// public/js/services/PedidoService.js

angular.module('contas').factory('Pedido', function($resource) {
	return $resource('/pedido');
});