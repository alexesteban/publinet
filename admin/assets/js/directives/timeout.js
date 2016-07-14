app.directive('timeout', function () {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      setTimeout(function () {$(elem).fadeOut("slow");}, 1500
    );

    }
  };
});
