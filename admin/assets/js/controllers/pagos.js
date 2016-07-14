cmsCtrl.controller('pagosCtrl', ['$scope','$routeParams','$http','$mdDialog',
function($scope,$routeParams,$http,$mdDialog) {

  $http.post('servicios/readPagos.php')
      .success(function(data) {

        if(data.error){
            $scope.error = data.error;
        }else{
            $scope.pagos = data;
        }

      }).error(function(data, status) { // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.errors.push(status);
  });

}]);
