var app = angular.module('whisper');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('user', {
            url: '/user',
            views: {
                '': {
                    templateUrl: '/templates/routes/user.view.html',
                    data: {
                        pageTitle: 'User\'s name'
                    }
                }
            }
        });

    }]);


app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('user-update', {
            url: '/user/update',
            views: {
                '': {
                    templateUrl: '/templates/routes/user-update.view.html',
                    data: {
                        pageTitle: 'User\'s name'
                    },
                    controller: ['$scope', 'editor', function ($scope, editor) {
                        $scope.genders = [{
                            name: 'Male',
                            id: 'Male'
                            }, {
                            name: 'Female',
                            id: 'Female'
                            }];
                        }]
                }
            }
        });

    }]);