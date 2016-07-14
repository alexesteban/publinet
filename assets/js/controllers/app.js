amarillasCtrl.controller('appCtrl', ['$scope','$http','$cookies', '$location',
  function($scope,$http,$cookies,$location) {
    $scope.loggedIn = $cookies.get('logued');

    $scope.logued = function(){
      $scope.loggedIn = $cookies.get('logued');
      $location.path('/mi_perfil');
    };

    $scope.logout = function(){
      $scope.loggedIn = '';
      $cookies.put('logued', '');
      $location.path('/login');
    };

    $scope.callAvatar = function(){
      $http.post("servicios/avatar.php", {'guid': $cookies.get('logued')})
        .success(function(respuesta){

          if (respuesta !== '') {
            $scope.avatar = respuesta[0].avatar;
          }

        })
        .error(function(){
          $scope.user = "Error: No hay Datos" ;
      });
    };

    $scope.callAvatar();

    $scope.createGuid = function(){
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
      return uuid;
    };

  }]);
