cmsCtrl.controller('loginCtrl', ['$scope', '$http', '$cookies',

  function($scope,$http,$cookies) {
    $scope.IsLog = 0;
    $scope.login = function(){

      $scope.error = '';
      if($scope.email && $scope.password){
        $http.post('servicios/login.php', {'email': $scope.email, 'password': $scope.password})
            .success(function(data) {

              if(data.error){
                $scope.error = data.error;
              }else{

                var guid = data.guid;
                $cookies.put('loguedCms', guid);
                $scope.logued();

              }

            }).error(function(data, status) { // called asynchronously if an error occurs
          // or server returns response with an error status.
          $scope.errors.push(status);
        });
      }else{
        $scope.error = "Por favor ingrese los datos";
        $scope.login = false;
      }

    };

  }]);
