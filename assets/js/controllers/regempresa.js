amarillasCtrl.controller('regEmpresaCtrl', ['$scope', '$routeParams','$http','$cookies','$location',
  function($scope, $routeParams,$http,$cookies,$location) {

    if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {
      $scope.isLogued = true;
      $scope.guid = $cookies.get('logued');

      /*Data City*/
      $http.post("servicios/readCiudades.php")
        .success(function(respuesta){
          $scope.ciudades = respuesta;
        })
        .error(function(){
          $scope.ciudades = "Error: No hay Datos" ;
      });
      /*End Data City*/

      /*Data Categorias*/
      $http.post("servicios/readCategorias.php")
        .success(function(respuesta){
          $scope.categorias = respuesta;
        })
        .error(function(){
          $scope.categorias = "Error: No hay Datos" ;
      });
      /*End Data Categorias*/

    }else{
      $scope.isLogued = false;
    }

    $scope.EmpRegistro = function(){
      $scope.EmpError = false;
      if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {
        if ($scope.EmpPoliticas) {

          if ($scope.EmpNombre && $scope.EmpCiudad && $scope.EmpTelefono && $scope.EmpEmail && $scope.EmpCategoria && $scope.EmpPlan) {

            $scope.EmpDireccion = (!$scope.EmpDireccion) ? ($scope.EmpDireccion = '') : ($scope.EmpDireccion);
            $scope.EmpCelular = (!$scope.EmpCelular) ? ($scope.EmpCelular = '') : ($scope.EmpCelular);
            $scope.EmpPagina = (!$scope.EmpPagina) ? ($scope.EmpPagina = '') : ($scope.EmpPagina);
            $scope.EmpNit = (!$scope.EmpNit) ? ($scope.EmpNit = '') : ($scope.EmpNit);

            var guidEmpresa = $scope.createGuid();

            $http.post('servicios/insertEmpresa.php', {'nombre': $scope.EmpNombre, 'nit': $scope.EmpNit, 'ciudad': $scope.EmpCiudad,  'direccion': $scope.EmpDireccion, 'telefono': $scope.EmpTelefono,  'celular': $scope.EmpCelular, 'email': $scope.EmpEmail, 'pagina': $scope.EmpPagina, 'categoria': $scope.EmpCategoria,
            'plan': $scope.EmpPlan, 'guid':$cookies.get('logued'),'guidEmpresa':guidEmpresa})
                .success(function(data) {
                  if(data.error){
                    $scope.EmpError = data.error;
                  }else{

                    $location.path('/pago/' + guidEmpresa + '/' +  $scope.EmpPlan);

                  }
                });


          }else{
            $scope.EmpError = "Ingrese todos los campos obligatorios";
          }
        }else{
          $scope.EmpError = "Debes Aceptar Políticas de Privacidad";
        }
      }else{
        $scope.EmpError = "Debe iniciar Sesión para registrar su empresa";
      }
    };

  }]);
