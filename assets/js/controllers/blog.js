amarillasCtrl.controller('blogCtrl', ['$scope', '$routeParams','$http',
  function($scope,$routeParams,$http) {

    /*Data Blog*/
    $http.post("servicios/readBlogs.php")
      .success(function(respuesta){
        $scope.blogs = respuesta;
      })
      .error(function(){
        $scope.blogs = "Error: No hay Datos" ;
    });
    /*End Data Blog*/
  }]);
