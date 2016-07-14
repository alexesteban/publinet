amarillasCtrl.controller('miPerfilCtrl', ['$scope', '$routeParams', '$http','$location','$cookies',
  function($scope,$routeParams,$http,$location,$cookies) {

    if (!$cookies.get('logued') && $cookies.get('logued') === '' && $cookies.get('logued') === null) {
      $location.path('/login');
    }

    $scope.updateDatos = function(){
      if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {
        if ($scope.updNombres && $scope.updApellidos && $scope.updCelular && $scope.updCiudad && $scope.updEmail) {
          var mail = $scope.updEmail;
          isValidEmail = function (mail){
            return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
          };

          if (isValidEmail(mail)) {
            $scope.updError = "";
            $http.post("servicios/updUser.php", {'nombres': $scope.updNombres,'apellidos': $scope.updApellidos,'telefono': $scope.updTelefono,'celular': $scope.updCelular,'direccion': $scope.updDireccion,'ciudad': $scope.updCiudad,'email': $scope.updEmail,'actEmail':$scope.IsEmail,'guid': $cookies.get('logued')})
              .success(function(respuesta){
                if (respuesta.error) {
                  $scope.updError = respuesta.error;
                }else{
                  $scope.updError = "";
                  $scope.updSucces = "Los Datos se Actualizaron Correctamente";
                  setTimeout(function () {
                     $scope.updSucces = false;
                   }, 1000);
                }
              });
          }else{
              $scope.updError = "El Email no es válido";
          }


        }else{
            $scope.updError = "El nombre, apellido, celular y ciudad son obligatorios";
        }
      }else{
        $scope.updError = "La sesión ha caducado";
      }
    };

    $scope.updPassword = function(){
      if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {
        $scope.passSucces = "";
        if ($scope.oldPassword && $scope.newPassword) {
          if ($scope.newPass == $scope.newPassword) {
            $http.post("servicios/updPassword.php", {'oldPassword': $scope.oldPassword,'newPassword': $scope.newPassword,'guid': $cookies.get('logued')})
              .success(function(respuesta){

                if (respuesta) {
                  if (respuesta.error) {
                    $scope.passError = respuesta.error;
                  }else{
                    $scope.passError = "";
                    $scope.passSucces = "Los Datos se Actualizaron Correctamente";
                  }
                }else{
                  $scope.passError = "No se actualizaron los Datos" ;
                }
              });
          }else{
            $scope.passError = "Las contraseñas no coinciden";
          }
        }else{
          $scope.passError = "Los campos están vacíos";
        }
      }else{
        $scope.passError = "La sesión ha caducado";
      }

    };

    /*Data User*/
    if ($cookies.get('logued') && $cookies.get('logued') !== '' && $cookies.get('logued') !== null) {
      $http.post("servicios/user.php", {'guid': $cookies.get('logued')})
        .success(function(respuesta){

          if (respuesta !== '') {
            $scope.updAvatar = respuesta[0].avatar;
            $scope.updNombres = respuesta[0].nombres;
            $scope.updApellidos = respuesta[0].apellidos;
            $scope.updTelefono = respuesta[0].telefono;
            $scope.updCelular = respuesta[0].celular;
            $scope.updDireccion = respuesta[0].direccion;
            $scope.updCiudad = respuesta[0].ciudad;
            $scope.updEmail = respuesta[0].email;

            if (respuesta[0].email === '') {
              $scope.IsEmail = 1;
            }else{
              $scope.IsEmail = 0;
            }

            if (respuesta[0].email === '') {
              $scope.IsPass = 1;
            }else{
              $scope.IsPass = 0;
            }

          }else{
            $scope.loggedIn = '';
            $cookies.put('logued', '');
            $location.path('/login');
          }

        })
        .error(function(){
          $scope.user = "Error: No hay Datos" ;
      });
    }else {
        $location.path('/login');
    }
    /*End Data User*/

    /*CropImg*/
    $scope.myImage='';
    $scope.myCroppedImage='';
    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

    $scope.funavatar = function(){
      if ($cookies.get('logued') !== '') {
        if ($scope.myImage) {
          $http.post("servicios/updAvatar.php", {'avatar': $scope.myCroppedImage,'guid': $cookies.get('logued')})
            .success(function(respuesta){

              if (respuesta) {
                if (respuesta.error) {
                  $scope.avError = respuesta.error;
                }else{
                  $scope.avError = "";
                  $scope.avSucces = "Has actualizado tu Avatar";
                  $scope.callAvatar();
                }
              }else{
                $scope.avError = "No se actualizaron los Datos" ;
              }
            });

        }else{
          $scope.avError = "No hay ninguna imagen";
        }
      }else{
        $scope.avError = "La sesión ha caducado";
      }
    };
    /*End CropImg*/

  }]);
