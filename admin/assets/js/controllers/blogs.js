cmsCtrl.controller('blogsCtrl', ['$scope','$routeParams','$http','$mdDialog',
function($scope,$routeParams,$http,$mdDialog) {

  $scope.readBlogs = function(){
    $scope.error = "";

    $http.post('servicios/readBlogs.php')
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.blogs = data;

              for (var i = 0; i < data.length; i++) {
                  var blogs = $scope.blogs[i];
                  var blog = data[i];

                  blogs.imagen = blog.imagen;
                  blogs.contenido = blog.contenido;
                  blogs.orden = blog.orden;
                  if (blog.publicado == 1) {
                      blogs.publicado = true;
                  }else{
                    blogs.publicado = false;
                  }
              }
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });
  };

  $scope.readBlogs();


  $scope.addBlog = function(){

    $scope.newError = "";
    $scope.newSuccess = "";

    if ($scope.imagenBlog && $scope.Contenido && $scope.Titulo) {

      var img = new Image();
      img.src = $scope.imagenBlog;

      img.addEventListener('load',function(){
          width=img.width;
          height=img.height;
      });

      if (img.width === 620 && img.height === 228) {
        var format = "";

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

          $http.post('servicios/insertBlog.php',{'imagen':$scope.imagenBlog,'contenido':$scope.Contenido,'titulo':$scope.Titulo,'format':format})
              .success(function(data) {

                if(data.error){
                    $scope.newError = data.error;
                }else{

                  $scope.newSuccess = "El blog se creó correctamente";
                  $scope.imagenBlog = "";
                  $scope.Contenido = "";
                  $scope.Titulo = "";

                  $scope.readBlogs();

                }

              });

        }else{
          $scope.newError = "Formáto de imágen inválido";
        }
      }else{
        $scope.newError = "Las dimensiones de la imágen son inválidos";
      }
    }else{
      $scope.newError = "Todos los campos son obligatorios";
    }
  };

  $scope.delBlog = function(ev,id,imagen) {

    var confirm = $mdDialog.confirm()
          .title('Eliminar Blog')
          .textContent('Estas seguro que deseas eliminar este blog?')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('ELIMINAR')
          .cancel('CANCELAR');
    $mdDialog.show(confirm).then(function() {

      /*Delete Usuario*/
      $http.post('servicios/delBlog.php',{'id':id,'imagen':imagen})
          .success(function(data) {

            if(data.error){
                $scope.error = data.error;
            }else{
                $scope.success = "Has Eliminado el Blog";
                $scope.readBlogs();
            }

          }).error(function(data, status) { // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.errors.push(status);
      });
      /*End Delete Usuario*/

    }, function() {

    });

  };

  $scope.updEstadoBlog = function(idBlog,estado){
    if (estado === true) {
        estado = 1;
    }else{
      estado = 0;
    }
    $http.post('servicios/updEstadoBlog.php',{'id':idBlog,'estado':estado})
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.success = "Se actualizó la publicación";
          }

        });
  };


}]);
