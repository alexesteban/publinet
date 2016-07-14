app.directive('datatable', function () {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

      setTimeout(function () {$(elem).DataTable();}, 500);

    }
  };
});
