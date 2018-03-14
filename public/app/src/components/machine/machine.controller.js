angular.module('Invent').controller('MachineController', function($scope, $state, $sce, MachineFactory, RoomFactory, $stateParams, authentication) {

    var myScope = $scope;
    var machinesCount;
    $scope.selected = [];
    $scope.machine;
    $scope.machines;
    $scope.editable = false;
    var today = new Date();
    $scope.maxDate = new Date(today.getFullYear(),today.getMonth() , today.getDate());

    $scope.query = {
      order: 'number_Patrimony',
      limit: 10,
      page: 1
    };

    if($scope.machine != undefined){
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
        MachineFactory.getMachine(id).then(function(result){
            console.log(result);
            $scope.machine = result;
        }).catch(function(result){
            console.log("Error");
        })
    };


    getMachines = function () {

        MachineFactory.getMachines().then(function (result) {
            myScope.machinesCount = result.length;
            myScope.machines = result.reverse();
        });
    };

    getMachines();




    if($stateParams.idMachine){
        $scope.editable = true;
        myScope.getMachine(idMachine);
    };

    myScope.showMachine = function(machine){
       $state.go('create-edit-machine', { idMachine : machine._id});
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

    myScope.machineReport = function () {
        console.log('report machine controller');
        MachineFactory.machineReport().then(function(result){
            $state.go('list-machines');
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

    getKindCurrentUser = function () {
  		var currentUserKind = authentication.currentUser();
  		myScope.currentUserKind = currentUserKind.userKind;
  	}

    getKindCurrentUser();

    // PARTE DA FOTO

    $scope.trustSrc = function(src) {
  		return $sce.trustAsResourceUrl(src);
  		myScope.clickOK = false;
  	}

  	myScope.viewImage = function (machine) {
  		var myIp = 'http://localhost:8081/uploads/machinesImages/'
  		myScope.imageUrl = myIp + machine.image;
  		myScope.clickOK = true;
  	}

  	myScope.getHasImage = function (machine) {
  		myScope.hasImage = machine.image != '';
  		return myScope.hasImage;
  	}


});
