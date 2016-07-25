require.config({
    baseUrl: "",
    paths: {
        'app': '/src/app',
        'angular': '/src/vendor/Angular/angular',
        'underscore': '/src/vendor/underscore/underscore'
    },
    shim:
    {
        angular: { exports: 'angular' },
        underscore: { exports: '_' }
    },
    deps: ['app', 'angular']
});