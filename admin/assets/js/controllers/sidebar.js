cmsCtrl.controller('sidebarCtrl', ['$scope','$http',
function ($scope,$http) {

$scope.toggle = function() {
  $("#sidebar").toggle();
};

}]);
