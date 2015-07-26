describe('ng-surprise', function(){

	var scope, surpriseController;
	
	beforeEach(function(){
    module('ngSurprise');
  });

  beforeEach(inject(function($rootScope, $controller){
  	scope = $rootScope.$new();
    surpriseController = $controller('surpriseController', {
      $scope : scope
    });
  }));

  it('should be test working', function(){
  	console.log(surpriseController);
    expect($scope).toBeDefined();
  });

});
