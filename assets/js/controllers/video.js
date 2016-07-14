amarillasCtrl.controller('videoCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {

    $scope.init = function(idEmpresa){

        $http.post("servicios/readVideo.php", {'idEmpresa': idEmpresa})
          .success(function(respuesta){

            if (respuesta.error) {

            }else {
              if (respuesta.link === null) {
                $scope.videolink = '';
              }else{
                $scope.videolink = respuesta.link;
              }

              if (respuesta.swf === null) {
                $scope.swf = '';
              }else{
                $scope.swf = "assets/swf/" + respuesta.swf;
              }

            }

          });
    };

}]);
