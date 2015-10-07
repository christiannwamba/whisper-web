var app = angular.module('whisper');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': {
                    templateUrl: '/templates/routes/home.view.html'
                }
            }
        });

    }]);