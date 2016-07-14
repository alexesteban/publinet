amarillasCtrl.controller('responseCtrl', ['$scope', '$routeParams','$http','$mdDialog','$cookies','$location','md5',
  function($scope, $routeParams,$http,$mdDialog,$cookies,$location,md5) {

    $http.post("servicios/readResponse.php", {'referenceCode': $routeParams.referenceCode })
      .success(function(respuesta){

        var total = respuesta.TX_VALUE.split(".");

        $scope.lapTransactionState = respuesta.lapTransactionState;
        $scope.referenceCode = respuesta.referenceCode;
        $scope.transactionId = respuesta.transactionId;
        $scope.lapPaymentMethod = respuesta.lapPaymentMethod;
        $scope.lapPaymentMethodType = respuesta.lapPaymentMethodType;
        $scope.TX_VALUE = total[0];
        $scope.buyerEmail = respuesta.buyerEmail;
        $scope.processingDate = respuesta.processingDate;

      });



  }]);
