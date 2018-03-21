// Agradeço a Deus pelo dom do conhecimento
// public/js/services/ProdutoService.js

angular.module('contas').factory('Produto', function($resource) {
  return $resource('/produto');
});
