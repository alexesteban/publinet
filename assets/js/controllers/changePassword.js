amarillasCtrl.controller('changepasswordCtrl', ['$scope', '$routeParams', '$http','$location',
  function($scope,$routeParams,$http,$location) {
    $scope.Enviada = 0;

    $scope.updPassword = function(){

        $scope.success = "";
        if ($scope.passOne && $scope.PassTwo) {
          if ($scope.passOne == $scope.PassTwo) {

            $http.post("servicios/resetPassword.php", {'passOne': $scope.passOne,'PassTwo': $scope.PassTwo,'guid': $routeParams.guid})
              .success(function(respuesta){

                if (respuesta) {
                  if (respuesta.error) {
                    $scope.error = respuesta.error;
                  }else{
                    $scope.error = "";
                    $scope.Enviada = 1;

                  }
                }else{
                  $scope.error = "La contraseña no se pudo actualizar" ;
                }

              });


          }else{
            $scope.error = "Las contraseñas no coinciden";
          }
        }else{
          $scope.error = "Los campos son obligatorios";
        }
      };

  }]);
