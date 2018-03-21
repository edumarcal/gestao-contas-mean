// Agradeço a Deus pelo dom do conhecimento
// public/js/controllers/PedidosController

angular.module('webgcontas').controller('PedidosController', function(Pedidos, $scope) {

  $scope.pedidos = [];
  $scope.filtro = '';
  //$scope.pedido = {};
  //$scope.pedido = new Pedidos();
/*
  if($routeParams.pedidoId){
    Pedidos.get( {id: $routeParams.pedidoId}, function (pedido) {
      $scope.pedido = pedido;
    }, function (erro) {
      console.log(erro);
    });
  }else{
    $scope.pedido = {};
  }

  $scope.pedido = new Pedidos();
*/
  $scope.save = function() {
    $scope.pedido.$save().then(function() {
        $scope.mensagem = { texto: 'Pedido salvo com sucesso' };
        $scope.pedido = new Pedidos(); //limpa o form
    }).catch(function(erro) {
      $scope.mensagem = { texto: 'Não foi possível salvar o pedido' };
    });
  };

  $scope.remove = function(pedido) {
    Pedidos.remove(pedido, function(erro) {
      console.log(erro);
    });
  };

  function search() {
    Pedidos.query(function(pedido) {
        $scope.pedidos = pedido;
    });
  }
//contructor
  $scope.init = function() {
    search();
  }();

});
