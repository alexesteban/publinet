amarillasCtrl.controller('ACCategoriasCtrl', ['$timeout', '$q', '$log', '$http', '$scope','$filter',
function ACCategoriasCtrl($timeout, $q, $log, $http, $scope,$filter) {
    var self = this;

    $scope.datosCA = function() {

      var q = $q.defer();
      $http.post("servicios/readCategorias.php")
        .success(function(respuesta) {
          q.resolve(respuesta);
        })
        .error(function() {
          q.reject();
        });
      return q.promise;
    };

    $scope.datosCA().then(function(data){
     if (data) {
      $scope.categorias = data;
    }

    self.reposCA         = loadAllCA();

    });

     self.simulateQueryCA = false;
     self.isDisabledCA    = false;

     self.querySearchCA   = querySearchCA;
     self.selectedItemChangeCA = selectedItemChangeCA;
     self.searchTextChangeCA   = searchTextChangeCA;
     // ******************************
     // Internal methods
     // ******************************
     /**
      * Search for repos... use $timeout to simulate
      * remote dataservice call.
      */
     function querySearchCA (query) {
       var results = query ? self.reposCA.filter( createFilterForCA(query) ) : self.reposCA,
           deferred;
       if (self.simulateQueryCA) {
         deferred = $q.defer();
         $timeoutCA(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
         return deferred.promise;
       } else {
         return results;
       }
     }
     function searchTextChangeCA(text) {
       $log.info('Text changed to ' + text);
     }
     function selectedItemChangeCA(item) {
       $log.info('Item changed to ' + JSON.stringify(item));
     }
     /**
      * Build `components` list of key/value pairs
      */
     function loadAllCA() {
       var reposCA = $scope.categorias;
       return reposCA.map( function (repoCA) {
         repoCA.value = repoCA.nombre.toLowerCase();
         return repoCA;
       });
     }
     /**
      * Create filter function for a query string
      */
     function createFilterForCA(query) {
       var lowercaseQuery = angular.lowercase(query);
       return function filterFn(item) {
         return (item.value.indexOf(lowercaseQuery) === 0);
       };
     }

/***************************************************************************************/


     $scope.datosCI = function() {
       var q = $q.defer();
       $http.post("servicios/readCiudades.php")
         .success(function(respuesta) {
           q.resolve(respuesta);
         })
         .error(function() {
           q.reject();
         });
       return q.promise;
     };

     $scope.datosCI().then(function(data){
      if (data) {
       $scope.ciudades = data;
     }

     self.reposCI         = loadAllCI();

     });

      self.simulateQueryCI = false;
      self.isDisabledCI    = false;

      self.querySearchCI   = querySearchCI;
      self.selectedItemChangeCI = selectedItemChangeCI;
      self.searchTextChangeCI   = searchTextChangeCI;
      // ******************************
      // Internal methods
      // ******************************
      /**
       * Search for repos... use $timeout to simulate
       * remote dataservice call.
       */
      function querySearchCI (query) {
        var results = query ? self.reposCI.filter( createFilterForCI(query) ) : self.reposCI,
            deferred;
        if (self.simulateQueryCI) {
          deferred = $q.defer();
          $timeoutCI(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
          return deferred.promise;
        } else {
          return results;
        }
      }
      function searchTextChangeCI(text) {
        $log.info('Text changed to ' + text);
      }
      function selectedItemChangeCI(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
      }
      /**
       * Build `components` list of key/value pairs
       */
      function loadAllCI() {
        var reposCI = $scope.ciudades;
        return reposCI.map( function (repoCI) {
          repoCI.value = repoCI.nombre.toLowerCase();
          return repoCI;
        });
      }
      /**
       * Create filter function for a query string
       */
      function createFilterForCI(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFnCI(item) {
          return (item.value.indexOf(lowercaseQuery) === 0);
        };
      }

}]);
