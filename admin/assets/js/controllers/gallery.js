cmsCtrl.controller('galleryCtrl', ['$scope', '$routeParams','$http','$cookies','$mdDialog','$location',
  function($scope, $routeParams,$http,$cookies,$mdDialog,$location) {

  var idEmpresa = $routeParams.idEmpresa;

    $scope.init = function(){
      $http.post("servicios/readGallery.php", {'idEmpresa': idEmpresa})
        .success(function(respuesta){
          $scope.gallery = respuesta;
        });
    };

    $scope.deleteImg = function(ev,idImg,idEmpresa,imagen) {
      // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Quieres Borrar la imagen?')
              .textContent('Esta imagen se borrará para siempre')
              .ariaLabel('Lucky day')
              .targetEvent(ev)
              .ok('ELIMINAR')
              .cancel('CANCELAR');
        $mdDialog.show(confirm).then(function() {

          $http.post("servicios/deleteGallery.php", {'idImg': idImg,'imagen':imagen})
            .success(function(respuesta){

              $scope.delete = respuesta;
              $scope.init(idEmpresa);

            });

        }, function() {

        });


    };


    /*CropImg*/

    $scope.myGal='';
    $scope.myCroppedGal='';
    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      if (file.size < 3500000) {
        $scope.isImg = true;
        var reader = new FileReader();
        reader.onload = function (evt) {
          $scope.$apply(function($scope){
            $scope.myGal=evt.target.result;
          });
        };
        reader.readAsDataURL(file);
      }else{
        $scope.isImg = false;
        $mdDialog.show(
        $mdDialog.alert()
           .clickOutsideToClose(true)
           .title('Error')
           .textContent("La imagen es muy pesada, max. 3MB")
           .ok('Ok')
        );
      }

    };
    angular.element(document.querySelector('#imgInput')).on('change',handleFileSelect);

    $scope.updImagen = function(idEmpresa){
      if ($cookies.get('loguedCms') && $cookies.get('loguedCms') !== '' && $cookies.get('loguedCms') !== null) {
        if ($scope.myGal) {
          $scope.avSucces = "";
          if (!$scope.descImg) {
            $scope.descImg = "";
          }
          $http.post("servicios/insertGalery.php", {'imagen': $scope.myCroppedGal,'descripcion': $scope.descImg, 'idEmpresa': idEmpresa})
            .success(function(respuesta){

              if (respuesta === "true") {
                $scope.imSuccess = "Has subido una imagen";
                $scope.isImg = false;
                $scope.init(idEmpresa);
                $scope.myGal='';
                $scope.myCroppedGal='';
              }else{
                $scope.isImg = false;
                $scope.myGal='';
                $scope.myCroppedGal='';
                $mdDialog.show(
                $mdDialog.alert()
                   .clickOutsideToClose(true)
                   .title('Error')
                   .textContent("No se pudo subir la imagen")
                   .ok('Ok')
                );
              }
            });

        }else{
          $scope.myGal='';
          $scope.myCroppedGal='';
          $mdDialog.show(
          $mdDialog.alert()
             .clickOutsideToClose(true)
             .title('Error')
             .textContent("No hay ninguna imagen")
             .ok('Ok')
          );
        }
      }else{
        $location.path('/login');
      }
    };
    /*End CropImg*/


}]);