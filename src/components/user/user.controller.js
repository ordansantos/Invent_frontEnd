angular.module('Invent').controller('UserController', function($scope, $state, UserFactory) {

    var myScope = $scope;

    $scope.tornarAdm = function(user){
        user.userKind = 'ADMIN';
        UserFactory.editUser(user).then(function(result){
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

    $scope.editUser = function(user){
        UserFactory.editUser(user).then(function(result){
            console.log("Sucesso");
        }).catch(function(result){
            console.log("Error");
        })
    };

    getUsers = function () {

        UserFactory.getUsers().then(function (result) {
            myScope.users = result.reverse();
        });
    };

    getUsers();


});
