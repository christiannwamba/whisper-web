var app = angular.module('whisper');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('create', {
            url: '/create',
            views: {
                '': {
                    templateUrl: '/templates/routes/create.view.html',
                    data: {
                        pageTitle: 'Start a new Thread'
                    },
                    controller: ['$scope', 'editor', function ($scope, editor) {
                        $scope.threadEditor = editor;
                        $scope.disabled = undefined;
                        $scope.thread = {};
                        $scope.enable = function () {
                            $scope.disabled = false;
                        };

                        $scope.disable = function () {
                            $scope.disabled = true;
                        };

                        $scope.clear = function () {
                            $scope.channel.selected = undefined;
                        };
                        //Channels
                        $scope.channel = {};
                        $scope.channels = [{
                            name: 'Programming',
                            id: '1',
                            color: 'red'
                            }, {
                            name: 'Politics',
                            id: '2',
                            color: 'teal'
                            }, {
                            name: 'Tech',
                            id: '3',
                            color: 'brown'
                            }, {
                            name: 'Medicine',
                            id: '4',
                            color: 'orange'
                            }];
                        //Types
                        $scope.type = {};
                        $scope.types = [{
                            name: 'Discussion',
                            id: '1',
                            color: 'teal'
                            }, {
                            name: 'Question',
                            id: '2',
                            color: 'red'
                            }, {
                            name: 'Announcemnt',
                            id: '3',
                            color: 'black'
                            }];
                        $scope.tags = [];
                        $scope.allTags = [{
                            name: 'ASP.Net',
                            id: '1'
                            }, {
                            name: 'Wizkid',
                            id: '2'
                            }, {
                            name: 'Angular',
                            id: '3'
                            }];
                        }]
                }
            }
        });

    }]);