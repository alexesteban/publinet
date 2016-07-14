amarillasCtrl.controller('loginCtrl', ['$scope', '$http', '$cookies',

  function($scope,$http,$cookies) {

    $scope.FBLogin = function(){
      FB.login(function(response) {
          if (response.authResponse) {
           console.log('Welcome!  Fetching your information.... ');
           FB.api('/me', function(response) {
             var guid = response.id;
             var nombres = response.name;
             var email = response.email;

             if (nombres === null) {
               nombres = '';
             }

             if (email === null) {
               email = '';
             }

             $http.post('servicios/register.php', {'nombres':nombres, 'apellidos': '', 'nacimiento': '', 'pais': '', 'email': email, 'password': '', 'guid':guid})
                 .success(function(data) {
                   if(data.error){
                       $scope.errServ = data.error;
                   }else{
                     $cookies.put('logued', guid);
                     $scope.callAvatar();
                     $scope.logued();
                   }

                 }).error(function(data, status) { // called asynchronously if an error occurs
               // or server returns response with an error status.
               $scope.errors.push(status);
             });



           }, {scope:'email'});
          } else {
           console.log('User cancelled login or did not fully authorize.');
          }
      });
    };

    $scope.submitRegistro = function(){
      $scope.errPoliticas = "";
      $scope.errPass = "";
      $scope.errDatos = "";
      if ($scope.regPoliticas) {
        if ($scope.regPass == $scope.regPassword) {
          if ($scope.regNombres && $scope.regApellidos && $scope.regDate && $scope.regEmail && $scope.regPassword) {
            var guid = $scope.createGuid();

            $http.post('servicios/register.php', {'nombres': $scope.regNombres, 'apellidos': $scope.regApellidos, 'nacimiento': $scope.regDate, 'pais': $scope.regPais, 'email': $scope.regEmail, 'password': $scope.regPassword, 'guid':guid})
                .success(function(data) {

                  if(data.error){
                      $scope.errServ = data.error;
                  }else{
                    $cookies.put('logued', guid);
                    $scope.callAvatar();
                    $scope.logued();
                  }

                }).error(function(data, status) { // called asynchronously if an error occurs
              // or server returns response with an error status.
              $scope.errors.push(status);
            });

          }else{
              $scope.errDatos = "Todos los campos son obligatorios";
          }
        }else{
            $scope.errPass = "El password no es igual";
        }
      }else{
        $scope.errPoliticas = "Debes aceptar políticas de privacidad";
      }
    };

    $scope.submitLogin = function(){
      $scope.error = '';
      if($scope.email && $scope.password){
        $http.post('servicios/login.php', {'email': $scope.email, 'password': $scope.password})
            .success(function(data) {

              if(data.error){
                $scope.error = data.error;
              }else{

                var guid = data.guid;
                $cookies.put('logued', guid);
                $scope.callAvatar();
                $scope.logued();
              }

            }).error(function(data, status) { // called asynchronously if an error occurs
          // or server returns response with an error status.
          $scope.errors.push(status);
        });
      }else{
        $scope.error = "Por favor ingrese los datos";
        $scope.login = false;
      }
      /*
      $http.post("servicios/login.php")
          .success(function(respuesta){
            var usuarios = respuesta;

            for(var i = 0; i < usuarios.length; i++){
              if(usuarios[i].email === $scope.user.email){
                if(usuarios[i].password === $scope.user.password){
                  $scope.login = true;
                }else{
                  $scope.error = "Password inválido";
                }
              }
            }


          })
          .error(function(){
            $scope.usuarios = "Error: No hay Datos" ;
          });
          */
    };

    /*Data Countries*/
    $http.post("servicios/countries.php")
      .success(function(respuesta){

        $scope.countries = respuesta;

      })
      .error(function(){
        $scope.countries = "Error: No hay Datos" ;
    });
    /*End Data Countries*/

    $scope.showLostPass = false;

    $scope.changePass = function(){
        if (!$scope.showLostPass) {
          $scope.showLostPass = true;
        }else{
          $scope.showLostPass = false;
        }
    };

    isValidEmail = function (mail){
      return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    };
    $scope.send = false;

    $scope.sendLostPass = function(){
      $scope.error = '';
      if ($scope.emailLostPass) {
        if (isValidEmail($scope.emailLostPass)) {
          var guid_lost = $scope.createGuid();
          $http.post("servicios/recuperarPass.php",{'email':$scope.emailLostPass,'guid':guid_lost})
            .success(function(respuesta){

              if (respuesta.error) {
                  $scope.error = respuesta.error;
              }else if (respuesta.sended) {
                $scope.sended = respuesta.sended;
              }else{
                $scope.send = true;
              }

            });
        }else{
          $scope.error = 'Ingresa un Email válido';
        }
      }else{
        $scope.error = 'El Email es obligatorio';
      }
    };

  }]);
