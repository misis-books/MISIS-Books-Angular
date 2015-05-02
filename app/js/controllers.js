'use strict';

/* Controllers */

angular.module('MisisBooksApp.controllers', ['MisisBooksApp.i18n'])

    .controller('AppCtrl', ['$scope', function($scope) {
        console.log('Works!');
    }])

    .controller('PageCtrl', ['$scope', '_', function($scope, _) {
        var defaultTitle = _('test_raw');
        $scope.title = defaultTitle;
        $scope.$on('titleChange', function(e, args) {
            $scope.title = args.title !== undefined && args.title.length ? args.title : defaultTitle;
        });
    }])
;