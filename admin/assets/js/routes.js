app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/login.html',
    controller: 'loginCtrl'
  }).
  when('/login', {
    templateUrl: 'views/login.html',
    controller: 'loginCtrl'
  }).
  when('/home', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).
  when('/empresas', {
    templateUrl: 'views/empresas.html',
    controller: 'empresasCtrl'
  }).
  when('/empresa/:idEmpresa', {
    templateUrl: 'views/empresa.html',
    controller: 'empresaCtrl'
  }).
  when('/banners', {
    templateUrl: 'views/banners.html',
    controller: 'bannersCtrl'
  }).
  when('/blogs', {
    templateUrl: 'views/blogs.html',
    controller: 'blogsCtrl'
  }).
  when('/blog/:idBlog', {
    templateUrl: 'views/blog.html',
    controller: 'blogCtrl'
  }).
  when('/categorias', {
    templateUrl: 'views/categorias.html',
    controller: 'categoriasCtrl'
  }).
  when('/tags', {
    templateUrl: 'views/tags.html',
    controller: 'tagsCtrl'
  }).
  when('/suscriptores', {
    templateUrl: 'views/suscriptores.html',
    controller: 'suscriptoresCtrl'
  }).
  when('/info', {
    templateUrl: 'views/info.html',
    controller: 'infoCtrl'
  }).
  when('/pagos', {
    templateUrl: 'views/pagos.html',
    controller: 'pagosCtrl'
  }).
  when('/usuarios', {
    templateUrl: 'views/usuarios.html',
    controller: 'usuariosCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
