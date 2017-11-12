angular.module('Invent').factory('UserFactory', function ($window, $http, $state) {

    var myIp = 'http://localhost:8081';

    return {

        /**
         * Get Things
         * @returns {array} things
         */

        getUsers: function () {
            var req = {
                method: 'GET',
                url: myIp + '/users',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de usuários!", response);
            });
        },

        getUser: function (id) {
            var req = {
                method: 'GET',
                url: myIp + '/user/' + id,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de usuário!", response);
            });
        },

        editUser: function (user) {
            console.log(user);

            var req = {
                method: 'PUT',
                url: myIp + '/user/' + user._id,
                data: user,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        },



        addUser: function (user) {
            console.log(user);

            var req = {
                method: 'POST',
                url: myIp + '/user',
                data: user,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        }

    }
});
