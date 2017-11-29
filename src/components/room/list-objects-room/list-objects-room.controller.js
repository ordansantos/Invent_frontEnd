angular.module('Invent').controller('ListObjectsRoomController', function($scope, $state, MachineFactory, ThingFactory, RoomFactory, $stateParams) {

    var myScope = $scope;

    myScope.listMachinesInRoom;
    myScope.listThingsInRoom;

    myScope.listResult = listMachinesInRoom.concat(listThingsInRoom);

    listMachinesInRoom = function (room) {
        MachineFactory.listMachinesInRoom(room).then(function(result){
            myScope.listMachinesInRoom = result;
        })
    };

    listThingsInRoom = function (room) {
        ThingFactory.listThingsInRoom(room).then(function(result){
            myScope.listThingsInRoom = result;
        })
    };

    listMachinesInRoom('Sala 102');

    listThingsInRoom('Sala 102');


});
