cmsCtrl.controller('blogCtrl', ['$scope','$routeParams','$http',
function($scope,$routeParams,$http) {

  $scope.idBlog = $routeParams.idBlog;

  $scope.readBlog = function(){
    $http.post('servicios/readBlog.php',{'idBlog':$scope.idBlog})
        .success(function(data) {
          if(data.error){
              $scope.error = data.error;
          }else{

            $scope.titulo = data.titulo;
            $scope.imagen = data.imagen;
            $scope.contenido = data.contenido;

          }

        });
  };

  $scope.readBlog();


    $scope.updBlog = function(idBlog,actImagen){

      $scope.error = "";
      $scope.success = "";

      var imagen = "";
      var format = "";
      var updImg = 0;

      if ($scope.imagenBlog) {
        imagen = $scope.imagenBlog;
      }

      if ($scope.titulo && $scope.contenido) {

        if (imagen !== "") {

          var img = new Image();
          img.src = imagen;

          img.addEventListener('load',function(){
              width=img.width;
              height=img.height;
          });

          if (($scope.imagenBlog).indexOf("jpg") === 11) {
            format = "jpg";
          }else if (($scope.imagenBlog).indexOf("jpeg") === 11) {
            format = "jpeg";
          }else if (($scope.imagenBlog).indexOf("png") === 11) {
            format = "png";
          }else if (($scope.imagenBlog).indexOf("gif") === 11) {
            format = "gif";
          }else {
            format = 0;
          }

          if (format !== 0) {

            if (img.width === 620 && img.height === 228) {

              updImg = 1;

            }else{

              $scope.error = "El tamaño de la imágen debe ser de 620px x 228px";
              $scope.imagenBlog = "";
              imagen = "";

            }

          }else{

            $scope.error = "Formato de la imágen Inválido";
            $scope.imagenBlog = "";
            imagen = "";

          }

        }


        $http.post('servicios/updBlog.php',{'idBlog':idBlog,'titulo':$scope.titulo,'contenido':$scope.contenido,'imagen':imagen,'format':format,'actual':actImagen})
            .success(function(data) {
              if(data.error){
                  $scope.error = data.error;
              }else{
                $scope.success = "Los Datos se actualizaron correctamente";
                $scope.imagenBlog = "";
                $scope.readBlog();
              }

            });


      }else {
        $scope.error="Los campos de texto no pueden estar vacíos";
        $scope.imagenBlog = "";
      }



    };

}]);
