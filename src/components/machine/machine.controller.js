angular.module('Invent').controller('MachineController', function($scope, $state, MachineFactory, RoomFactory, $stateParams) {

    var myScope = $scope;

    $scope.machine;
    $scope.machines;
    $scope.editable = false;
    var today = new Date();
    $scope.maxDate = new Date(today.getFullYear(),today.getMonth() , today.getDate());


    if($scope.machine =! undefined){
        console.log($scope.machine);
        $scope.acquisition_date = new Date();
    }


    $scope.listRooms;


    var idMachine = $stateParams.idMachine;

    listRooms = function (){
        RoomFactory.getRooms().then(function(result){
            myScope.listRooms = result;
        })
    };

    listRooms();

    myScope.getMachine = function (id) {
        console.log(id);
        MachineFactory.getMachine(id).then(function(result){
            console.log(result);
            $scope.machine = result;
        }).catch(function(result){
            console.log("Error");
        })
    };


    getMachines = function () {

        MachineFactory.getMachines().then(function (result) {
            myScope.machines = result.reverse();
        });
    };

    getMachines();




    if($stateParams.idMachine){
        $scope.editable = true;
        myScope.getMachine(idMachine);
    };

    myScope.showMachine = function(id){
        console.log(id);
       $state.go('create-edit-machine', { idMachine : id});
    };

    //go to any state
    myScope.goTo = function(state) {
        $state.go(state);
    };

    myScope.addMachine = function(machine){
        MachineFactory.addMachine(machine).then(function(result){
            $state.go('list-machines');
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

    myScope.editMachine = function (machine) {
        MachineFactory.editMachine(machine).then(function(result){
            $state.go('list-machines');
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

});
