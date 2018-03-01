angular.module('Invent').controller('RoomController', function($scope, $state, RoomFactory, $stateParams, MachineFactory, ThingFactory, authentication) {

    var myScope = $scope;
    myScope.listRooms;
    myScope.roomsCount;
    var idRoom = $stateParams.idRoom;

    myScope.getRoom = function (id) {
        console.log(id);
        RoomFactory.getRoom(id).then(function(result){
            console.log(result);
            $scope.room = result;
        }).catch(function(result){
            console.log("Error");
        })
    };

    if($stateParams.idRoom){
        $scope.editable = true;
        myScope.getRoom(idRoom);
    };

    myScope.query = {
      order: 'number_Patrimony',
      limit: 10,
      page: 1
    };

    objectsCount = function (room) {
      MachineFactory.listMachinesInRoom(room.name).then(function(result){
          room.things = result;
      });
      ThingFactory.listThingsInRoom(room.name).then(function(result){
          room.things = room.things.concat(result);
      })
    }

    getKindCurrentUser = function () {
  		var currentUserKind = authentication.currentUser();
  		myScope.currentUserKind = currentUserKind.kind;
  	}

  	getKindCurrentUser();

    listRooms = function (){
        RoomFactory.getRooms().then(function(result){
            myScope.roomsCount = result.length;
            myScope.listRooms = result;
        }).then(function () {
          myScope.listRooms.forEach(function (entry) {
            objectsCount(entry);
          })
        });
    };

    myScope.showRoom = function(room_name){
        $state.go('list-objetcs-room', { room : room_name});
    }


    $scope.editRoom = function(room){
        RoomFactory.editRoom(room).then(function(result){
            $state.go('listing-rooms')
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

    $scope.createRoom = function(room){
        console.log(room);
        RoomFactory.addRoom(room).then(function(result){
            $state.go('listing-rooms');
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

    //go to any state
    myScope.goTo = function(state) {
        $state.go(state);
    };


    listRooms();


});
