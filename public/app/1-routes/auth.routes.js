var app = angular.module('whisper');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                '': {
                    templateUrl: '/templates/routes/login.view.html',
                    data: {
                        pageTitle: 'Login'
                    },
                    controller: ['$scope', 'editor', function ($scope, editor) {
                        $scope.threadEditor = editor;
                        $scope.title = 'The topic of a given thread goes here. It could be anythin. Math, Physics, etc. This is just dummy';
                    }]
                }
            }
        });

    }]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('signup', {
            url: '/signup',
            views: {
                '': {
                    templateUrl: '/templates/routes/signup.view.html',
                    data: {
                        pageTitle: 'Sign Up'
                    },
                    controller: ['$scope', 'editor', function ($scope, editor) {
                        $scope.threadEditor = editor;
                        $scope.title = 'The topic of a given thread goes here. It could be anythin. Math, Physics, etc. This is just dummy';
                    }]
                }
            }
        });

    }]);