var app = angular.module('whisper');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('threads', {
            url: '/threads',
            views: {
                '': {
                    templateUrl: '/templates/routes/threads.view.html',
                    data: {
                        pageTitle: 'Threads'
                    }
                }
            }
        });

    }]);