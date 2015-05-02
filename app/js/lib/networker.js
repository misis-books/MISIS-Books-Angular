'use strict';

angular.module('misisbooks.networker', [])

    .factory('MisisBooksRpc', function($http, $q) {
        function post(url, data) {
            var deffered = $q.defer();
            $http.post(url, data)
                .success(function (data, status, headers, config) {
                    deffered.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deffered.reject(data);
                });

            return deffered.promise;
        }

        function get(url, data) {
            var resultUrl = url + '?' + dataEncode(data),
                deffered = $q.defer();

            $http.get(resultUrl)
                .success(function (data, status, headers, config) {
                    deffered.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deffered.reject(data);
                });

            return deffered.promise;
        }

        function dataEncode(data) {
            var resultString = "";
            if (data) {
                for (var el in data) {
                    data.hasOwnProperty(el) && (resultString += "&" + el.toString() + "=" + encodeURIComponent(data[el]));
                }
                if ('&' == resultString.charAt(0)) {
                    return resultString.substring(1, resultString.length);
                }
            }
            return resultString;
        }

        return {
            get: get,
            post: post,
            dataEncode: dataEncode
        }
    })
;