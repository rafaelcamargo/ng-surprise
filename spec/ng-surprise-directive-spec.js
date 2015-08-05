describe('ng-surprise-diretive', function(){

  var scope;
  var compile;
  var DEFAULT_TEMPLATE = '<div data-surprise="greet" ' +
    'data-surprise-trigger="38,38,37"></div>';
  
  beforeEach(module('ngSurprise'));

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();

    compile = function(template) {
      element = angular.element( template || DEFAULT_TEMPLATE );
      $compile( element )( scope );
      scope.$digest();
    };

  }));

  it('should properly be compiled', function(){
    compile();
    expect(scope).toBeDefined();
  });

});
