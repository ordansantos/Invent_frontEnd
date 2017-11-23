angular.module('Invent').controller('SidenavController', function($scope, $state, $mdSidenav, $location, $window) {

    var myScope = $scope;

    myScope.setRoute = function(route) {
        if (route == 'sair') {
            $state.go('inicio');
            sessionStorage.clear();
        }
        $state.go(route);
    };

    myScope.toggleSidenav = function(menu) {
        $mdSidenav(menu).toggle();
    };

    myScope.isUserConfigs = function(data) {
        return data === "Meus dados";
    };

    myScope.isNotification = function(data) {
        return data === "Nofiticações";
    };

    myScope.toggle = function(item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
    };

    myScope.data = {

        sidenav: {
            actions: [

                {
                    name: 'Objetos',
                    icon: 'content_paste',
                    link: 'listing-things'
                },

                {
                    name: 'Máquinas',
                    icon: 'computer',
                    link: 'list-machines'
                },

                {
                    name: 'Usuários',
                    icon: 'people',
                    link: 'list-users'
                },

                {
                    name: 'Salas',
                    icon: 'map',
                    link: 'salas'
                },

                {
                    name: 'Meus dados',
                    icon: 'assignment_ind',
                    link: 'create-edit-mydata'
                },
                {
                    name: 'Sair',
                    icon: 'exit_to_app',
                    link: 'sair'
                }
            ]

        }
    };
});
