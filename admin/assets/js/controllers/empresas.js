cmsCtrl.controller('empresasCtrl', ['$scope','$routeParams','$http','$mdDialog',
function($scope,$routeParams,$http,$mdDialog) {

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


  $scope.readEmpresas = function(){
    $scope.error = "";

    $http.post('servicios/readEmpresas.php')
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.empresas = data;
              for (var i = 0; i < data.length; i++) {
                  var empresas = $scope.empresas[i];
                  var empresa = data[i];

                  empresas.nombre = empresa.nombre;
                  empresas.inner_score = empresa.inner_score;
                  empresas.visitas = empresa.visitas;
                  empresas.categoria = empresa.categoria;
                  empresas.ciudad = empresa.ciudad;
                  empresas.guid = empresa.guid;

                  if (empresa.plan == 1) {
                    empresas.plan = "Básico";
                  }else if (empresa.plan == 2) {
                    empresas.plan = "Premium";
                  }else if (empresa.plan == 3) {
                    empresas.plan = "Gold";
                  }else if (empresa.plan == 4) {
                    empresas.plan = "Cortesía";
                  }else {
                    empresas.plan = "Error";
                  }

                  if (empresa.activo == 1) {
                      empresas.activo = true;
                  }else{
                    empresas.activo = false;
                  }

              }
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });
  };


  $scope.readEmpresas();


$scope.direccion = "";
$scope.telefono = "";
$scope.celular = "";
$scope.facebook = "";
$scope.twitter = "";
$scope.instagram = "";
$scope.nit = "";
$scope.web = "";

  $scope.addEmpresa = function(){

    $scope.error = "";
    $scope.success = "";

    if ($scope.nombre && $scope.email && $scope.descripcion && $scope.ciudad && $scope.categoria && $scope.score && $scope.plan) {

      var guid = "999-888-777";
      var guidEmpresa = $scope.createGuid();

      $http.post('servicios/insertEmpresa.php',{'nombre':$scope.nombre,'email':$scope.email,'descripcion':$scope.descripcion,'ciudad':$scope.ciudad,'categoria':$scope.categoria,'score':$scope.score,'plan':$scope.plan,'direccion':$scope.direccion,
                  'telefono':$scope.telefono,'celular':$scope.celular,'facebook':$scope.facebook,'twitter':$scope.twitter,'instagram':$scope.instagram,'nit':$scope.nit,'web':$scope.web,'guid':guid,'guidEmpresa':guidEmpresa})
          .success(function(data) {

            if(data.error){
                $scope.error = data.error;
            }else{

              $scope.success = "La Empresa se Creó Correctamente";
              $scope.nombre = "";
              $scope.email = "";
              $scope.descripcion = "";
              $scope.score = "";

            }
          });

    }else{
      $scope.error = "Ingresa todos los campos obligatorios";
    }


  };


  $scope.updEstadoEmp = function(idEmp,estado){
    if (estado === true) {
        estado = 1;
    }else{
      estado = 0;
    }
    $http.post('servicios/updEstadoEmp.php',{'id':idEmp,'estado':estado})
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.success = "Se actualizó la publicación";
          }

        });
  };



}]);
