'use strict';

angular.module('MisisBooksApp', [
    'ng',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'MisisBooksApp.controllers',
    'MisisBooksApp.services',
    'misisbooks.networker',
    'seo'
])
    .config(['$locationProvider', '$routeProvider', '$compileProvider', '$mdThemingProvider', 'StorageProvider', '$httpProvider', function($locationProvider, $routeProvider, $compileProvider, $mdThemingProvider, StorageProvider, $httpProvider) {
        
        if (Config.Modes.test) {
            StorageProvider.setPrefix('t_');
        }
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                templateUrl: templateUrl('index', 'main'),
                controller: 'IndexCtrl'
            })
            .when('/login', {
                templateUrl: templateUrl('login', 'main'),
                controller: 'LoginCtrl'
            })
            .otherwise({redirectTo: '/'});

        $mdThemingProvider.theme('default')
            .primaryPalette(Config.MaterialTheme.primaryPalette.theme, Config.MaterialTheme.primaryPalette.settings)
            .accentPalette(Config.MaterialTheme.accentPalette.theme, Config.MaterialTheme.accentPalette.settings);

        var $http,
            interceptor = ['$q', '$injector', function ($q, $injector) {
                function success(response) {
                    $http = $http || $injector.get('$http');
                    var $timeout = $injector.get('$timeout');
                    var $rootScope = $injector.get('$rootScope');
                    if ($http.pendingRequests.length < 1) {
                        $timeout(function(){
                            if($http.pendingRequests.length < 1){
                                $rootScope.htmlReady();
                            }
                        }, 700);
                        //an 0.7 seconds safety interval, if there are no requests for 0.7 seconds, it means that the app is through rendering
                    }
                    return response.resolve(response);
                }

                function error(response) {
                    $http = $http || $injector.get('$http');

                    return $q.reject(response);
                }

                return function (promise) {
                    return promise.then(success, error);
                }
            }];

        $httpProvider.interceptors.push(interceptor);
    }]);