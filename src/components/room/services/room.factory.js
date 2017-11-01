angular.module('Invent').factory('RoomFactory', function ($window, $http, $state) {

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
        }
    }
});