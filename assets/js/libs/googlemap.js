/*Google Map*/
function initialize() 
	{
		var mapCanvas = document.getElementById('map');
	    var mapOptions = 
    	{
	    	center: new google.maps.LatLng(4.8648005, -74.0684276,14),
	        zoom: 14,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
       	}
        var map = new google.maps.Map(mapCanvas, mapOptions)
    }
google.maps.event.addDomListener(window, 'load', initialize);