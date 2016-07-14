cmsCtrl.controller('homeCtrl', ['$scope','$http','$location','$cookies',
function ($scope,$http,$location,$cookies) {

  if (!$cookies.get('loguedCms') || $cookies.get('loguedCms') === '' || $cookies.get('loguedCms') === null) {
    $location.path('/login');
  }


}]);
