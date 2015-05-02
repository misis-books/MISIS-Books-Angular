'use strict';

angular.module('MisisBooksApp', [
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'MisisBooksApp.controllers',
    'MisisBooksApp.services'
])
    .config(['$locationProvider', '$routeProvider', '$compileProvider', '$mdThemingProvider', 'StorageProvider', function($locationProvider, $routeProvider, $compileProvider, $mdThemingProvider, StorageProvider) {

        if (Config.Modes.test) {
            StorageProvider.setPrefix('t_');
        }

        $routeProvider.otherwise({redirectTo: '/'});

        $mdThemingProvider.theme('default')
            .primaryPalette(Config.MaterialTheme.primaryPalette.theme, Config.MaterialTheme.primaryPalette.settings)
            .accentPalette(Config.MaterialTheme.accentPalette.theme, Config.MaterialTheme.accentPalette.settings);
    }]);