amarillasCtrl.controller('serviciosCtrl', ['$scope', '$routeParams','$http',
function($scope,$routeParams,$http) {


  $scope.Enviado = 0;
  $scope.Nombres = '';
  $scope.Apellidos = '';
  $scope.Email = '';
  $scope.Telefono = '';
  $scope.Mensaje = '';

  $scope.enviarContacto = function(){
    if ($scope.Politicas) {

      if ($scope.Nombres,$scope.Email,$scope.Telefono,$scope.Mensaje) {

        isValidEmail = function (mail){return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);};
        mail = $scope.Email;

        if (isValidEmail(mail)) {

          /*Enviar Solicitud*/
          $http.post("servicios/enviarContSer.php",{'Nombres':$scope.Nombres,'Apellidos':$scope.Apellidos,'Email':$scope.Email,'Telefono':$scope.Telefono,'Mensaje':$scope.Mensaje})
            .success(function(respuesta){
              if (respuesta.error) {

                $scope.Error = "No se pudo enviar el formulario, vuelve a intentarlo";

              }else{
                $scope.Enviado = 1;
                $scope.Nombres = '';
                $scope.Apellidos = '';
                $scope.Email = '';
                $scope.Telefono = '';
                $scope.Mensaje = '';
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
