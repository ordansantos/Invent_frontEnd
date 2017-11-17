angular.module('Invent').controller('ThingController', function($scope, $state, ThingFactory, $stateParams) {

	var myScope = $scope;

	$scope.thing;
  $scope.editable = false;

  var idThing = $stateParams.idThing;

  myScope.getThing = function (id) {
      console.log(id);
      ThingFactory.getThing(id).then(function(result){
          console.log(result);
          $scope.thing = result;
      }).catch(function(result){
          console.log("Error");
      })
  };

	listThings = function (){
		ThingFactory.getThings().then(function(result){
			myScope.listThings = result;
		})
	};

	listThings();

  if($stateParams.idThing){
      $scope.editable = true;
      myScope.getThing(idThing);
  };


	myScope.showThing = function(id){
		console.log(id);
		$state.go('create-edit-thing', { idThing : id});
	};

	//go to any state
	myScope.goTo = function(state) {
		$state.go(state);
	};

	myScope.addThing = function(thing){
		ThingFactory.addThing(thing).then(function(result){
			$state.go('listing-things');
			console.log("Sucesso");
		}).catch(function(result){
			console.log("Error");
		})
	};

	myScope.editThing = function (thing) {
	      ThingFactory.editThing(thing).then(function(result){
			  $state.go('listing-things');
	          console.log("Sucesso");
	      }).catch(function(result){
	          console.log("Error");
	      })
	  };

});
