app.directive('datapicker', function () {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      $( elem ).datepicker();
    }
  };
});
