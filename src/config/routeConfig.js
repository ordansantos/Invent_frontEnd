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
          templateUrl: 'src/components/machine/create-edit-machine.html',
          controller: 'MachineController'
      })

      .state('list-machines', {
          url: '/list-machines',
          templateUrl: 'src/components/machine/list-machines/list-machines.html',
          controller: 'MachineController'
      })

      .state('list-users', {
          url: '/list-users',
          templateUrl: 'src/components/user/list-users.html',
          controller: 'UserController'
      })

      .state('listing-things', {
          url: '/listing-things',
          templateUrl: 'src/components/thing/listing-things/listing-things.html',
          controller: 'ThingController'
      })

    .state('create-edit-mydata', {
          url: '/create-edit-mydata/:idMyData',
          templateUrl: 'src/components/mydata/create-edit-mydata.html',
          controller: 'MyDataController'
        })

    .state('create-user', {
      url: '/create-user/:idUser',
      templateUrl: 'src/components/user/create-user.html',
      controller: 'UserController'
    })

      .state('listing-rooms', {
          url: '/listing-rooms',
          templateUrl: 'src/components/room/list-rooms.html',
          controller: 'RoomController'
      })

      .state('list-objetcs-room', {
          url: '/list-objetcs-room/:room',
          templateUrl: 'src/components/room/list-objects-room/list-objects-room.html',
          controller: 'ListObjectsRoomController'
      })


});
