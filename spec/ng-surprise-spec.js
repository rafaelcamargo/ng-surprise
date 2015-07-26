describe('ng-surprise', function(){

	var $scope, surpriseController;
	
  beforeEach(module('ngSurprise'));

  beforeEach(inject(function($rootScope, $controller){
  	$scope = $rootScope.$new();
    surpriseController = $controller('surpriseController', {
      $scope : $scope
    });
  }));

  it('should be test working', function(){
    expect($scope).toBeDefined();
  });

});
