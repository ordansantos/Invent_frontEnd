

angular.module('Invent').controller('loginCtrl', function($scope, $location, authentication, $state) {

    var myScope = $scope;

    myScope.credentials = {
        email : "",
        password : ""
    };

    myScope.onSubmit = function () {
        authentication
            .login(myScope.credentials)
            .then(function(data){
                authentication.saveToken(data.data.token);
                $state.go('listing-things');
            }, function(error){
                alert(error.data.message);
            });
    };

    myScope.goRegister = function(){
        $state.go('register');

    }

});
