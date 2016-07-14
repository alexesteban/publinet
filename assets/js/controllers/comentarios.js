amarillasCtrl.controller('comentariosCtrl', ['$scope', '$routeParams', '$http','$location','$cookies','$mdDialog',
  function($scope,$routeParams,$http,$location,$cookies,$mdDialog) {

    var idEmpresa = $routeParams.idEmpresa;

    $scope.insertComment = function(idEmpresa){
      if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {
        if ($scope.comentario) {
          $http.post("servicios/insertComment.php", {'comentario': $scope.comentario,'idEmpresa':idEmpresa,'guid': $cookies.get('logued') })
            .success(function(respuesta){

              $scope.comentario = "";
              $scope.readComments();

            });

        }else{
          $mdDialog.show(
          $mdDialog.alert()
             .clickOutsideToClose(true)
             .title('Campo Obligatorio')
             .textContent('Escribe un comentario')
             .ok('Entiendo!')
          );
        }
      }else{

        var confirm =  $mdDialog.confirm()
            .title('Inicia Sesión')
            .textContent('Para poder comentar, debes iniciar Sesión')
            .ok('Iniciar Sesión')
            .cancel('Cancelar');

            $mdDialog.show(confirm).then(function(){
                $location.path('/login');
            });

      }
    };


    $scope.readComments = function(){
      /*Data comment*/
      $http.post("servicios/readComments.php", {'idEmpresa':idEmpresa})
        .success(function(respuesta){

          $scope.comments = respuesta;

        })
        .error(function(){
          $scope.comments = "Error: No hay Datos" ;
      });
      /*End Data comment*/
    };

    $scope.readComments();



  }]);
