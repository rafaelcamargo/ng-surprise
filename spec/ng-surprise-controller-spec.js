describe('ng-surprise-controller', function(){

  var $scope;
  var surpriseController;
  var wasSurpriseExecuted;

  function keydown(key){
    var event = document.createEvent('Event');
    event.keyCode = key;
    event.initEvent('keydown');
    document.dispatchEvent(event);
  }
  
  beforeEach(module('ngSurprise'));

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    
    surpriseController = $controller('surpriseController', {
      $scope : $scope
    });

    $scope.surprise = function(){
      wasSurpriseExecuted = true;
    }

    $scope.surpriseTrigger = '38,38,37';
  }));

  afterEach(inject(function($rootScope){
    $rootScope.$broadcast('$destroy');
    wasSurpriseExecuted = null;
  }));

  it('executes surprise action after properly perform a surprise trigger',
    function(){
    keydown(38);
    keydown(38);
    keydown(37);
    expect(wasSurpriseExecuted).toBeTruthy();
  });

  it('should not execute surprise action after a wrong key sequence typed',
    function(){
    keydown(38);
    keydown(38);
    keydown(40);
    expect(wasSurpriseExecuted).toBeFalsy();
  });

  it('removes first element of sequence when a sequence longer than surprise trigger is typed',
    function(){
    keydown(38);
    keydown(39);
    keydown(40);
    keydown(41);
    expect($scope.sequence.length).toEqual(3);
    expect($scope.sequence[0]).toEqual('39');
  })

});
