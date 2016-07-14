amarillasCtrl.controller('blogDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope,$routeParams,$http) {
    $scope.blogId = $routeParams.blogId;

    /*Data Blog*/
    $http.post("servicios/readBlog.php",{'idblog':$scope.blogId})
      .success(function(respuesta){
        $scope.blog_prin_titulo = respuesta.titulo;
        $scope.blog_prin_imagen = respuesta.imagen;
        $scope.blog_prin_contenido = respuesta.contenido;
        $scope.blog_prev_id = respuesta.idprev;
        $scope.blog_prev_img = respuesta.imgprev;
        $scope.blog_prev_tit = respuesta.titprev;
        $scope.blog_prev_con = respuesta.conprev;
        $scope.blog_next_id = respuesta.idnext;
        $scope.blog_next_img = respuesta.imgnext;
        $scope.blog_next_tit = respuesta.titnext;
        $scope.blog_next_con = respuesta.connext;
      })
      .error(function(){
        $scope.blog = "Error: No hay Datos" ;
    });
    /*End Data Blog*/

  }]);
