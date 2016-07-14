app.directive('tooltip', function () {
  return {
    restrict: 'A',
    link: function() {
      $('[data-toggle="tooltip"]').tooltip();
    }
  };
});
