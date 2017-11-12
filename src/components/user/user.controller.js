angular.module('Invent').controller('UserController', function($scope, $state) {

    var myScope = $scope;

    $scope.users = [
        {
            name:'Manuel',

            email:'manuel.neto@ccc.ufcg.edu.br',

            room: 'Sala 201',

            type: 'NORMAL'
        },

        {
            name: 'Lucas',

            email:'lucas.wilker@ccc.ufcg.edu.br',

            room:'Sala 24',

            type: 'NORMAL'
        },

        {
            name: 'icaro',

            email: 'icaro.medeiros@ccc.ufcg.edu.br',

            room: 'Sala 301',

            type: 'NORMAL'
        },

        {
            name:'Manuel',

            email:'manuel.neto@ccc.ufcg.edu.br',

            room: 'Sala 201',

            type: 'NORMAL'
        },

        {
            name: 'Lucas',

            email:'lucas.wilker@ccc.ufcg.edu.br',

            room:'Sala 24',

            type: 'NORMAL'
        },

        {
            name: 'icaro',

            email: 'icaro.medeiros@ccc.ufcg.edu.br',

            room: 'Sala 301',

            type: 'NORMAL'
        }

    ];


    $scope.tornarAdm = function(user){
        user.type = 'ADMIN';
        console.log(user);
    };


});
