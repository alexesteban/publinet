app.directive('sortable',['$http',function ($http) {
  return {
    restrict: 'A',
    scope: {
       clienteDinamico: '=cliente'
     },
    link: function(scope, elem, attrs) {

      $(elem).sortable({ placeholder: "ui-state-highlight",opacity: 0.6, cursor: 'move', update: function() {
          var order = $(this).sortable("serialize");
          var dataSort = $(this).attr("data");
          var arrOr = order.split("&articulo[]=");
          arrOr[0] = arrOr[0].replace("articulo[]=","");

          for (var i = 0; i < arrOr.length; i++) {
            $http.post("servicios/updOrden.php",{'dataSort':dataSort,'idObj':arrOr[i],'orden':i+1});
          }


        }
        });
    }
  };
}

]);
