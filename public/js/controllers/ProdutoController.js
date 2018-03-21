// Agradeço a Deus pelo dom do conhecimento
// public/js/controllers/ProdutoController.js

angular.module('contas').controller('ProdutoController', function($scope, $routeParams, $location, Produto) {

// Produto passado como parametro
  $scope.init = function() {
    if($routeParams.produtoId){
      Produto.get({ id: $routeParams.produtoId },
        function(produto) {
          $scope.produtos = produto;
          $scope.mensagem = { texto: 'Produto já cadastrado', classe: 'text-warning' };
        }, function(erro) {
  	  		$scope.mensagem = { texto: 'Não foi possível obter o produto.', classe: 'text-danger' };
  	  		console.log(erro);
  	  	});
    } else {
      $scope.produtos  = {};
    }
  }();

// Salvar produto
  $scope.produtos = new Produto();
  $scope.salvar = function() {
    $scope.produtos.$save()
    .then(function() {
      $scope.mensagem = { texto: 'Produto gravado com sucesso!', classe: 'text-success' };
      $scope.produtos = new Produto();
    }).catch(function(erro) {
      if(erro.status === 500)
        $scope.mensagem = { texto: 'Produto já existe', classe: 'text-warning'};
      else
        $scope.mensagem = { texto: 'Não foi possível salvar o produto', classe: 'text-danger'};
    });
  };

//Limpar os campos
  $scope.limpar = function() {
    $scope.produtos = new Produto();
    $scope.mensagem = { texto: '' };
    $location.path('/produto');
  };

//Obtem o produto pelo codigo
  $scope.obter = function() {
    //console.log($scope.produtos.codigo);
      Produto.get({ id : $scope.produtos.codigo },
        function(produto) {
          $scope.produtos = produto;
          $scope.mensagem = { texto: 'Produto já existe', classe: 'text-info' };
        }, function(erro) {
  	  		$scope.mensagem = { texto: 'Não foi possível obter o produto.', classe: 'text-info' };
  	  		console.log(erro);
  	  	});
  };

});
