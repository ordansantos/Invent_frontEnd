angular.module('Invent').controller('ThingController', function($scope, $state, ThingFactory, RoomFactory, $stateParams, authentication) {

	var myScope = $scope;
	$scope.selected = [];
	$scope.thing;
  $scope.editable = false;
	myScope.situations = ["BOM", "RUIM", "DESUSO", "DOAÇÃO"]

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
      ThingFactory.getThing(id).then(function(result){
          $scope.thing = result;
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

	getKindCurrentUser = function () {
		var currentUserKind = authentication.currentUser();
		myScope.currentUserKind = currentUserKind.userKind;
	}

	getKindCurrentUser();


	myScope.showThing = function(item){
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

	myScope.thingReport = function () {
		console.log('report thing controller');
		ThingFactory.thingReport().then(function(result){
			$state.go('listing-things');
			console.log("Sucesso");
		}).catch(function(result){
			console.log("Error");
		})
	}

});
