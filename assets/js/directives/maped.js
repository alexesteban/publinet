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

        if (scope.$parent.latitud && scope.$parent.longitud ) {
            latitud = parseFloat(scope.$parent.latitud);
            longitud = parseFloat(scope.$parent.longitud);
            //infoWindow.setPosition(latitud,latitud);
        }
        initMap(latitud,longitud);
      },500);


      function initMap(latitud,longitud) {
        var map = new google.maps.Map(document.getElementById('maped'), {
          zoom: 16,
          center: {lat: latitud, lng: longitud}
        });

/*
        var infoWindow = new google.maps.InfoWindow({map: map});
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
        }
*/

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
