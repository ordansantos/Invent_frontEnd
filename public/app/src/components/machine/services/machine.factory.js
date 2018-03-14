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

        listMachinesInRoom: function (room) {

            data = {room : room};
            var req = {
                method: 'POST',
                url: myIp + '/machinesInRoom',
                data: data,
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

        machineReport: function () {
            console.log('report machine service');
            var req = {
                method: 'GET',
                url: myIp + '/machines/attachments',
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

        editMachine: function (machine) {

          var formData = new FormData;
          //getting file
          var file = $('#imageMachine')[0].files[0];
          
          if (file != null) {
            formData.append('image', file);
          }

          for (var key in machine) {
              formData.append(key, machine[key]);
          }

            var req = {
                method: 'PUT',
                url: myIp + '/machine/' + machine._id,
                data: formData,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': undefined
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        },



        addMachine: function (machine) {

          var formData = new FormData;
          //getting file
          var file = $('#imageMachine')[0].files[0];
          formData.append('image', file);

          for (var key in machine) {
              formData.append(key, machine[key]);
          }

            var req = {
                method: 'POST',
                url: myIp + '/machine',
                data: formData,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': undefined
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        }

    }
});
