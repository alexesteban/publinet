amarillasCtrl.controller('miDirectorioCtrl', ['$scope', '$routeParams','$http','$mdDialog','$cookies','$q',
  function($scope, $routeParams,$http,$mdDialog,$cookies,$q) {


      /*Data favoritos*/
      $http.post("servicios/readFavoritos.php",{'guid': $cookies.get('logued')})
        .success(function(respuesta){

          if (respuesta) {
            $scope.empresas = respuesta;
            for (var i = 0; i < respuesta.length; i++) {
                var empresas = $scope.empresas[i];
                var data = respuesta[i];
                var puntaje = (empresas.estrellas / empresas.votantes);

                empresas.celular = data.celular;
                empresas.descripcion = data.descripcion;
                empresas.direccion = data.direccion;
                empresas.email = data.email;
                empresas.estrellas = data.estrellas;
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
                empresas.votantes = data.votantes;
                empresas.categoria = data.categoria;
                empresas.iconoCat = data.icono;
                empresas.puntaje = Math.round(puntaje * 10) / 10;
                empresas.cantEstrellas = Math.round(puntaje);

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
      /*End Data favoritos*/



  }]);
