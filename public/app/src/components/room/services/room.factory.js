angular.module('Invent').factory('RoomFactory', function ($window, $http, $state) {

    var myIp = 'https://inventbackend.herokuapp.com';

    return {

        /**
         * Get rooms
         * @returns {array} rooms
         */

        getRooms: function () {
            var req = {
                method: 'GET',
                url: myIp + '/rooms',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de rooms!", response);
            });
        },

        getRoom: function (id) {
            var req = {
                method: 'GET',
                url: myIp + '/room/' + id,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de room!", response);
            });
        },

        editRoom: function (room) {
            console.log(room._id);

            var req = {
                method: 'PUT',
                url: myIp + '/room/' + room._id,
                data: room,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        },



        addRoom: function (room) {
            console.log(room);

            var req = {
                method: 'POST',
                url: myIp + '/room',
                data: room,
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