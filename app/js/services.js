/* Services */

angular.module('MisisBooksApp.services', ['MisisBooksApp.i18n'])

    .provider('Storage', function () {

        this.setPrefix = function (newPrefix) {
            ConfigStorage.prefix(newPrefix);
        };

        this.$get = ['$q', function ($q) {
            var methods = {};
            angular.forEach(['get', 'set', 'remove'], function (methodName) {
                methods[methodName] = function () {
                    var deferred = $q.defer(),
                        args = Array.prototype.slice.call(arguments);

                    args.push(function (result) {
                        deferred.resolve(result);
                    });
                    ConfigStorage[methodName].apply(ConfigStorage, args);

                    return deferred.promise;
                };
            });
            return methods;
        }];
    })

    .service('ErrorService', ['$mdDialog', function ($mdDialog) {
        var shownBoxes = 0;

        function getError(params) {
            var code = params.status,
                type = params.type;
            return {
                code: code,
                type: type
            }
        }

        function show(params, options) {
            if (shownBoxes >= 1) {
                console.log('Skip error box, too many open', shownBoxes, params, options);
                return false;
            }
            shownBoxes++;
            var modal = $mdDialog.show({
                controller: 'ErrorCtrl',
                templateUrl: templateUrl('errors', params.type),
                locals: {
                    error: getError(params)
                }
            });

            modal.finally(function () {
                shownBoxes--;
            });

            return modal;
        }

        return {
            show: show
        }
    }])
;