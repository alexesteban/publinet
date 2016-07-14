cmsCtrl.controller('empresaCtrl', ['$scope','$routeParams','$http',
function($scope,$routeParams,$http) {

  $scope.idEmpresa = $routeParams.idEmpresa;
  var idEmpresa = $routeParams.idEmpresa;
  $scope.etiquetas = [];

  $scope.readEmpresa = function(){
    $http.post('servicios/readEmpresa.php',{'idEmpresa':idEmpresa})
        .success(function(data) {
          if(data.error){
              $scope.error = data.error;
          }else{
            $scope.empresa = data;
            $scope.etiquetas = data.tags.split(',');
          }
        });
  };

  $scope.readEmpresa();


  $scope.updCoords = function(latitud,longitud){
    $scope.empresa.latitud = latitud;
    $scope.empresa.longitud = longitud;
  };

  $scope.updGeneral = function(){
    var emp = $scope.empresa;

    $scope.error = "";
    $scope.success = "";

    if (emp.descripcion && emp.email && emp.plan) {

    $http.post('servicios/updEmpGeneral.php',{'descripcion':emp.descripcion,'telefono':emp.telefono,'celular':emp.celular,'email':emp.email,'facebook':emp.facebook,'twitter':emp.twitter,'instagram':emp.instagram,'direccion':emp.direccion,'plan':emp.plan,'longitud':emp.longitud,'latitud':emp.latitud,'idEmp':emp.id})
         .success(function(data) {
          if(data.error){
            $scope.error = data.error;
          }else{
            $scope.success = "Los Datos se actualizaron correctamente";
          }
      });
      }else {
        $scope.error="Algunos campos obligatorios están vacíos";
      }
    };

    /*CropImg*/
    $scope.myImage='';
    $scope.myCroppedImage='';
    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

    $scope.updLogo = function(){

        if ($scope.myImage) {
          $scope.avSucces = "";
          $http.post("servicios/updLogo.php", {'logo': $scope.myCroppedImage,'guid': $scope.empresa.guid})
            .success(function(respuesta){

              if (respuesta) {
                if (respuesta.error) {
                  $scope.avError = respuesta.error;
                }else{
                  $scope.error = "";
                  $scope.success = "Has actualizado el Logo";
                  $scope.myImage = "";
                }
              }else{
                $scope.error = "No se actualizaron los Datos" ;
              }
            });

        }else{
          $scope.error = "No hay ninguna imagen";
        }

    };
    /*End CropImg*/

    /*Video*/
    $scope.updVideo = function() {
      $scope.errVideo="";
      $scope.sucVideo="";

      if ($scope.video.indexOf('v=') !== -1) {
        var video_id = $scope.video.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
        }

        $http.post("servicios/updVideo.php", {'linkVideo': video_id,'idEmpresa': idEmpresa})
          .success(function(respuesta){
            if (respuesta.error) {
              $scope.errVideo = respuesta.error;
            }else{
              $scope.sucVideo = "Se actualizó el video Correctamente";
              $scope.video = "";
            }
          });

      }else{
            $scope.errVideo = "No es un video de youtube válido";
      }

    };
    /*End Video*/

    /*panorama*/
    $scope.updPanorama = function() {
      $scope.errPanorama = ""; $scope.sucPanorama="";
      if ($scope.panorama.indexOf("x-shockwave-flash") != -1) {
        $http.post("servicios/updPanorama.php", {'archivo': $scope.panorama,'idEmpresa': idEmpresa})
          .success(function(respuesta){
            if (respuesta.error) {
              $scope.errPanorama = respuesta.error;
            }else{
              $scope.sucPanorama = "Se actualizó el archivo Correctamente";
              $scope.panorama = "";
            }
          });
      }else{
          $scope.errPanorama = "Por favor adjunte un archivo con extensión .SWF";
          $scope.panorama = "";
      }

    };
    /*End panorama*/

    $scope.updTags = function(){
      if ( ($scope.etiquetas).length > 0 ) {

        var tagsSend = ($scope.etiquetas).toString();

        $http.post("servicios/updTags.php", {'tags': tagsSend,'idEmpresa': idEmpresa})
          .success(function(respuesta){
            if (respuesta.error) {
              $scope.errTags = respuesta.error;
            }else{
              $scope.sucTags = "Se actualizaron los Tags";
            }
          });

      }else{
          $scope.errTags = "Ingresa por lo menos un Tag";
      }

    };



}]);
