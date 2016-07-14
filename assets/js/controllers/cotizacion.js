amarillasCtrl.controller('cotizacionCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {

    $scope.solEnviada = 0;
    $scope.CotNombre = '';
    $scope.CotDescripcion = '';
    $scope.CotCategoria = '';
    $scope.CotDate = '';
    $scope.CotNombres = '';
    $scope.CotApellidos = '';
    $scope.CotEmail = '';
    $scope.CotTelefono = '';
    $scope.CotCiudad = '';
    $scope.CotMunicipio = '';
    $scope.CotDireccion = '';

    /*Data Categorias*/
    $http.post("servicios/readCategorias.php")
      .success(function(respuesta){
        $scope.categorias = respuesta;
      })
      .error(function(){
        $scope.categorias = "Error: No hay Datos" ;
    });
    /*End Data Categorias*/

    /*Data City*/
    $http.post("servicios/readCiudades.php")
      .success(function(respuesta){
        $scope.ciudades = respuesta;
      })
      .error(function(){
        $scope.ciudades = "Error: No hay Datos" ;
    });
    /*End Data City*/

    $scope.solicitarCot = function(){
      if ($scope.CotPoliticas) {

        if ($scope.CotNombre && $scope.CotDescripcion && $scope.CotCategoria && $scope.CotNombres && $scope.CotEmail && $scope.CotTelefono && $scope.CotCiudad) {

          isValidEmail = function (mail){return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);};
          mail = $scope.CotEmail;

          if (isValidEmail(mail)) {

            /*Enviar Solicitud*/
            $http.post("servicios/enviarCot.php",{'titulo':$scope.CotNombre,'desc':$scope.CotDescripcion,'categoria':$scope.CotCategoria,'fecha':$scope.CotDate,'nombres':$scope.CotNombres,'apellidos':$scope.CotApellidos,
                  'email':$scope.CotEmail,'tel':$scope.CotTelefono,'ciudad':$scope.CotCiudad,'municipio':$scope.CotMunicipio,'direccion':$scope.CotDireccion})
              .success(function(respuesta){
                if (respuesta.error) {

                  $scope.CotError = "No se pudo enviar la solicitud, vuelve a intentarlo";

                }else{
                  $scope.CotNombre = '';
                  $scope.CotDescripcion = '';
                  $scope.CotCategoria = '';
                  $scope.CotDate = '';
                  $scope.CotNombres = '';
                  $scope.CotApellidos = '';
                  $scope.CotEmail = '';
                  $scope.CotTelefono = '';
                  $scope.CotCiudad = '';
                  $scope.CotMunicipio = '';
                  $scope.CotDireccion = '';

                  $scope.solEnviada = 1;
                }
              })
              .error(function(){
                $scope.CotError = "Problema con la Base de Datos" ;
            });
            /*End Solicitud*/

          }else{
              $scope.CotError = "El Email es Inválido";
          }

        }else{
          $scope.CotError = "Ingrese todos los campos obligatorios";
        }

      }else{
        $scope.CotError = "Debes Aceptar Políticas de Privacidad";
      }
    };

  }]);
