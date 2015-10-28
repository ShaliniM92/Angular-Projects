
var app =angular.module('polls',['ngRoute'])


app.controller('ListCtrl',['$scope','$http', function($scope,$http){
		  $scope.indexToShow = 0;

		  $scope.previous = function(){
        $scope.indexToShow = ($scope.indexToShow - 1) % $scope.questionaire.length;
    };
		   
		   $scope.next = function(){
        $scope.indexToShow = ($scope.indexToShow + 1) % $scope.questionaire.length;
    };
	
		$http.get('./questionaire.json').success(function(questionaire){
			$scope.questionaire=questionaire;
		});
	
	}]);
						
	