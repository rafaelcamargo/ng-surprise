angular.module('ngSurprise',[]).controller('surpriseController',
  ['$scope', function($scope){

    $scope.sequence = [];

    function storeKey(event){
      $scope.sequence.push(event.keyCode.toString());
      checkSequenceLength();
      checkSurprise();
    }

    function checkSequenceLength(){
      var triggerLength = $scope.surpriseTrigger.split(',').length;
      if($scope.sequence.length > triggerLength)
        $scope.sequence.shift();
    }

    function checkSurprise(){
      if(hasSequenceMatchedSurpriseTrigger())
        $scope.surprise();
    }

    function hasSequenceMatchedSurpriseTrigger(){
      var triggerSequence = $scope.surpriseTrigger.split(',');
      for (var i = 0; i < triggerSequence.length; i++)
        if(triggerSequence[i] !== $scope.sequence[i])
          return false;
      return true;
    }

    document.addEventListener('keydown', storeKey);

    function unbindKeypress(){
      document.removeEventListener('keydown', storeKey);
    }

    $scope.$on('$destroy', unbindKeypress);

}]).directive('surprise', function(){

  return {
    restrict: 'A',
    controller: 'surpriseController',
    scope: {
      surprise: '=',
      surpriseTrigger: '@'
    }
  };

});
