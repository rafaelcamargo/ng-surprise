;(function(app){

  app.controller('aboutController', ['$scope', function($scope){

  	$scope.year = new Date().getFullYear();

    $scope.message = '';

    $scope.setMessage = function(){
      $scope.$apply(function(){
        $scope.message = 'woof woof!';
      });
    };

  }]);

})(app);
