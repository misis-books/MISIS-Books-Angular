'use strict';

angular.module('misisbooks.networker', [])

    .factory('MisisBooksRpc', ['$http', '$q', 'Storage', function($http, $q, Storage) {
        var mbToken;

        function post(url, data) {
            var deferred = $q.defer();
            Storage.get('mb_access_token').then(function(token) {
                mbToken = token;
                data.access_token = mbToken;
                $http.post(url, data).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function(data, status, headers, config) {
                    deferred.reject(data);
                });
            });

            return deferred.promise;
        }

        function get(url, data) {
            var deferred = $q.defer();

            Storage.get('mb_access_token').then(function(token) {
                mbToken = token;
                data.access_token = mbToken;
                var resultUrl = url + '?' + dataEncode(data);
                $http.get(resultUrl).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function(data, status, headers, config) {
                    deferred.reject(data);
                });
            });

            return deferred.promise;
        }

        function dataEncode(data) {
            var resultString = "";
            if (data) {
                for (var el in data) {
                    data.hasOwnProperty(el) && (resultString += "&" + el.toString() + "=" + encodeURIComponent(data[el]));
                }
                if ('&' == resultString.charAt(0)) {
                    return resultString.slice(0, -1);
                }
            }
            return resultString;
        }

        return {
            get: get,
            post: post,
            dataEncode: dataEncode
        }
    }])
;