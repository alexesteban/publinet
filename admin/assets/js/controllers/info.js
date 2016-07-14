cmsCtrl.controller('infoCtrl', ['$scope','$routeParams','$http','$mdDialog',
function($scope,$routeParams,$http,$mdDialog) {

  $scope.updInfo = function(){

    $scope.success = "";
    $scope.error = "";

    $http.post('servicios/updInfo.php', {'email': $scope.email, 'tel1': $scope.tel1,'tel2':$scope.tel2,'celular':$scope.celular,'direccion':$scope.direccion,'facebook':$scope.facebook,'twitter':$scope.twitter,'instagram':$scope.instagram})
        .success(function(data) {
          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.success = "Se actualizó la información";
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });

  };

  $scope.readInfo = function(){

    $scope.error = "";

    $http.post('servicios/readInfo.php')
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.email = data.email;
              $scope.tel1 = data.tel1;
              $scope.tel2 = data.tel2;
              $scope.celular = data.celular;
              $scope.direccion = data.direccion;
              $scope.facebook = data.facebook;
              $scope.twitter = data.twitter;
              $scope.instagram = data.instagram;
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });

  };

$scope.readInfo();


}]);
