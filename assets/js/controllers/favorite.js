amarillasCtrl.controller('favoriteCtrl', ['$scope', '$routeParams','$http','$cookies','$mdDialog',
  function($scope, $routeParams,$http,$cookies,$mdDialog) {

$scope.init = function(idEmpresa){

  if ($cookies.get('logued') && $cookies.get('logued') !== '') {

    $http.post("servicios/isFavorite.php", {'idEmpresa': idEmpresa,'guid': $cookies.get('logued')})
      .success(function(respuesta){

      if (respuesta === 'true') {
        $scope.isFavorite = true;
      }else{
        $scope.isFavorite = false;
      }

      });

  }else {
    $scope.isFavorite = false;
  }
};

$scope.updFavorite = function(idEmpresa) {
  if ($cookies.get('logued') && $cookies.get('logued') !== '') {

    $http.post("servicios/updFavorite.php", {'idEmpresa': idEmpresa,'guid': $cookies.get('logued')})
      .success(function(respuesta){

        if (respuesta.upd) {
          $mdDialog.show(
          $mdDialog.alert()
             .clickOutsideToClose(true)
             .title('Aviso')
             .textContent(respuesta.upd)
             .ok('Ok')
          );
          $scope.init(idEmpresa);
        }else{
          $mdDialog.show(
          $mdDialog.alert()
             .clickOutsideToClose(true)
             .title('Error')
             .textContent('Error Desconocido')
             .ok('Ok')
          );
        }

      });

  }else {
    $mdDialog.show(
     $mdDialog.alert()
       .clickOutsideToClose(true)
       .title('Inicia Sesión')
       .textContent('Para poder agregar a favoritos, debes iniciar sesión')
       .ok('Entendido!')
        );
      }
  };


  }]);
