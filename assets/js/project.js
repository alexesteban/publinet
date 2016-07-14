var app = angular.module('app', [
  'angular-md5',
  'ngRoute',
  'amarillasCtrl',
  'ngCookies',
  'ngMaterial',
  'angular-input-stars',
  'youtube-embed',
  'angularjs.media.directives',
  '720kb.datepicker'

]);

window.fbAsyncInit = function() {
   FB.init({
     appId      : '1676184085974234',
     xfbml      : true,
     version    : 'v2.5'
   });
 };
 (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

var amarillasCtrl = angular.module('amarillasCtrl', ['ngCookies','ngMaterial','ngMessages','ngImgCrop']);
