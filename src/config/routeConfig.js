angular.module('Invent').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/createThing/");

  $stateProvider
    .state('createThing', {
      url: '/createThing/:idThing',
      templateUrl: 'src/components/thing/thing.html',
      controller: 'ThingController'
    })

    

});

