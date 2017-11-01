angular.module('Invent').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/createThing");

  $stateProvider
    .state('createThing', {
      url: '/createThing',
      templateUrl: 'src/components/thing/thing.html',
      controller: 'ThingController'
    })

    

});
