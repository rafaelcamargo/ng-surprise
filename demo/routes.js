;(function(app){

  app.config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'demo/about-template.html',
      controller: 'aboutController'
    }).when('/removed', {
      templateUrl: 'demo/removed-template.html',
    }).otherwise({
      redirectTo: '/'
    });
  });

})(app);