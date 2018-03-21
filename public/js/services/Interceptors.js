// Agradeço a Deus pelo dom do conhecimento
// public/js/services/Interceptors.js

angular.module('webgcontas').factory('Interceptors', function($location, $q) {

  var interceptors = {
    responseError : function (resposta) {
      if (resposta.status == 401) {
        $location.path('/auth');
      }
      return $q.reject(resposta);
    }
  };

  return interceptors;
});
