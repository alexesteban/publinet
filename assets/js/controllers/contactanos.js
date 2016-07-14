amarillasCtrl.controller('contactanosCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {

    $scope.Enviada = 0;
    $scope.Nombres = '';
    $scope.Apellidos = '';
    $scope.tipoId = '';
    $scope.NoId = '';
    $scope.Telefono = '';
    $scope.Email = '';
    $scope.Direcion = '';
    $scope.Ciudad = '';
    $scope.descripcion = '';


    $scope.enviarContacto = function(){
      $scope.Error = '';
      if ($scope.Politicas) {

        if ($scope.Nombres,$scope.Apellidos,$scope.Telefono,$scope.Email,$scope.descripcion) {

          isValidEmail = function (mail){
            return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
          };

          mail = $scope.Email;

          if (isValidEmail(mail)) {
            /*Enviar Solicitud*/
            $http.post("servicios/enviarContacto.php",{'Nombres':$scope.Nombres,'Apellidos':$scope.Apellidos,'tipoId':$scope.tipoId,'NoId':$scope.NoId,'Telefono':$scope.Telefono,'Email':$scope.Email,
                  'Direcion':$scope.Direcion,'Ciudad':$scope.Ciudad,'descripcion':$scope.descripcion})
              .success(function(respuesta){
                if (respuesta.error) {

                  $scope.Error = "No se pudo enviar el formulario";

                }else{
                  $scope.Enviada = 1;
                  $scope.Nombres = '';
                  $scope.Apellidos = '';
                  $scope.tipoId = '';
                  $scope.NoId = '';
                  $scope.Telefono = '';
                  $scope.Email = '';
                  $scope.Direcion = '';
                  $scope.Ciudad = '';
                  $scope.descripcion = '';
                }
              })
              .error(function(){
                $scope.Error = "Problema con la Base de Datos" ;
            });
            /*End Solicitud*/
          }else{
              $scope.Error = "El Email es Inválido";
          }

        }else{
          $scope.Error = "Ingrese todos los campos obligatorios";
        }

      }else{
        $scope.Error = "Debes Aceptar Políticas de Privacidad";
      }
    };

  }]);
