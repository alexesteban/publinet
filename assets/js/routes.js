app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).
  when('/otros_servicios', {
    templateUrl: 'views/otros_servicios.html',
    controller: 'serviciosCtrl'
  }).
  when('/registrar_empresa', {
    templateUrl: 'views/registrar_empresa.html',
    controller: 'regEmpresaCtrl'
  }).
  when('/blog', {
    templateUrl: 'views/blog.html',
    controller: 'blogCtrl'
  }).
  when('/blog_detail/:blogId', {
    templateUrl: 'views/blog_detail.html',
    controller: 'blogDetailCtrl'
  }).
  when('/comprar', {
    templateUrl: 'views/comprar.html',
    controller: 'comprarCtrl'
  }).
  when('/contactanos', {
    templateUrl: 'views/contactanos.html',
    controller: 'contactanosCtrl'
  }).
  when('/login', {
    templateUrl: 'views/login.html',
    controller: 'loginCtrl'
  }).
  when('/mi_directorio', {
    templateUrl: 'views/mi_directorio.html',
    controller: 'miDirectorioCtrl'
  }).
  when('/mi_perfil', {
    templateUrl: 'views/mi_perfil.html',
    controller: 'miPerfilCtrl'
  }).
  when('/mis_empresas', {
    templateUrl: 'views/mis_empresas.html',
    controller: 'misEmpresasCtrl'
  }).
  when('/empresa/:guid', {
    templateUrl: 'views/empresa.html',
    controller: 'empresaCtrl'
  }).
  when('/pauta_con_nosotros', {
    templateUrl: 'views/pauta_con_nosotros.html',
    controller: 'pautaCtrl'
  }).
  when('/politicas', {
    templateUrl: 'views/politicas.html',
    controller: 'politicasCtrl'
  }).
  when('/resultado/:idCategoria/:idCiudad', {
    templateUrl: 'views/resultado.html',
    controller: 'resultadoCtrl'
  }).
  when('/solicitar_cotizacion', {
    templateUrl: 'views/solicitar_cotizacion.html',
    controller: 'cotizacionCtrl'
  }).
  when('/basic_demo', {
    templateUrl: 'views/basic_demo.html',
    controller: 'basic_demoCtrl'
  }).
  when('/premium_demo', {
    templateUrl: 'views/premium_demo.html',
    controller: 'premium_demoCtrl'
  }).
  when('/gold_demo', {
    templateUrl: 'views/gold_demo.html',
    controller: 'gold_demoCtrl'
  }).
  when('/detalle_empresa/:idEmpresa', {
    templateUrl: 'views/detalle_empresa.html',
    controller: 'detalleEmpresaCtrl'
  }).
  when('/pago/:guidEmpresa/:plan', {
    templateUrl: 'views/pago.html',
    controller: 'pagoCtrl'
  }).
  when('/change_password/:guid', {
    templateUrl: 'views/change_password.html',
    controller: 'changepasswordCtrl'
  }).
  when('/response/:referenceCode', {
    templateUrl: 'views/response.html',
    controller: 'responseCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
