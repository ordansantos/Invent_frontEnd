angular.module('Invent').controller('ThingController', function($scope, $state) {

	var myScope = $scope;

	//go to any state
	myScope.goTo = function(state) {
		$state.go(state);
	};

	$scope.currentThing = 'Cadeira';


});
