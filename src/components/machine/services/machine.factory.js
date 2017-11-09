angular.module('Invent').factory('MachineFactory', function ($window, $http, $state) {

    var myIp = 'http://localhost:8081';

    return {

        /**
         * Get machines
         * @returns {array} machines
         */

        getMachines: function () {
            var req = {
                method: 'GET',
                url: myIp + '/machines',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de machines!", response);
            });
        },

        getMachine: function (id) {
            var req = {
                method: 'GET',
                url: myIp + '/machine/' + id,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de machine!", response);
            });
        },

        editMachine: function (machine) {
            console.log(machine._id);

            var req = {
                method: 'PUT',
                url: myIp + '/machine/' + machine._id,
                data: machine,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        },



        addMachine: function (machine) {
            console.log(machine);

            var req = {
                method: 'POST',
                url: myIp + '/machine',
                data: machine,
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
