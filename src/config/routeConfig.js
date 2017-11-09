angular.module('Invent').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/create-edit-thing/");

  $stateProvider
    .state('create-edit-thing', {
      url: '/create-edit-thing/:idThing',
      templateUrl: 'src/components/thing/create-edit-thing.html',
      controller: 'ThingController'
    })

      .state('create-edit-machine', {
          url: '/create-edit-machine/:idMachine',
          templateUrl: 'src/components/thing/create-edit-machine.html',
          controller: 'MachineController'
      })

    

});

