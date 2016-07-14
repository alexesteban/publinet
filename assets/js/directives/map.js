app.directive('map',['$http','$location',function ($http,location) {
  return {
    restrict: 'A',
    scope: {
       clienteDinamico: '=cliente'
     },
    link: function(scope, elem, attrs) {

      var isDetail = false;

      if (scope.$parent.latitud && scope.$parent.longitud) {
        isDetail = true;
      }else{

        if (scope.$parent.idCategoria && scope.$parent.idCiudad) {

          /*Data mapa*/
          $http.post("servicios/readMapCoords.php",{'idCategoria': scope.$parent.idCategoria,'idCiudad': scope.$parent.idCiudad})
            .success(function(respuesta){
              if (respuesta.errorBusqueda) {
                scope.dataMarks = 0;
              }else{
                scope.dataMarks = respuesta;
              }
            })
            .error(function(){
              scope.dataMarks = "Error: No hay Datos" ;
          });
          /*End mapa*/


        }else{
          /*Data mapa aleatorio*/

          $http.post("servicios/readMapAleatorio.php")
            .success(function(respuesta){
              scope.dataMarks = respuesta;
              console.log(respuesta);
            })
            .error(function(){
              scope.dataMarks = "Error: No hay Datos" ;
          });
          /*End mapa aleatorio*/
        }

      }




  setTimeout(function initialize()
  {

    var posMapLat = 0;
    var posMapLon = 0;

    if (isDetail === false) {
      if (scope.dataMarks.length > 0) {
        for (i = 0; i < (scope.dataMarks).length; i++) {
          posMapLat = scope.dataMarks[0].latitud;
          posMapLon = scope.dataMarks[0].longitud;
        }
      }else{
        posMapLat = 4.710988599999999;
        posMapLon = -74.072092;
      }
    }else{
      posMapLat = scope.$parent.latitud;
      posMapLon = scope.$parent.longitud;
    }






      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: new google.maps.LatLng(posMapLat, posMapLon),
          mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

      if (isDetail === true) {

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(scope.$parent.latitud, scope.$parent.longitud),
            icon: "assets/img/flag.png",
            map: map,
            empresaId: scope.$parent.id
        });

        attachSecretMessage(marker, '<img style="max-height:100px;" src="assets/img/brands/' + scope.$parent.logo + '" />');

      }else{



        for (i = 0; i < (scope.dataMarks).length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(scope.dataMarks[i].latitud, scope.dataMarks[i].longitud),
                icon: "assets/img/flag.png",
                map: map,
                empresaId: scope.dataMarks[i].id
            });

            attachSecretMessage(marker, '<img style="max-height:100px;" src="assets/img/brands/' + scope.dataMarks[i].logo + '" />');

        }
      }

      function attachSecretMessage(marker, secretMessage) {
        var infowindow = new google.maps.InfoWindow({
          content: secretMessage
        });

        marker.addListener('mouseover', function() {
          infowindow.open(marker.get('map'), marker);
        });

        marker.addListener('mouseout', function() {
          infowindow.close(marker.get('map'), marker);
        });

        marker.addListener('click', function() {
          var pathDev = 'index.debug.html#/';//Desarrollo
          //var pathPro = 'amarillas/#/';//Produccion
          window.location.href = pathDev + 'detalle_empresa/' + marker.empresaId;
        });
      }



  }, 500);







    }
  };
}

]);
