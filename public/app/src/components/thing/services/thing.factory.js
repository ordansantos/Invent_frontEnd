angular.module('Invent').factory('ThingFactory', function ($window, $http, $state) {

    var myIp = 'http://localhost:8081';

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

            console.log(thing);
            var formData = new FormData;
            //getting file
            var file = $('#imageThing')[0].files[0];
            console.log(file);

            if (file != null) {
              formData.append('image', file);
            }

            for (var key in thing) {
              formData.append(key, thing[key]);
            }


            var req = {
                method: 'PUT',
                url: myIp + '/thing/' + thing._id,
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

        addThing: function (thing) {

          var formData = new FormData;
          //getting file
          var file = $('#imageThing')[0].files[0];
          formData.append('image', file);

          for (var key in thing) {
              formData.append(key, thing[key]);
          }

            var req = {
                data: formData,
                method: 'POST',
                url: myIp + '/thing',
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
