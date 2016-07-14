amarillasCtrl.controller('tagsCtrl', ['$scope','$http','$filter','$mdDialog',
function ($scope,$http,$filter,$mdDialog) {

  var allGroups = [];

  $scope.readTags = function(){
    $http.post('servicios/readTags.php')
        .success(function(data) {
          $scope.admTags = data;
          for (var i = 0; i < data.length; i++) {
            allGroups[i] = data[i].tag;
          }
        });
  };

  $scope.readTags();

      $scope.queryGroups = function(search) {
          var firstPass = $filter('filter')(allGroups, search);

          return firstPass.filter(function(item) {
              return $scope.selectedGroups.indexOf(item) === -1;
          });
      };

      $scope.addGroup = function(group) {
          $scope.selectedGroups.push(group);
      };

      $scope.allGroups = allGroups;
      $scope.selectedGroups = [allGroups[0]];

      $scope.$watchCollection('selectedGroups', function() {
          $scope.availableGroups = $scope.queryGroups('');
      });


      $scope.addTag = function(){
        $scope.error = "";$scope.success="";
        if ($scope.tagName) {
          $http.post('servicios/insertTag.php',{'tag':$scope.tagName})
              .success(function(data) {
                if (data.error) {
                    $scope.error = data.error;
                }else{
                    $scope.success = "Has creado un nuevo Tag";
                    $scope.tagName = "";
                }
            });

        }else{
          $scope.error = "El campo no puede estar vacío";
        }
      };

      $scope.delTag = function(ev,id){

        $scope.success = "";
        $scope.error = "";

            var confirm = $mdDialog.confirm()
                  .title('Eliminar Tag')
                  .textContent('Estas seguro que deseas eliminar este tag?')
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('ELIMINAR')
                  .cancel('CANCELAR');
            $mdDialog.show(confirm).then(function() {

              /*Delete Usuario*/
              $http.post('servicios/delTag.php',{'id':id})
                  .success(function(data) {

                    if(data.error){
                        $scope.error = data.error;
                    }else{
                        $scope.success = "Has Eliminado el Tag";
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
