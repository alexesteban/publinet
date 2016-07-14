cmsCtrl.controller('suscriptoresCtrl', ['$scope','$http','$filter','$mdDialog',
function ($scope,$http,$filter,$mdDialog) {

  var allGroups = [];

  $scope.readSusc = function(){
    $http.post('servicios/readSusc.php')
        .success(function(data) {
          $scope.suscriptores = data;
        });
  };

  $scope.readSusc();


}]);
