angular.module('Invent').directive('sidenav', function() {
    return {
        templateUrl: 'src/components/sidenav/sidenav.html',
        controller: 'SidenavController'
    };
});