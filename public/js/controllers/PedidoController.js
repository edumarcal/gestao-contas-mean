// Agradeço a Deus pelo dom do conhecimento
// public/js/controllers/PedidoController.js

angular.module('contas').controller('PedidoController', function($scope, $routeParams, $location, Pedido, Produto) {

	$scope.pedidos = new Pedido();
	$scope.produtos = new Produto();
/*
	$scope.pedidos.cliente = 'Eduardo Marçal'; //ok
	$scope.pedidos.datacompra = new Date('2013-01-01'); //ok
	$scope.pedidos.precoproduto = 1000;//ok
	$scope.pedidos.precorepresentante = 8000;//ok
	$scope.pedidos.ciclo = 80;//ok
	$scope.pedidos.parcelas = 5;//ok
	$scope.pedidos.produto = $scope.produtos;
//	$scope.produtos.codigo = 17601;
//	$scope.produtos.descricao = 'Produto de Limpeza';
*/

	$scope.salvar = function() {
/*
		console.log('cliente: '+$scope.pedidos.cliente);
		console.log('data: '+$scope.pedidos.datacompra);
		console.log('precoPro: '+$scope.pedidos.precoproduto);
		console.log('precoRep: '+$scope.pedidos.precorepresentante);
		console.log('ciclo: '+$scope.pedidos.ciclo);
		console.log('parcelas: '+$scope.pedidos.parcelas);
		console.log('codigo: '+ $scope.produtos.codigo);
		console.log('descricao: '+$scope.produtos.descricao);
		console.log($scope.pedidos);
*/
		$scope.pedidos.produto = $scope.produtos;
		$scope.pedidos.$save().then(function() {
				$scope.mensagem = { texto: 'Pedido gravado com sucesso!', classe: 'text-success' };
				$scope.pedidos = new Pedido();
			}
		).catch(function(erro) {
        	$scope.mensagem = { texto: 'Não foi possível salvar o pedido', classe: 'text-danger' };
        	console.log(erro);
      });
	};

	$scope.procurar = function() {
		Produto.query(function(produto){
			$scope.produto = produto;
		});
	};

	$scope.limpar = function() {
		$scope.pedidos = new Pedido();
		$scope.produtos = new Produto();
		console.log($scope.pedidos.cliente);
	};

	// Obtem o produto pelo codigo
  	$scope.obterProduto = function() {
		if($scope.produtos.codigo) {
      		Produto.get({ id: $scope.produtos.codigo },
		        function(produto) {
		          $scope.produtos = produto;
		        }, function(erro) {
		  	  		$scope.mensagem = { codigo: 'Não existe produto cadastrado', classe: 'text-danger' };
		  	  	}
		  	);
		} else {
			$scope.produtos = new Produto();
			$scope.mensagem = {codigo : ''};
		}
  };
});
