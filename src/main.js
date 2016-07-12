require.config({
    baseUrl: "js",
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
    },
    shim:
    {
        angular: { exports: 'angular' }
    },
    deps: ['app']
});