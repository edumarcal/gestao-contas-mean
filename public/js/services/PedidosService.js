// Agradeço a Deus pelo dom do conhecimento
// public/js/services/PedidosService.js

angular.module('webgcontas').factory('Pedidos', function($resource) {
  return $resource('/principal');
});
