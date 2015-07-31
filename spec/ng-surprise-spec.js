describe('ng-surprise', function(){

	var $scope, directiveScope, surpriseController, compile, element;
  var DEFAULT_TEMPLATE = '<div data-surprise="greet" data-surprise-trigger="38,38,37"></div>';
	
  beforeEach(module('ngSurprise'));

  beforeEach(inject(function($rootScope, $controller, $compile){
  	$scope = $rootScope.$new();
    directiveScope = $rootScope.$new();

    surpriseController = $controller('surpriseController', {
      $scope : $scope
    });

    compile = function(template) {
      element = angular.element( template || DEFAULT_TEMPLATE );
      $compile( element )( directiveScope );
      directiveScope.$digest();
    };

  }));

  it('should be properly compiled', function(){
    compile();
    console.log(directiveScope.$id);
    console.log($scope.$id);
    expect(directiveScope).toBeDefined();
  });

});
