app.directive('middleBanners', function () {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

      setTimeout(function () {
        $(elem).responsiveSlides({
          pager: false,
          speed: 1200
        });
      }, 500);

    }
  };
});
