app.directive('maped',['$http','$location',function ($http,location) {
  return {
    restrict: 'A',
    scope: {
      maped: "&"
    },
    link: function(scope, elem, attrs) {

      setTimeout(function iniz(){
        var latitud = 4.703701004355773;
        var longitud = -74.06912684440613;

        //var infoWindow = new google.maps.InfoWindow({map: map});

        if (scope.$parent.empresa.latitud && scope.$parent.empresa.longitud ) {
            latitud = parseFloat(scope.$parent.empresa.latitud);
            longitud = parseFloat(scope.$parent.empresa.longitud);
            //infoWindow.setPosition(latitud,latitud);
        }
        initMap(latitud,longitud);
      },500);


      function initMap(latitud,longitud) {
        var map = new google.maps.Map(document.getElementById('maped'), {
          zoom: 16,
          center: {lat: latitud, lng: longitud}
        });


        var loca = { lat: latitud, lng: longitud };



        var isMark = new google.maps.Marker({
          position: loca,
          map: map
        });

        map.addListener('click', function(e) {
          placeMarker(e.latLng);
          //placeMarkerAndPanTo(e.latLng, map);
        });


        function placeMarker(location) {
          isMark.setPosition(location);

          scope.maped({
              latitud: location.lat(),
              longitud: location.lng()
          });

       }

      }


      function placeMarkerAndPanTo(latLng, map) {
        map.panTo(latLng);
      }




    }
  };
}

]);
