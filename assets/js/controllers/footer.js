amarillasCtrl.controller('footerCtrl', ['$scope', '$routeParams','$http',
function($scope, $routeParams,$http) {

  $http.post('servicios/readInfo.php')
      .success(function(data) {

        if(data.error){
            $scope.errInfo = data.error;
        }else{
            $scope.telone = data.telone;
            $scope.teltwo = data.teltwo;
            $scope.celular = data.celular;
            $scope.direccion = data.direccion;
            $scope.facebook = data.facebook;
            $scope.twitter = data.twitter;
            $scope.instagram = data.instagram;
        }

      }).error(function(data, status) { // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


  var isValidEmail = function(){};
  $scope.suscribir = function(){
    $scope.errPoliticas = "";
    $scope.errEmail = "";
    $scope.errServ = "";
    if ($scope.regPoliticas) {
      if ($scope.regEmail) {
        var mail = $scope.regEmail;

        isValidEmail = function (mail){
          return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
        };

          if (isValidEmail(mail)) {
            $http.post('servicios/suscribir.php', {'email': $scope.regEmail})
                .success(function(data) {

                  if(data.error){
                      $scope.errServ = data.error;
                  }else{
                      $scope.success = "Te hemos agregado a nuestra lista de suscriptores";
                  }

                }).error(function(data, status) { // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
          }else{
            $scope.errEmail = "El Email es Inválido";
          }

      }else{
          $scope.errEmail = "Debes ingresar un Email válido";
      }
    }else{
      $scope.errPoliticas = "Debes aceptar políticas de privacidad";
    }
  };

}]);
