amarillasCtrl.controller('detalleEmpresaCtrl', ['$scope', '$routeParams','$http','$cookies','$mdDialog',
  function($scope, $routeParams,$http,$cookies,$mdDialog) {

  $scope.idEmpresa = $routeParams.idEmpresa;

  /*Data empresa*/
  $http.post("servicios/readEmpresa.php",{'idEmpresa':$scope.idEmpresa})
    .success(function(respuesta){

      if (respuesta.error) {
        $scope.error = respuesta.error;
      }else{

        $scope.id = respuesta.id;
        $scope.nombre = respuesta.nombre;
        $scope.logo = respuesta.logo;
        $scope.direccion = respuesta.direccion;
        $scope.web = respuesta.web;
        $scope.telefono = respuesta.telefono;
        $scope.celular = respuesta.celular;
        $scope.email = respuesta.email;
        $scope.descripcion = respuesta.descripcion;
        $scope.facebook = respuesta.facebook;
        $scope.twitter = respuesta.twitter;
        $scope.instagram = respuesta.instagram;
        $scope.plan = respuesta.plan;
        $scope.categoria = respuesta.categoria;
        $scope.icono = respuesta.icono;
        $scope.latitud = respuesta.latitud;
        $scope.longitud = respuesta.longitud;
        var estrellas = parseInt(respuesta.estrellas);
        var votantes = parseInt(respuesta.votantes);
        if (estrellas !== 0 && votantes !== 0) {
          $scope.cantEstrellas = Math.round(estrellas / votantes);
          $scope.puntaje = Math.round($scope.cantEstrellas*10)/10;
        }else{
          $scope.puntaje = 0;
          $scope.cantEstrellas = 0;
        }

      }

    })
    .error(function(){
      $scope.error = "No hay Datos" ;
  });
  /*End Data empresa*/

  /*Data empresa*/
  $http.post("servicios/updVisita.php",{'idEmpresa':$scope.idEmpresa})
    .success(function(respuesta){

      console.log(respuesta);

    })
    .error(function(){
      $scope.error = "No hay Datos" ;
  });
  /*End Data empresa*/

  $scope.ConEnviada = 0;
  $scope.ConNombres = '';
  $scope.ConEmail = '';
  $scope.ConTelefono = '';
  $scope.ConCiudad = '';
  $scope.ConMensaje = '';

  $scope.enviarContEmp = function(EmailEmpresa){
  $scope.ConError = '';
      if ($scope.ConPoliticas) {

        if ($scope.ConNombres && $scope.ConEmail && $scope.ConTelefono && $scope.ConCiudad && $scope.ConMensaje) {

          isValidEmail = function (mail){return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);};
          mail = $scope.ConEmail;

          if (isValidEmail(mail)) {

            /*Enviar Solicitud*/
            $http.post("servicios/enviarContEmp.php",{'Nombres':$scope.ConNombres,'Email':$scope.ConEmail,'Telefono':$scope.ConTelefono,'Ciudad':$scope.ConCiudad,'Mensaje':$scope.ConMensaje,'EmailEmpresa':EmailEmpresa})
              .success(function(respuesta){
                if (respuesta.error) {

                  $scope.ConError = "No se pudo enviar";

                }else{
                  $scope.ConEnviada = 1;
                  $scope.ConNombres = '';
                  $scope.ConEmail = '';
                  $scope.ConTelefono = '';
                  $scope.ConCiudad = '';
                  $scope.ConMensaje = '';
                }
              })
              .error(function(){
                $scope.ConError = "Problema con la Base de Datos" ;
            });
            /*End Solicitud*/

          }else{
              $scope.ConError = "El Email es Inválido";
          }

        }else{
          $scope.ConError = "Todos los campos son obligatorios";
        }

      }else{
        $scope.ConError = "Debes Aceptar Políticas";
      }
  };



}]);
