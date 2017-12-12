angular.module('Invent').controller('RoomController', function($scope, $state, RoomFactory, $stateParams) {

    var myScope = $scope;

    myScope.listRooms;

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


    listRooms = function (){
        RoomFactory.getRooms().then(function(result){
            myScope.listRooms = result;
        })
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
