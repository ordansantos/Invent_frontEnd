angular.module('Invent').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('create-edit-thing', {
      url: '/create-edit-thing/:idThing',
      templateUrl: 'src/components/thing/create-edit-thing.html',
      controller: 'ThingController'
    })

    .state('view-image-thing', {
        url: '/view-image-thing/:image',
        templateUrl: 'src/components/thing/view-image-thing.html',
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

      .state('create-edit-room', {
          url: '/create-edit-room/:idRoom',
          templateUrl: 'src/components/room/create-edit-room/create-edit-room.html',
          controller: 'RoomController'
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

  .state('register', {
      url: '/register',
      templateUrl: 'src/components/auth/register/register.html',
      controller: 'registerCtrl'
  })

  .state('login', {
      url: '/login',
      templateUrl: 'src/components/auth/login/login.html',
      controller: 'loginCtrl'
  });

});


angular.module('Invent').run(function($rootScope, $location, authentication, $http, $state, $timeout) {

    $rootScope.$on('$stateChangeStart', function (event, nextRoute, currentRoute) {

        $http.defaults.headers.common.Authorization = 'Bearer '+ authentication.getToken();


        if ($location.path() !== '/login') {
            if (!authentication.isLoggedIn()){
                $timeout(function(){$state.go('login');});
            }
        }

        if ($location.path() === '/login') {
            if (authentication.isLoggedIn()){
                $timeout(function(){$state.go('listing-things');});
            }
       }


    });
});
