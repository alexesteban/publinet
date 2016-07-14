amarillasCtrl.controller('pagoCtrl', ['$scope', '$routeParams','$http','$mdDialog','$cookies','$location','md5',
  function($scope, $routeParams,$http,$mdDialog,$cookies,$location,md5) {    $scope.guidEmpresa = $routeParams.guidEmpresa;
    $scope.plan = $routeParams.plan;
    $scope.RegPlan = $routeParams.plan;

    if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {
      $http.post("servicios/readPrecioPlan.php", {'idPlan': $routeParams.plan,'guidUser':$cookies.get('logued') })        .success(function(respuesta){
          $scope.precio = respuesta.precio;
          $scope.buyerEmail = respuesta.email;
          //$scope.merchantId = "500238"; //TEST
          $scope.merchantId = "563818"; //PROD
          //$scope.ApiKey = "6u39nqhq8ftd0hlvnjfs66eh8c";//TEST
          $scope.ApiKey = "dH93qzZ4UOgi1zeXJT65aAK538";//PROD
          $scope.referenceCode = "COP"+Date.now();
          //$scope.accountId = "500537";//TEST
          $scope.accountId = "566376";//PROD
          $scope.signature = $scope.ApiKey + '~' + $scope.merchantId  + '~' + $scope.referenceCode + '~' + respuesta.precio + '~COP';

          $scope.md5sign = md5.createHash($scope.signature);        });

      $scope.changePlan = function(){
        $location.path('/pago/' + $routeParams.guidEmpresa + '/' + $scope.RegPlan);
      };

    }else{      $location.path('/login');
    }

  }]);