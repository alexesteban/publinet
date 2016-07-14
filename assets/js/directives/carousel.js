app.directive('carousel', function () {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

      setTimeout(function () {
        $(".ocarousel").each(function() {
          return new Ocarousel(this);
        });
      }, 300);


    }
  };
});