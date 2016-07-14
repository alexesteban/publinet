cmsCtrl.controller('categoriasCtrl', ['$scope','$routeParams','$http','$mdDialog',
function($scope,$routeParams,$http,$mdDialog) {

  $scope.addCategoria = function() {

    $scope.success = "";
    $scope.inserError = "";

    if ($scope.iconSelect && $scope.Titulo) {

      var icon = $scope.iconSelect;
      var iconArr = icon.split(" ");
      icon = iconArr[2];

      $http.post('servicios/insertCat.php', {'icono': icon, 'nombre': $scope.Titulo})
          .success(function(data) {

            if(data.error){
                $scope.inserError = data.error;
            }else{
                $scope.success = "La categoría se creó correctamente";
                $scope.Titulo = "";
                $scope.readCategorias();
                $scope.inserError = "";
            }

          }).error(function(data, status) { // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.errors.push(status);
      });

    }else{
      $scope.inserError = "El campo Nombre y el icono son obligatorios";
    }

  };


  $scope.updIcon = function(id,selectIcon){

    $scope.success = "";
    $scope.error = "";

    var icon = selectIcon;
    var iconArr = icon.split(" ");
    icon = iconArr[2];

    $http.post('servicios/updIconCat.php', {'icono': icon, 'id': id})
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.success = "Se actualizó el icono de la categoría";
              $scope.readCategorias();
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });

  };

  $scope.updTitulo = function(id,nombre){

    $scope.success = "";
    $scope.error = "";

    $http.post('servicios/updTituloCat.php', {'nombre': nombre, 'id': id})
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.success = "Se actualizó el nombre de la categoría";
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });

  };

  $scope.readCategorias = function(){

    $scope.error = "";

    $http.post('servicios/readCategorias.php')
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.categorias = data;
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });

  };

$scope.readCategorias();


$scope.delCategoria = function(ev,id){

  $scope.success = "";
  $scope.error = "";

      var confirm = $mdDialog.confirm()
            .title('Eliminar Categoria')
            .textContent('Estas seguro que deseas eliminar esta categoría? Ten en cuenta que todas las empresas vinculadas a esta categoría se desvincularán, presentando problemas en los buscadores')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('ELIMINAR')
            .cancel('CANCELAR');
      $mdDialog.show(confirm).then(function() {

        /*Delete Usuario*/
        $http.post('servicios/delCategoria.php',{'id':id})
            .success(function(data) {

              if(data.error){
                  $scope.error = data.error;
              }else{
                  $scope.success = "Has Eliminado la categoria";
                  $scope.readCategorias();
              }

            }).error(function(data, status) { // called asynchronously if an error occurs
          // or server returns response with an error status.
          $scope.errors.push(status);
        });
        /*End Delete Usuario*/

      }, function() {

      });

};



}]);
