// Agradeço a Deus pelo dom do conhecimento
// public/js/main.js

angular.module('contas', [ 'ngRoute', 'ngResource' ]).config(function ($routeProvider, $httpProvider) {

  $routeProvider.when('/produto', {
    templateUrl : 'partials/produto.html',
    controller : 'ProdutoController'
  });

  $routeProvider.when('/produto/:produtoId', {
    templateUrl : 'partials/produto.html',
    controller : 'ProdutoController'
  });

  $routeProvider.when('/principal', {
  	templateUrl : 'partials/principal.html',
  	controller : 'PrincipalController'
  });

  $routeProvider.when('/pedido', {
  	templateUrl : 'partials/pedido.html',
  	controller : 'PedidoController'
  });

  $routeProvider.when('/pedido/pedidoId', {
  	templateUrl : 'partials/pedido.html',
  	controller : 'PedidoController'
  });

  $routeProvider.otherwise({redirectTo : '/principal'});
});
