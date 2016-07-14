amarillasCtrl.controller('textosCtrl', ['$scope', '$http',
function ($scope, $http) {

  /*Data Textos*/
  $http.post("servicios/readTextos.php")
    .success(function(respuesta){
      $scope.textos = respuesta;
    })
    .error(function(){
      $scope.textos = "Error: No hay Datos" ;
  });
  /*End Data Textos*/

}]);
