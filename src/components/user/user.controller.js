angular.module('Invent').controller('UserController', function($scope, $state, UserFactory, $mdDialog, RoomFactory) {

    var myScope = $scope;
    var usersCount;
    $scope.listRooms;

    listRooms = function (){
        RoomFactory.getRooms().then(function(result){
            myScope.listRooms = result;
        })
    };

    listRooms();

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

    $scope.createUser = function(user){
      user.userKind = 'NORMAL'
      UserFactory.addUser(user).then(function(result){
        $state.go('list-users')
        console.log("Sucesso");
      }).catch(function(result){
        console.log("Error");
      })
    };

    $scope.goTo = function(state) {
  		$state.go(state);
  	};

    getUsers = function () {

        UserFactory.getUsers().then(function (result) {
            myScope.usersCount = result.length;
            myScope.users = result.reverse();
        });
    };

    myScope.query = {
      order: 'name',
      limit: 10,
      page: 1
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


}).directive("compareTo", function(){
  return {
      require: "ngModel",
      scope: {
          otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {

          ngModel.$validators.compareTo = function(modelValue) {
              return modelValue == scope.otherModelValue;
          };

          scope.$watch("otherModelValue", function() {
              ngModel.$validate();
          });
      }
  };
});
