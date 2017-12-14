angular.module('Invent').controller('ListObjectsRoomController', function($scope, $state, MachineFactory, ThingFactory, RoomFactory, $stateParams) {

    var myScope = $scope;

    myScope.listMachinesInRoom;
    myScope.listThingsInRoom;

    myScope.listResult;

    var room = $stateParams.room;

    listMachinesInRoom = function (room) {
        MachineFactory.listMachinesInRoom(room).then(function(result){
            myScope.listMachinesInRoom = result;

        })
    };

    listThingsInRoom = function (room) {
        ThingFactory.listThingsInRoom(room).then(function(result){
            myScope.listThingsInRoom = result;
            myScope.listResult = myScope.listMachinesInRoom.concat(myScope.listThingsInRoom);
        })
    };

    myScope.showThing = function(id){
  		$state.go('create-edit-thing', { idThing : id});
  	};

    listMachinesInRoom($stateParams.room);

    listThingsInRoom($stateParams.room);


});
