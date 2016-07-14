amarillasCtrl.controller('ACCiudadCtrl', ['$timeout', '$q', '$log', '$http', '$scope',
function ACCiudadCtrl($timeout, $q, $log, $http, $scope) {


     var self = this;

     $scope.datos = function() {
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

     $scope.datos().then(function(data){
      if (data) {
       $scope.categorias = data;
     }

     self.repos         = loadAll();

     });

      self.simulateQuery = false;
      self.isDisabled    = false;

      self.querySearch   = querySearch;
      self.selectedItemChange = selectedItemChange;
      self.searchTextChange   = searchTextChange;
      // ******************************
      // Internal methods
      // ******************************
      /**
       * Search for repos... use $timeout to simulate
       * remote dataservice call.
       */
      function querySearch (query) {
        var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
            deferred;
        if (self.simulateQuery) {
          deferred = $q.defer();
          $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
          return deferred.promise;
        } else {
          return results;
        }
      }
      function searchTextChange(text) {
        $log.info('Text changed to ' + text);
      }
      function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
      }
      /**
       * Build `components` list of key/value pairs
       */
      function loadAll() {
        var repos = $scope.categorias;
        return repos.map( function (repo) {
          repo.value = repo.nombre.toLowerCase();
          return repo;
        });
      }
      /**
       * Create filter function for a query string
       */
      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(item) {
          return (item.value.indexOf(lowercaseQuery) === 0);
        };
      }

}]);
