angular.module('Invent').controller('MachineController', function($scope, $state, MachineFactory, $stateParams) {

    var myScope = $scope;

    $scope.machine;
    $scope.editable = false;

    var idMachine = $stateParams.idMachine;

    myScope.getMachine = function (id) {
        console.log(id);
        MachineFactory.getMachine(id).then(function(result){
            console.log(result);
            $scope.thing = result;
        }).catch(function(result){
            console.log("Error");
        })
    };




    if($stateParams.idMachine){
        $scope.editable = true;
        myScope.getMachine(idMachine);
    };



    //go to any state
    myScope.goTo = function(state) {
        $state.go(state);
    };

    myScope.addMachine = function(machine){
        MachineFactory.addMachine(machine).then(function(result){
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

    myScope.editMachine = function (machine) {
        MachineFactory.editMachine(machine).then(function(result){
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

});
