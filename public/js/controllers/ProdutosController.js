// Agradeço a Deus pelo dom do conhecimento
// public/js/controllers/ProdutosController.js

angular.module('webgcontas').controller('ProdutosController', function(Produtos, $scope) {
  $scope.mensagem = {texto:'', classe: ''};

  $scope.produtoss = new Produtos();
  $scope.salvar = function () {
      $scope.produtoss.$save().then(
        function(){
          $scope.mensagem = {texto : 'Produto gravado com sucesso!', classe : 'text-success'};
          $scope.produto = new Produtos(); //Limpa o Produto
        }
      ).catch(function(erro) {
        $scope.mensagem = { texto : 'Não foi possível salvar o produto', classe : 'text-danger'};
        console.log(erro);
      });
  };

  Produtos.query(function(produto) {
    $scope.produto = produto;
  });

});
