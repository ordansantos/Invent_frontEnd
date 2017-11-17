angular.module('Invent').controller('MachineController', function($scope, $state, MachineFactory, $stateParams) {

    var myScope = $scope;

    $scope.machine;
    $scope.machines;
    $scope.editable = false;

    $scope.acquisition_date = new Date();


    var idMachine = $stateParams.idMachine;

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
