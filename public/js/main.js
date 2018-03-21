// Agradeço a Deus pelo dom do conhecimento
// public/js/main.js

angular.module('webgcontas', ['ngRoute', 'ngResource'])
                 .config(function($routeProvider, $httpProvider) {

  $httpProvider.interceptors.push('Interceptors'); //interceptors autenticação obrigatória

  $routeProvider.when('/', {
    templateUrl : 'partials/principal.html',
    controller : 'PedidosController'
  });

  $routeProvider.when('/produto', {
    templateUrl : 'partials/produto.html',
    controller : 'ProdutosController'
  });

  $routeProvider.when('/pedido', {
      templateUrl : 'partials/pedido.html',
      controller : 'PedidosController'
  });

  $routeProvider.when('/auth', {
    templateUrl : 'partials/autenticacao.html',
  });

  //$routeProvider.otherwise({redirectTo : '/list'});

});
