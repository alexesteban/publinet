cmsCtrl.controller('bannersCtrl', ['$scope','$routeParams','$http','$mdDialog',
function($scope,$routeParams,$http,$mdDialog) {

  $scope.readBanTL = function(){
    $scope.error = "";

    $http.post('servicios/readBanTL.php')
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.bannersTL = data;
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });
  };

  $scope.readBanTR = function(){
    $scope.error = "";

    $http.post('servicios/readBanTR.php')
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.bannersTR = data;
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });
  };

  $scope.readBanBO = function(){
    $scope.error = "";

    $http.post('servicios/readBanBO.php')
        .success(function(data) {

          if(data.error){
              $scope.error = data.error;
          }else{
              $scope.bannersBO = data;
          }

        }).error(function(data, status) { // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.errors.push(status);
    });
  };

  $scope.readBanTL();
  $scope.readBanTR();
  $scope.readBanBO();

  var validarDimensiones = function(image,w,h){
    var img = new Image();
    img.src = image;
    img.addEventListener('load',function(){
        width=img.width;
        height=img.height;
    });
    if (img.width === w && img.height === h) {
      return true;
    }else{return false;}
  };

  var validarFormato = function(img){
    var format = "";
    if (img.indexOf("jpg") === 11) {
      return "jpg";
    }else if (img.indexOf("jpeg") === 11) {
      return "jpeg";
    }else if (img.indexOf("png") === 11) {
      return "png";
    }else if (img.indexOf("gif") === 11) {
      return "gif";
    }else {
      return 0;
    }
  };


  $scope.addBanner = function(){

    $scope.error = "";
    $scope.success = "";

    if ($scope.imagenBan && $scope.Posicion) {

      if (!$scope.Link) {
        $scope.Link = "#";
      }

      format = validarFormato($scope.imagenBan);

      if ( format !== 0 ) {

        var width = 0;
        var height = 0;

        if ($scope.Posicion === "TL") {
          width=600; height=250;
        }else if ($scope.Posicion === "TR") {
          width = 300; height=250;
        }else if($scope.Posicion === "BO"){
          width = 1024; height=200;
        }else{
          $scope.error = "Posición desconocida";
        }

        if (validarDimensiones($scope.imagenBan,width,height)) {
          $http.post('servicios/insertBanner.php',{'imagen':$scope.imagenBan,'link':$scope.Link,'posicion':$scope.Posicion,'format':format})
              .success(function(data) {

                if(data.error){
                    $scope.newError = data.error;
                }else{

                  $scope.success = "El banner se agregó correctamente";
                  $scope.Link = "";

                  if ($scope.Posicion === "TL") {
                    $scope.readBanTL();
                  }else if ($scope.Posicion === "TR") {
                    $scope.readBanTR();
                  }else if($scope.Posicion === "BO"){
                    $scope.readBanBO();
                  }

                }
              });
        }else{
          $scope.error = "Las dimensiones son incorrectas";
        }
      }else{
        $scope.error = "El formato es inválido";
      }
    }else{
      $scope.error = "La imagen y la posicion son obligatorios";
    }
  };

  $scope.delBanner = function(ev,id,imagen,posicion) {

    var confirm = $mdDialog.confirm()
          .title('Eliminar Banner')
          .textContent('Estas seguro que deseas eliminar este banner?')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('ELIMINAR')
          .cancel('CANCELAR');
    $mdDialog.show(confirm).then(function() {

      /*Delete Banner*/
      $http.post('servicios/delBanner.php',{'id':id,'imagen':imagen,'posicion':posicion})
          .success(function(data) {

            if(data.error){
                $scope.error = data.error;
            }else{
                $scope.success = "Has Eliminado el Blog";
                if (posicion === "TL") {
                  $scope.readBanTL();
                }else if (posicion === "BO") {
                  $scope.readBanBO();
                }
            }

          }).error(function(data, status) { // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.errors.push(status);
      });
      /*End Delete Banner*/

    }, function() {

    });

  };


}]);
