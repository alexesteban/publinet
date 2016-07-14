amarillasCtrl.controller('misEmpresasCtrl', ['$scope', '$routeParams','$http','$cookies',
  function($scope, $routeParams,$http,$cookies) {

    if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {

      /*Data favoritos*/
      $http.post("servicios/readMisEmpresas.php",{'guid': $cookies.get('logued')})
        .success(function(respuesta){

          if (respuesta) {
            $scope.misEmpresas = respuesta;

          }else{
              $scope.misEmpresas = "";
          }

        })
        .error(function(){
          $scope.misEmpresas = "Error: No hay Datos" ;
      });
      /*End Data favoritos*/

    }else{
      $location.path('/login');
    }


  }]);
