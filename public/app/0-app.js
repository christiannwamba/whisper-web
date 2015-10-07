var app = angular.module('whisper', ['ngAnimate', 'ui.router', 'ngSanitize', 'ngMessages', 'restangular']);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.state = $state;
    $rootScope.stateParams = $stateParams;
        }]);