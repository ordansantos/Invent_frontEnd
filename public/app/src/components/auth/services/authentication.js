(function () {

    var myIp = 'https://inventbackend.herokuapp.com';

    angular
        .module('Invent')
        .service('authentication', authentication);

    authentication.$inject = ['$http', '$window'];

    function authentication ($http, $window) {

        var saveToken = function (token) {
            $window.localStorage['mean-token'] = token;
        };

        var getToken = function () {
            return $window.localStorage['mean-token'];
        };

        logout = function() {
            $window.localStorage.removeItem('mean-token');
            sessionStorage.clear();

        };

        register = function(user) {
            return $http.post(myIp + '/register', user);
        };

        login = function(user) {
            return $http.post(myIp + '/login', user);
        };

        var isLoggedIn = function() {
            var token = getToken();
            var payload;

            if(token && (token !== 'undefined')){

                payload = token.split('.')[1];
                payload = $window.atob(payload);
                payload = JSON.parse(payload);
                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };

        var currentUser = function() {
            if(isLoggedIn()){
                var token = getToken();
                var payload = token.split('.')[1];
                payload = $window.atob(payload);
                payload = JSON.parse(payload);
                return {
                    email : payload.email,
                    name : payload.name,

                    room : payload.room,
                    userKind : payload.userKind,
                    id : payload._id

                };
            }
        };

        return {
            saveToken : saveToken,
            getToken : getToken,
            logout : logout,
            login : login,
            register : register,
            isLoggedIn : isLoggedIn,
            currentUser : currentUser
        };
    }



})();
