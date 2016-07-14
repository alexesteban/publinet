amarillasCtrl.controller('resultadoCtrl', ['$scope', '$routeParams','$http','$mdDialog','$cookies','$q',
  function($scope, $routeParams,$http,$mdDialog,$cookies,$q) {



    $scope.idCategoria = $routeParams.idCategoria;
    $scope.idCiudad = $routeParams.idCiudad;

    var idEmpresaOP = 1;

    $scope.funA = function(idEmpresaOP){

      var q = $q.defer();
      $http.post("servicios/isScored.php", {'idEmpresa': idEmpresaOP,'guid': $cookies.get('logued')})
        .success(function(respuesta) {
          q.resolve(respuesta);
          return true;
        })
        .error(function() {
          q.reject();
        });
      return q.promise;


    };

    $scope.funA(idEmpresaOP).then(function(data){
       if (data) {
        var algo = true;
      }

    $scope.datosEmpresas();

    });

    $scope.funB = function(idEmpresa){
      var q = $q.defer();

      $http.post("servicios/isScored.php", {'idEmpresa': idEmpresa,'guid': $cookies.get('logued')})
        .success(function(respuesta) {
          if (respuesta === true) {
            return true;
          }else{
            return false;
          }

        })
        .error(function() {
          q.reject();
        });
    };



$scope.datosEmpresas = function(){
  $http.post("servicios/readTextResultado.php",{'idCategoria':$scope.idCategoria,'idCiudad':$scope.idCiudad})
    .success(function(respuesta){

      if (respuesta.errorBusqueda) {
        $scope.textResultado = respuesta.errorBusqueda;
      }else{

        $scope.textResultado = respuesta.txt_result;
        /*Data empresas*/
        $http.post("servicios/readResultado.php",{'idCategoria':$scope.idCategoria,'idCiudad':$scope.idCiudad})
          .success(function(respuesta){

            if (respuesta) {
              $scope.empresas = respuesta;
              for (var i = 0; i < respuesta.length; i++) {
                  var empresas = $scope.empresas[i];
                  var data = respuesta[i];

                  empresas.celular = data.celular;
                  empresas.descripcion = data.descripcion;
                  empresas.direccion = data.direccion;
                  empresas.email = data.email;
                  empresas.facebook = data.facebook;
                  empresas.id = data.id;
                  empresas.id_categoria = data.id_categoria;
                  empresas.id_ciudad = data.id_ciudad;
                  empresas.instagram = data.instagram;
                  empresas.logo = data.logo;
                  empresas.nombre = data.nombre;
                  empresas.plan = data.plan;
                  empresas.telefono = data.telefono;
                  empresas.twitter = data.twitter;
                  empresas.categoria = data.categoria;
                  empresas.iconoCat = data.icono;
                  empresas.web = data.web;
                  


                  $scope.funB(data.id);

                }

                var pagesShown = 1;
                var pageSize = 10;

                    $scope.paginationLimit = function(data) {
                        return pageSize * pagesShown;
                    };
                    $scope.hasMoreItemsToShow = function() {
                        return pagesShown < ($scope.empresas.length / pageSize);
                    };
                    $scope.showMoreItems = function() {
                        pagesShown = pagesShown + 1;
                    };

            }else{
                $scope.empresas = "";
            }

          })
          .error(function(){
            $scope.blog = "Error: No hay Datos" ;
        });
        /*End Data empresas*/

      }

    })
    .error(function(){
      $scope.blog = "Error: No hay Datos" ;
  });
};






/*
    $scope.isScored = function(idEmpresa){
      if ($cookies.get('logued') && $cookies.get('logued') !== '') {

        $http.post("servicios/isScored.php", {'idEmpresa': idEmpresa,'guid': $cookies.get('logued')})
          .success(function(respuesta){

            if (respuesta === true) {
              return true;
            }else{
              return false;
            }

          });

      }else {
        return false;
          }
    };
*/




  }]);
