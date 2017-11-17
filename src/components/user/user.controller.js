angular.module('Invent').controller('UserController', function($scope, $state, UserFactory, $mdDialog) {

    var myScope = $scope;

    $scope.tornarAdm = function(user){
        user.userKind = 'ADMIN';
        UserFactory.editUser(user).then(function(result){
            $state.go('list-users')
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

    $scope.setUserKind = function(ev, user) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Você deseja modificar o tipo do usuário?')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Sim')
            .cancel('Cancelar');

        $mdDialog.show(confirm).then(function() {
            $scope.tornarAdm(user);
        }, function() {
            $state.go('list-users');
        });
    };

    getUsers();


});
