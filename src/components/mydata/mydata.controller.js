angular.module('Invent').controller('MyDataController', function($scope, $state, MyDataFactory, $stateParams) {

	var myScope = $scope;

	$scope.mydata;
    $scope.editable = false;

    var idMyData = $stateParams.idMyData;

    myScope.getMyData = function (id) {
        console.log(id);
        MyDataFactory.getThing(id).then(function(result){
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


	//go to any state
	myScope.goTo = function(state) {
		$state.go(state);
	};

});
