function initApplication () {
    var classes = [
        Config.Navigator.osX ? 'osx' : 'non_osx',
        Config.Navigator.retina ? 'is_2x' : 'is_1x'
    ];
    if (Config.Modes.ios_standalone) {
        classes.push('ios_standalone');
    }
    $(document.body).addClass(classes.join(' '));

    ConfigStorage.get('i18n_locale', function (params) {
        var locale = params[0],
            defaultLocale = Config.I18n.locale,
            bootReady = {
                dom: false,
                i18n_ng: false,
                i18n_messages: false,
                i18n_fallback: false
            },
            checkReady = function checkReady () {
                var i, ready = true;
                for (i in bootReady) {
                    if (bootReady.hasOwnProperty(i) && bootReady[i] === false) {
                        ready = false;
                        break;
                    }
                }
                if (ready) {
                    bootReady.boot = false;
                    angular.bootstrap(document, ['MisisBooksApp']);
                }
            };


        if (!locale) {
            locale = (navigator.language || '').toLowerCase();
            locale = Config.I18n.aliases[locale] || locale;
        }
        for (var i = 0; i < Config.I18n.supported.length; i++) {
            if (Config.I18n.supported[i] == locale) {
                Config.I18n.locale = locale;
                break;
            }
        }
        bootReady.i18n_ng = Config.I18n.locale == defaultLocale; // Already included

        $.getJSON('/js/locales/' + Config.I18n.locale + '.json').success(function (json) {
            Config.I18n.messages = json;
            bootReady.i18n_messages = true;
            console.log("Locale language has been loaded");
            if (Config.I18n.locale == defaultLocale) { // No fallback, leave empty object
                bootReady.i18n_fallback = true;
            }
            checkReady();
        });

        if (Config.I18n.locale != defaultLocale) {
            $.getJSON('/js/locales/' + defaultLocale + '.json').success(function (json) {
                Config.I18n.fallback_messages = json;
                bootReady.i18n_fallback = true;
                checkReady();
            });
        }

        $(document).ready(function() {
            bootReady.dom = true;
            if (!bootReady.i18n_ng) { // Как только язык загружен — стартуем.
                $('<script>').appendTo('body')
                    .on('load', function() {
                        bootReady.i18n_ng = true;
                        checkReady();
                    })
            } else {
                checkReady();
            }
        });
    });
}