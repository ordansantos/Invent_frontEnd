angular.module('Invent').controller('ThingController', function($scope, $state, ThingFactory, RoomFactory, $stateParams) {

	var myScope = $scope;
	$scope.selected = [];
	$scope.thing;
  $scope.editable = false;

  var idThing = $stateParams.idThing;
	var thingsCount;
	$scope.listRooms;


	listRooms = function (){
		RoomFactory.getRooms().then(function(result){
			myScope.listRooms = result;
		})
	};

	listRooms();

  myScope.getThing = function (id) {
      console.log("getThing id:" + id);
      ThingFactory.getThing(id).then(function(result){
          console.log("resultado " + result._id);
          $scope.thing = result[0];
      }).catch(function(result){
          console.log("Error");
      })
  };

	listThings = function (){
		ThingFactory.getThings().then(function(result){
			myScope.listThings = result;
			myScope.thingsCount = result.length;
			console.log(result);
		})
	};

	listThings();

  if($stateParams.idThing){
      $scope.editable = true;
      myScope.getThing(idThing);
  };




	myScope.showThing = function(item){
		console.log(item._id);
		$state.go('create-edit-thing', { idThing : item._id});
	};

	//go to any state
	myScope.goTo = function(state) {
		$state.go(state);
	};

	myScope.query = {
    order: 'number_Patrimony',
    limit: 10,
    page: 1
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
