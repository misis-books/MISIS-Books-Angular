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

    .controller('IndexCtrl', ['$scope', '_', 'UserManager', 'StorageObserver', 'Storage', '$mdDialog', function($scope, _, UserManager, StorageObserver, Storage, $mdDialog) {
        $scope.$emit('titleChange', {
            title: _('index_title_raw')
        });
        $scope.isAuth = false;
        UserManager.isAuth().then(function() {
            $scope.isAuth = true;
        });

        $scope.selectedTabIndex = 0;
        $scope.$watch('selectedTabIndex', function(val) {
            if (val == 1) {
                $scope.$broadcast('fave-update-needed');
            } else if (!$scope.isAuth) {
                $scope.$broadcast('onExitFromApp');
            }
        });

        $scope.startAuth = startAuth;

        function startAuth() {
            var params = {
                redirect_uri: 'http://' + Config.App.domains[Config.App.current_domain] + '/oauth/vk',
                client_id: 4720039,
                scope: '',
                response_type: 'code',
                revoke: true
            };
            var pairParts = [];
            for (var el in params) {
                if (!params.hasOwnProperty(el)) continue;
                pairParts.push(el + '=' + params[el]);
            }
            var codeUrl = 'https://oauth.vk.com/authorize?' + pairParts.join('&');
            window.open(codeUrl, _('window_auth_title_raw'),
                "width=700,height=330,resizable=yes,scrollbars=yes,status=yes");

            StorageObserver.watch('auth_success', function(newVal, prevVal) {
                UserManager.isAuth().then(function() {
                    $scope.isAuth = true;
                    $scope.$broadcast('userAuthed');
                });
            },  {
                timeout: 100,
                destroy: true,
                deleteAfter: true
            });
        }

        $scope.exitFromApp = function() {
            $mdDialog.show(
                $mdDialog.confirm()
                    .title('Выход')
                    .content('Вы действительно хотите выйти из приложения?')
                    .ariaLabel('Alert Dialog')
                    .ok('Да')
                    .cancel('Отменить')
                ).then(function() {
                    Storage.remove('mb_access_token').then(function() {
                        $scope.isAuth = false;
                        $scope.$broadcast('onExitFromApp');
                    });
                });
        };

        $scope.selectedLanguage = Config.I18n.locale;
        $scope.languages = [];
        (function fillLocales(langs, arr) {
            for (var el = 0; el < arr.length; ++el) {
                $scope.languages.push({
                    value: arr[el],
                    name: langs[arr[el]],
                    selected: arr[el] == $scope.selectedLanguage
                });
            }
        })(Config.I18n.languages, Config.I18n.supported);

        $scope.$watch('selectedLanguage', function(locale) {
            Storage.set({
                i18n_locale: locale
            }).then(function() {
                if (Config.I18n.locale !== locale) {
                    window.location.reload();
                }
            });
        });
    }])

    .controller('SearchCtrl', ['$scope', '$rootScope', '_', 'UserManager', 'MisisBooksApi', '$mdBottomSheet', 'Storage', function($scope, $rootScope, _, UserManager, MisisBooksApi, $mdBottomSheet, Storage) {
        $scope.search = {
            q: '',
            category: 1,
            found_editions: [],
            isSearch: false
        };
        $scope.isAuth = false;
        UserManager.isAuth().then(function() {
            $scope.isAuth = true;
        });

        $scope.$watch('search.q', function(val) {
            if (!$scope.isAuth) {
                return;
            }
            if (!val.trim().length) {
                $scope.search.isSearch = false;
                MisisBooksApi.materials.getPopularForWeek({
                    count: 20,
                    offset: 0,
                    category: $scope.search.category,
                    fields: 'all'
                }).then(function(response) {
                    $scope.search.found_editions = response.response.items;
                });
            } else {
                $scope.search.isSearch = true;
                MisisBooksApi.materials.search({
                    q: val.trim(),
                    count: 20,
                    offset: 0,
                    category: $scope.search.category,
                    fields: 'all'
                }).then(function(response) {
                    $scope.search.found_editions = response.response.items;
                });
            }
        });

        $scope.$on('onExitFromApp', function() {
            $scope.isAuth = false;
        });

        $scope.$on('userAuthed', function() {
            $scope.search.isSearch = false;
            $scope.isAuth = true;
            MisisBooksApi.materials.getPopularForWeek({
                count: 20,
                offset: 0,
                category: $scope.search.category,
                fields: 'all'
            }).then(function(response) {
                $scope.search.found_editions = response.response.items;
            });
        });

        $scope.editionClick = function(event, edition_id, index) {
            var edition = $scope.search.found_editions[index];
            Storage.get('mb_access_token').then(function(mbToken) {
                if (!mbToken) {
                    return;
                }
                $mdBottomSheet.show({
                    templateUrl: templateUrl('index', 'bottom-sheet-edition'),
                    controller: ['$scope', 'edition', 'mbToken', function($scope, edition, mbToken) {
                        $scope.edition = edition;
                        $scope.mbToken = mbToken;
                        $scope.toggleFavorite = function(event) {
                            var edition_id = $scope.edition.id,
                                isFave = $scope.edition.fave;
                            if (isFave) {
                                MisisBooksApi.fave.deleteDocument({
                                    edition_id: edition_id
                                }).then(function(response) {
                                    if (response.response && response.response.result) {
                                        edition.fave = false;
                                    }
                                });
                            } else {
                                MisisBooksApi.fave.addDocument({
                                    edition_id: edition_id
                                }).then(function(response) {
                                    if (response.response && response.response.result) {
                                        edition.fave = true;
                                    }
                                });
                            }
                            $mdBottomSheet.hide();
                        };
                    }],
                    parent: '#content',
                    targetEvent: event,
                    locals: {
                        edition: edition,
                        mbToken: mbToken
                    }
                });
            });
        };

        $rootScope.$on('fave_toggled', function(e, params) {
            var editions = $scope.search.found_editions, el;
            for (el = 0; el < editions.length; ++el) {
                if (editions[el].id === params.edition_id) {
                    editions[el].fave = params.fave;
                }
            }
        });
    }])

    .controller('FaveCtrl', ['$scope', '$rootScope', '_', 'UserManager', 'MisisBooksApi', '$mdBottomSheet', 'Storage', function($scope, $rootScope, _, UserManager, MisisBooksApi, $mdBottomSheet, Storage) {

        $scope.faves = [];

        $scope.$on('fave-update-needed', function() {
            MisisBooksApi.fave.getDocuments({
                count: 20,
                offset: 0,
                category: 1,
                fields: 'all'
            }).then(function(response) {
                $scope.faves = response.response.items;
            });
        });

        $scope.editionClick = function(event, edition_id, index) {
            var faves = $scope.faves,
                edition = faves[index];

            Storage.get('mb_access_token').then(function(mbToken) {
                if (!mbToken) {
                    return;
                }
                $mdBottomSheet.show({
                    templateUrl: templateUrl('index', 'bottom-sheet-edition'),
                    controller: ['$scope', 'edition', 'mbToken', function($scope, edition, mbToken) {
                        $scope.edition = edition;
                        $scope.mbToken = mbToken;
                        $scope.toggleFavorite = function(event) {
                            var edition_id = $scope.edition.id,
                                isFave = $scope.edition.fave;
                            if (isFave) {
                                MisisBooksApi.fave.deleteDocument({
                                    edition_id: edition_id
                                }).then(function(response) {
                                    if (response.response && response.response.result) {
                                        edition.fave = false;
                                        $rootScope.$broadcast('fave_toggled', {
                                            edition_id: edition_id,
                                            fave: edition.fave
                                        });
                                        faves.splice(index, 1);
                                    }
                                });
                            } else {
                                MisisBooksApi.fave.addDocument({
                                    edition_id: edition_id
                                }).then(function(response) {
                                    if (response.response && response.response.result) {
                                        edition.fave = true;
                                        $rootScope.$broadcast('fave_toggled', {
                                            edition_id: edition_id,
                                            fave: edition.fave
                                        });
                                    }
                                });
                            }
                            $mdBottomSheet.hide();
                        };
                    }],
                    parent: '#content',
                    targetEvent: event,
                    locals: {
                        edition: edition,
                        mbToken: mbToken
                    }
                });
            });
        };
    }])

    .controller('ErrorCtrl', ['$scope', 'error_code', '$mdDialog', function($scope, error_code, $mdDialog) {
        $scope.error_code = error_code;
        $scope.close = function() {
            $mdDialog.hide();
        };
    }])
;