angular.module('Invent').controller('MyDataController', function($scope, $state, $stateParams, UserFactory) {

	var myScope = $scope;

	$scope.mydata;
    $scope.editable = false;

    var idMyData = $stateParams.idMyData;

    myScope.getMyData = function (id) {
        console.log(id);
        UserFactory.getUser(id).then(function(result){
            console.log(result);
            $scope.mydata = result;
        }).catch(function(result){
            console.log("Error");
        })
    };

    if($stateParams.idMyData){
        $scope.editable = true;
        myScope.getMyData(idMyData);
    };


    myScope.editMyData = function (myData) {
        UserFactory.editUser(myData).then(function(result){
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    }


    if($stateParams.idMyData){
        $scope.editable = true;
        myScope.getMyData(idMyData);
    };


	//go to any state
	myScope.goTo = function(state) {
		$state.go(state);
	};

});
