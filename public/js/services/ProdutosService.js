// Agradeço a Deus pelo dom do conhecimento
// public/js/services/ProdutosService.js

angular.module('webgcontas').factory('Produtos', function($resource){
  return $resource('/produto');
});
