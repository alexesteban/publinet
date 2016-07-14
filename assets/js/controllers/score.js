amarillasCtrl.controller('scoreCtrl', ['$scope', '$routeParams','$http','$cookies','$mdDialog','$location',
  function($scope, $routeParams,$http,$cookies,$mdDialog,$location) {

$scope.init = function(idEmpresa){

  $scope.numEstrellas(idEmpresa);

  if ($cookies.get('logued') && $cookies.get('logued') !== '') {

    $http.post("servicios/isScored.php", {'idEmpresa': idEmpresa,'guid': $cookies.get('logued')})
      .success(function(respuesta){

      if (respuesta === 'true') {
        $scope.isScored = true;
      }else{
        $scope.isScored = false;
      }

      });

  }else {
    $scope.isScored = false;
  }
};

$scope.score = function(estrellas,idEmpresa) {
  if ($cookies.get('logued') && $cookies.get('logued') !== '') {

    $http.post("servicios/updScore.php", {'estrellas': estrellas,'idEmpresa': idEmpresa,'guid': $cookies.get('logued')})
      .success(function(respuesta){

        if (respuesta.error) {
          $mdDialog.show(
          $mdDialog.alert()
             .clickOutsideToClose(true)
             .title('Aviso')
             .textContent(respuesta.error)
             .ok('Ok')
          );
        }else{
          $mdDialog.show(
          $mdDialog.alert()
             .clickOutsideToClose(true)
             .title('Calificación Realizada')
             .textContent('Has calificado con ' + estrellas + ' estrellas esta empresa, Gracias por tu opinión')
             .ok('Ok')
          );

          $scope.init(idEmpresa);
        }

      });

  }else {



      var confirm =  $mdDialog.confirm()
          .title('Inicia Sesión')
          .textContent('Para poder realizar una calificación, debes iniciar sesión')
          .ok('Iniciar Sesión')
          .cancel('Cancelar');

          $mdDialog.show(confirm).then(function(){
              $location.path('/login');
          });



      }
  };


  $scope.numEstrellas = function(idEmpresa){
    $http.post("servicios/readCantEstrellas.php", {'idEmpresa': idEmpresa})
      .success(function(data){

      if (data.error) {

      }else{
        var estrellas = parseInt(data.estrellas);
        var votantes = parseInt(data.votantes);
        if (estrellas !== 0 && votantes !== 0) {
          var puntaje = (estrellas / votantes);
          $scope.puntaje = Math.round(puntaje * 10) / 10;
          $scope.cantEstrellas = Math.round(puntaje);
        }else{
          $scope.puntaje = 0;
          $scope.cantEstrellas = 0;
        }
      }

      });

  };

  }]);
