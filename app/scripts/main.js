require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        html5MBPhelper: '../bower_components/html5-mobile-boilerplate/js/helper',
        html5MBPplugins: '../bower_components/html5-mobile-boilerplate/js/plugins',
        selectivizr: '../bower_components/selectivizr/selectivizr'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'html5MBPhelper', 'html5MBPplugins', 'selectivizr'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
