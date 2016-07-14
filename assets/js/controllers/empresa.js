amarillasCtrl.controller('empresaCtrl', ['$scope', '$routeParams', '$http','$location','$cookies',
  function($scope,$routeParams,$http,$location,$cookies) {

    if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {

    $scope.guid = $routeParams.guid;

    $scope.updateDatos = function(){
      if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {

        if ($scope.web !== '') {
          var web = false;
          web = /^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test($scope.web);

          if (web !== false) {
            $http.post("servicios/updEmpresa.php", {'descripcion': $scope.descripcion,'telefono': $scope.telefono,'celular': $scope.celular,'email': $scope.email,'facebook': $scope.facebook,'twitter': $scope.twitter,'instagram': $scope.instagram,
            'direccion': $scope.direccion,'web': $scope.web,'latitud': $scope.latitud,'longitud': $scope.longitud,'guid': $scope.guid})
              .success(function(respuesta){
                if (respuesta) {
                  $scope.updError = "";
                  $scope.updSucces = "Los Datos se Actualizaron Correctamente";
                  setTimeout(function () {
                     $scope.updSucces = false;
                   }, 1000);
                }else{
                  $scope.updError = "No se actualizaron los Datos" ;
                }
              });
          }else{
            $scope.updError = "La pagina web es inválida, asegúrate de tener el protocolo http. ejemplo: http://www.google.com" ;
          }


        }else{

          $http.post("servicios/updEmpresa.php", {'descripcion': $scope.descripcion,'telefono': $scope.telefono,'celular': $scope.celular,'email': $scope.email,'facebook': $scope.facebook,'twitter': $scope.twitter,'instagram': $scope.instagram,
          'direccion': $scope.direccion,'web': $scope.web,'latitud': $scope.latitud,'longitud': $scope.longitud,'guid': $scope.guid})
            .success(function(respuesta){
              if (respuesta) {
                $scope.updError = "";
                $scope.updSucces = "Los Datos se Actualizaron Correctamente";
                setTimeout(function () {
                   $scope.updSucces = false;
                 }, 1000);
              }else{
                $scope.updError = "No se actualizaron los Datos" ;
              }
            });

        }




      }else{
        $location.path('/login');
      }
    };

    $scope.etiquetas = [];

    /*Data empresa*/
    $http.post("servicios/readEmpresaEdit.php", { 'guid': $scope.guid })
      .success(function(respuesta){

        if (respuesta.error) {
          $scope.error = respuesta.error;
        }else{
          $scope.idEmpresa = respuesta.id;
          $scope.nombre = respuesta.nombre;
          $scope.direccion = respuesta.direccion;
          $scope.telefono = respuesta.telefono;
          $scope.celular = respuesta.celular;
          $scope.email = respuesta.email;
          $scope.descripcion = respuesta.descripcion;
          $scope.facebook = respuesta.facebook;
          $scope.twitter = respuesta.twitter;
          $scope.instagram = respuesta.instagram;
          $scope.plan = respuesta.plan;
          $scope.latitud = respuesta.latitud;
          $scope.longitud = respuesta.longitud;
          $scope.activo = respuesta.activo;
          $scope.web = respuesta.web;
          $scope.etiquetas = respuesta.tags.split(',');
        }

      })
      .error(function(){
        $scope.empresa = "Error: No hay Datos" ;
    });
    /*End Data empresa*/

  }else{
    $location.path('/login');
  }

  $scope.updCoords = function(latitud,longitud){
    $scope.latitud = latitud;
    $scope.longitud = longitud;
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
    if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {
      if ($scope.myImage) {
        $scope.avSucces = "";
        $http.post("servicios/updLogo.php", {'logo': $scope.myCroppedImage,'guid': $scope.guid})
          .success(function(respuesta){

            if (respuesta) {
              if (respuesta.error) {
                $scope.avError = respuesta.error;
              }else{
                $scope.avError = "";
                $scope.avSucces = "Has actualizado el Logo";
              }
            }else{
              $scope.avError = "No se actualizaron los Datos" ;
            }
          });

      }else{
        $scope.avError = "No hay ninguna imagen";
      }
    }else{
      $location.path('/login');
    }
  };
  /*End CropImg*/


  /*Video*/
  $scope.updVideo = function(idEmpresa) {
    $scope.errVideo=""; $scope.sucVideo="";
    if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {

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
            }
          });
      }else{
          $scope.errVideo = "No es un video de youtube válido";
      }



    }else{
      $location.path('/login');
    }
  };
  /*End Video*/


  /*panorama*/
  $scope.updPanorama = function(idEmpresa) {
    if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {

      if ($scope.panorama.indexOf("x-shockwave-flash") != -1) {
        $http.post("servicios/updPanorama.php", {'archivo': $scope.panorama,'idEmpresa': idEmpresa})
          .success(function(respuesta){
            if (respuesta.error) {
              $scope.errPanorama = respuesta.error;
            }else{
              $scope.sucPanorama = "Se actualizó el archivo Correctamente";
            }
          });
      }else{
          $scope.errPanorama = "Por favor adjunte un archivo con extensión .SWF";
      }

    }else{
      $location.path('/login');
    }
  };
  /*End panorama*/

  /*Update Tags*/
  $scope.updTags = function(idEmpresa){
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
  /*End Upd Tags*/



  }]);
