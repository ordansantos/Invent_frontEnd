angular.module('Invent').factory('ThingFactory', function ($window, $http, $state) {

    var myIp = 'http://localhost:8081';

    return {

        /**
         * Get rooms
         * @returns {array} rooms
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
