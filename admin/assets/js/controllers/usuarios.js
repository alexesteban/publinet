cmsCtrl.controller('usuariosCtrl', ['$scope','$routeParams','$http','$mdDialog',
function($scope,$routeParams,$http,$mdDialog) {

  $scope.registrarUsuario = function(){
    $scope.error = "";
    $scope.success = "";
      if ($scope.nombres && $scope.apellidos && $scope.password && $scope.pass && $scope.email) {
        if ($scope.pass == $scope.password) {

          var mail = $scope.email;

          if ($scope.isValidEmail(mail)) {
            var guid = $scope.createGuid();

            $http.post('servicios/insertUsuario.php', {'nombres': $scope.nombres, 'apellidos': $scope.apellidos, 'email': $scope.email, 'password': $scope.pass, 'guid':guid})
                .success(function(data) {

                  if(data.error){
                      $scope.error = data.error;
                  }else{
                      $scope.success = "El usuario fué creado";
                      $scope.readUsuarios();
                  }

                }).error(function(data, status) { // called asynchronously if an error occurs
              // or server returns response with an error status.
              $scope.errors.push(status);
            });
          }else{
            $scope.error = "El Email es inválido";
          }

        }else{
            $scope.error = "El password no es igual";
        }
      }else{
          $scope.error = "Todos los campos son obligatorios";
      }

  };

  $scope.delUsuario = function(ev,id){

    var confirm = $mdDialog.confirm()
          .title('Eliminar Usuario')
          .textContent('Estas seguro que deseas eliminar este usuario?')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('ELIMINAR')
          .cancel('CANCELAR');
    $mdDialog.show(confirm).then(function() {

      /*Delete Usuario*/
      $http.post('servicios/delUsuario.php',{'id':id})
          .success(function(data) {

            if(data.error){
                $scope.UsError = data.error;
            }else{
                $scope.UsSuccess = "Has Eliminado el Usuario";
                $scope.readUsuarios();
            }

          }).error(function(data, status) { // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.errors.push(status);
      });
      /*End Delete Usuario*/

    }, function() {

    });


  };

$scope.readUsuarios = function(){
  /*Read Usuarios*/
  $http.post('servicios/readUsuarios.php')
      .success(function(data) {

        if(data.error){
            $scope.UsError = data.error;
        }else{
            $scope.usuarios = data;
        }

      }).error(function(data, status) { // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.errors.push(status);
  });
  /*End Read Usuarios*/
};

$scope.readUsuarios();




}]);
