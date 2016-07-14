app.directive('cotizacion', function () {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

      setTimeout(function () {
        /* An Cotización */
        AdobeEdge.loadComposition('assets/js/Cotizacion', 'EDGE-1986702036', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0px",
            maxW: "undefined",
            width: "514px",
            height: "270px"
        }, {"dom":{}}, {"dom":{}});
        /* /An Cotizacion */
      }, 200);


    }
  };
});
