'use strict';

/* Controllers */

angular.module('MisisBooksApp.controllers', [
    'MisisBooksApp.i18n'
])
    .controller('PageCtrl', ['$scope', '_', function($scope, _) {
        var defaultTitle = _('index_title_raw');
        $scope.$on('titleChange', function(e, args) {
            $scope.title = args.title !== undefined && args.title.length ? args.title : defaultTitle;
        });
    }])

    .controller('AppCtrl', ['$scope', function($scope) {
        console.log('Works!');
    }])

    .controller('IndexCtrl', ['$scope', '_', 'MisisBooksRpc', function($scope, _, MisisBooksRpc) {
        $scope.$emit('titleChange', {
            title: _('index_title_raw')
        });
        $scope.test = 1;
        MisisBooksRpc.get('http://localhost:3000/', {}).then(function(res) {
            $scope.test++;
        });
    }])
;