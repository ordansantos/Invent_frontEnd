angular.module('Invent').factory('ThingFactory', function ($window, $http, $state) {

    var myIp = 'inventbackend.herokuapp.com';

    return {

        /**
         * Get Things
         * @returns {array} things
         */

        getThings: function () {
            var req = {
                method: 'GET',
                url: myIp + '/things',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de things!", response);
            });
        },

        listThingsInRoom: function (room) {

            data = {room : room};
            var req = {
                method: 'POST',
                url: myIp + '/thingsInRoom',
                data: data,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de things!", response);
            });
        },

        getThing: function (id) {
          console.log("id " + id)
            var req = {
                method: 'GET',
                url: myIp + '/thing/' + id,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de things!", response);
            });
        },

        thingReport: function () {
            console.log('report thing service');
            var req = {
                method: 'GET',
                url: myIp + '/things/attachments',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de things!", response);
            });
        },

        editThing: function (thing) {
            console.log(thing._id);

            var req = {
                method: 'PUT',
                url: myIp + '/thing/' + thing._id,
                data: thing,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        },



        addThing: function (thing) {
            console.log(thing);

            var req = {
                method: 'POST',
                url: myIp + '/thing',
                data: thing,
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
