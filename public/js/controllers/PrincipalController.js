// Agradeço a Deus pelo dom do conhecimento
// public/js/controllers/PrincipalController.js

angular.module('contas').controller('PrincipalController', function($scope, Pedido) {

  $scope.pedidos = []; //array de pedidos

  function buscarPedidos() {
      Pedido.query(function(pedidos) {
        $scope.pedidos = pedidos;
        console.log($scope.pedidos);
      }, function(erro) {
        console.log('Não foi possivel obter a lista de pedidos');
      });
  }

  $scope.init = function() {
    buscarPedidos();
  }();

});
