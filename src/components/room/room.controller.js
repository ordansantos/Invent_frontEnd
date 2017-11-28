angular.module('Invent').controller('RoomController', function($scope, $state, RoomFactory, $stateParams) {

    var myScope = $scope;

    myScope.listRooms;

    listRooms = function (){
        RoomFactory.getRooms().then(function(result){
            myScope.listRooms = result;
        })
    };

    listRooms();



});
