var app = angular.module('app', [
  'ngRoute',
  'cmsCtrl',
  'ngCookies',
  'ngMaterial',
  'ui-iconpicker'
]);

var cmsCtrl = angular.module('cmsCtrl', ['ngCookies','ngMaterial','ngMessages','ngImgCrop']);
