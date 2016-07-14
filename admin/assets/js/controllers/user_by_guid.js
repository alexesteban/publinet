cmsCtrl.controller('userByGuidCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {

      $scope.init = function(guid){

        $http.post("servicios/readUserByGuid.php", {'guid': guid})
          .success(function(respuesta){

            $scope.avatar = respuesta.avatar;
            $scope.nombres = respuesta.nombres;

          });

      };

}]);
