
amarillasCtrl.controller('homeCtrl', ['$scope', '$http',
function ($scope, $http) {

  /*Data Categorias*/
  $http.post("servicios/readCategorias.php")
    .success(function(respuesta){
      $scope.categorias = respuesta;
    })
    .error(function(){
      $scope.categorias = "Error: No hay Datos" ;
  });
  /*End Data Categorias*/

  /*Data Banners*/
  $http.post("servicios/readBannersHome.php")
    .success(function(respuesta){
      $scope.bannersHome = respuesta;
    })
    .error(function(){
      $scope.bannersHome = "Error: No hay Datos" ;
  });
  /*End Data Banners*/

  /*Data Blogs*/
  $http.post("servicios/readBlogsHome.php")
    .success(function(respuesta){
      $scope.blog_uno_id = respuesta[0].id;
      $scope.blog_uno_imagen = respuesta[0].imagen;
      $scope.blog_uno_titulo = respuesta[0].titulo;
      $scope.blog_uno_contenido = respuesta[0].contenido;
      $scope.blog_dos_id = respuesta[1].id;
      $scope.blog_dos_imagen = respuesta[1].imagen;
      $scope.blog_dos_titulo = respuesta[1].titulo;
      $scope.blog_dos_contenido = respuesta[1].contenido;
      $scope.blog_tres_id = respuesta[2].id;
      $scope.blog_tres_imagen = respuesta[2].imagen;
      $scope.blog_tres_titulo = respuesta[2].titulo;
      $scope.blog_tres_contenido = respuesta[2].contenido;
      $scope.blog_cuatro_id = respuesta[3].id;
      $scope.blog_cuatro_imagen = respuesta[3].imagen;
      $scope.blog_cuatro_titulo = respuesta[3].titulo;
      $scope.blog_cuatro_contenido = respuesta[3].contenido;
    })
    .error(function(){
      $scope.blogsHome = "Error: No hay Datos" ;
  });
  /*End Data Blogs*/

  /*Search*/
  $scope.funForm = function(idRest){
    console.log(idRest);
  };

}]);
