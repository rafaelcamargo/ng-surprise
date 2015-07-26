angular.module('ngSurprise',[]).controller('surpriseController',
  ['$scope', function($scope){

    var sequence = [];

    function storeKey(event){
      sequence.push(event.keyCode.toString());
      checkSequenceLength();
      checkSurprise();
    }

    function checkSequenceLength(){
      var triggerLength = $scope.surpriseTrigger.split(',').length;
      if(sequence.length > triggerLength)
        sequence.shift();
    }

    function checkSurprise(){
      if(hasSequenceMatchedSurpriseTrigger())
        $scope.surprise();
    }

    function hasSequenceMatchedSurpriseTrigger(){
      var triggerSequence = $scope.surpriseTrigger.split(',');
      for (var i = 0; i < triggerSequence.length; i++)
        if(triggerSequence[i] !== sequence[i])
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
