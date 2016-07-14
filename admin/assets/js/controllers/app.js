cmsCtrl.controller('appCtrl', ['$scope','$http','$cookies', '$location',
  function($scope,$http,$cookies,$location) {

    $scope.projectName = "Amarillas Virtuales";
    if (!$cookies.get('loguedCms') || $cookies.get('loguedCms') === '' || $cookies.get('loguedCms') === null) {
      $scope.IsLog = 0;
    }else{
      $scope.IsLog = 1;
    }


    $scope.loggedIn = $cookies.get('loguedCms');

    $scope.logued = function(){
      $scope.loggedIn = $cookies.get('loguedCms');
      $location.path('/home');
      $scope.IsLog = 1;
    };

    $scope.logout = function(){
      $scope.loggedIn = '';
      $cookies.put('loguedCms', '');
      $location.path('/login');
      $scope.IsLog = 0;
    };

    $scope.createGuid = function(){
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
      return uuid;
    };

    $scope.isValidEmail = function (mail){
      return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    };

  }]);
