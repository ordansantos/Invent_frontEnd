angular.module('Invent').controller('ThingController', function($scope, $state) {

	var myScope = $scope;

	//go to any state
	myScope.goTo = function(state) {
		$state.go(state);
	};

	myScope.addThing = function(thing){
		ThingFactory.addThing(thing).then(function(result){
			myScope.showSuccessMessage('Sucesso ao adicionar!');
		}).catch(function(result){
			myScope.showNetworkError('Erro ao adicionar!');
		})
	}

	$scope.currentThing = 'Cadeira';


});
