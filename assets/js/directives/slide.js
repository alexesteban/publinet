app.directive('slide', function () {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

      setTimeout(function () {
        $(elem).responsiveSlides({
          auto: true,
          pager: true,
          nav: true,
          speed: 1200,
          namespace: "callbacks",
          before: function () {
            $('.events').append("<li>before event fired.</li>");
          },
          after: function () {
            $('.events').append("<li>after event fired.</li>");
          }
        });
      }, 500);

      $(".ocarousel").each(function() {
        return new Ocarousel(this);
            });

          }
        };
      });
