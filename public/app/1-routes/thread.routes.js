var app = angular.module('whisper');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('thread', {
            url: '/thread',
            views: {
                '': {
                    templateUrl: '/templates/routes/thread.view.html',
                    data: {
                        pageTitle: 'Thread'
                    },
                    controller: ['$scope', 'editor', function ($scope, editor) {
                        $scope.threadEditor = editor;
                        $scope.title = 'The topic of a given thread goes here. It could be anythin. Math, Physics, etc. This is just dummy';
                    }]
                }
            }
        });

    }]);