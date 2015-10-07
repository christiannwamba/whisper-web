var app = angular.module('whisper', ['ngAnimate', 'ui.router', 'ngSanitize', 'ngMessages', 'restangular']);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.state = $state;
    $rootScope.stateParams = $stateParams;
        }]);
var app = angular.module('whisper');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': {
                    templateUrl: '/templates/routes/home.view.html',
                    data: {
                        pageTitle: 'Home'
                    }
                }
            }
        });

    }]);
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
var app = angular.module('whisper');

app.directive('dropdown', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            var dp = {};
            dp.allowCategorySelection = true;
            //dp.action = 'hide';            
            dp.onChange = function (value, text, $selectedItem) {
                console.log(value, text, $selectedItem);
                scope.chosen = value;
            }
            element.dropdown(dp);
        }
    }
});
var app = angular.module('whisper');

app.directive('followHeader', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });
        }
    }
});
var app = angular.module('whisper');

app.directive('owlCarousel', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.owlCarousel(scope.$eval(attr['owlCarousel']));
        }
    }
});
var app = angular.module('whisper');

app.directive('sidebar', function () {
    return {
        restrict: 'A',        
        link: function (scope, element, attr) {
            element.sidebar('attach events', '.toc.item');
        }
    }
});
app.directive('updateTitle', ['$rootScope', '$timeout',
  function ($rootScope, $timeout) {
        return {
            link: function (scope, element) {

                var listener = function (event, toState) {
                    
                    var title = 'Default Title';
                    if (toState.views[""].data && toState.views[""].data.pageTitle)
                        title = toState.views[""].data.pageTitle;

                    $timeout(function () {
                        element.text(title + ' - Whisper');
                    }, 0, false);
                };

                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
  }
]);