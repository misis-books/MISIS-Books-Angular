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

        function show(params, options) {
            console.log(params);
            if (shownBoxes >= 1) {
                console.log('Skip error box, too many open', shownBoxes, params, options);
                return false;
            }
            shownBoxes++;
            var modal = $mdDialog.show({
                controller: 'ErrorCtrl',
                templateUrl: templateUrl('errors', params.error_type),
                locals: {
                    error_code: params.error_code
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

    .service('UserManager', ['MisisBooksRpc', 'Storage', '$q', function(MisisBooksRpc, Storage, $q) {
        var user = {};

        function isAuth() {
            var deferred = $q.defer();
            Storage.get('mb_access_token').then(function() {
                var args = Array.prototype.slice.call(arguments);
                !!args[0] ? deferred.resolve() : deferred.reject();
            }, function() {
                deferred.reject();
            });
            return deferred.promise;
        }

        return {
            isAuth: isAuth
        };
    }])

    .service('StorageObserver', ['Storage', function(Storage) {
        var Observer = function Observer(storageKey, callback, params) {
            params = params || {};
            var prevVal,
                looper,
                destroyFlag = params.destroy || false,
                lazyTimeout = params.timeout || 50,
                deleteAfter = params.deleteAfter || false;
            Storage.get(storageKey).then(function(value) {
                prevVal = value;
            });
            looper = setInterval(function() {
                Storage.get(storageKey).then(function(value) {
                    if (prevVal != value) {
                        callback(value, prevVal);
                        if (destroyFlag || deleteAfter) {
                            clearInterval(looper);
                            if (deleteAfter) {
                                Storage.remove(storageKey);
                            }
                        }
                        prevVal = value;
                    }
                });
            }, lazyTimeout);

            function stop(lastInvoke) {
                clearInterval(looper);
                if (lastInvoke) {
                    callback(prevVal);
                }
            }

            return {
                stopWatching: stop
            }
        };

        function startObserver() {
            var args = Array.prototype.slice.call(arguments);
            return Observer.apply(this, args);
        }

        return {
            watch: startObserver
        }
    }])

    .service('MisisBooksApi', ['MisisBooksRpc', '$q', 'ErrorService', '$mdDialog', function(MisisBooksRpc, $q, ErrorService, $mdDialog) {
        function prepareUri(method) {
            return '/api/' + method;
        }

        var modalError;

        function search(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('materials.search');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    /*ErrorService.show({
                        error: response.error,
                        error_code: response.error.error_code,
                        error_type: 'api'
                    });*/
                    //todo(iprit): WTF going here? TypeError: angular-material: .hasAttribute with undefined object
                    //Need use "bindToController: true" for bind $mdDialog into Ctrl.
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function getPopular(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('materials.getPopular');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function getPopularForWeek(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('materials.getPopularForWeek');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function getDocument(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('materials.getDocument');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function getCategories(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('materials.getCategories');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function getFaves(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('fave.getDocuments');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function addFave(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('fave.addDocument');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function deleteFave(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('fave.deleteDocument');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function deleteAllFaves(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('fave.deleteAllDocuments');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        function getAccountInfo(params) {
            var deferred = $q.defer(),
                requestUrl = prepareUri('account.getInfo');
            MisisBooksRpc.post(requestUrl, params).then(function(response) {
                if (response.error && angular.isObject(response.error)) {
                    if (!modalError) {
                        modalError = $mdDialog.show(
                            $mdDialog.alert()
                                .title('Слишком много запросов')
                                .content('Повторите попытку через некоторое время')
                                .ariaLabel('Alert Dialog')
                                .ok('Закрыть')
                            ).then(function() {
                                modalError = null;
                            }, function() {
                                modalError = null;
                            });
                    }
                    deferred.reject();
                }
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
            });
            return deferred.promise;
        }

        return {
            materials: {
                search: search,
                getPopular: getPopular,
                getPopularForWeek: getPopularForWeek,
                getDocument: getDocument,
                getCategories: getCategories
            },
            fave: {
                addDocument: addFave,
                getDocuments: getFaves,
                deleteDocument: deleteFave,
                deleteAllDocuments: deleteAllFaves
            },
            account: {
                getInfo: getAccountInfo
            }
        }
    }])
;