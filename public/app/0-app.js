var app = angular.module('whisper', ['ngAnimate', 'ui.router', 'ngSanitize', 'ngMessages', 'restangular', 'ngCkeditor', '720kb.datepicker']);

app.run(['$rootScope', '$state', '$stateParams', '$timeout', function ($rootScope, $state, $stateParams, $timeout) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.state = $state;
    $rootScope.stateParams = $stateParams;

    $rootScope.$watch('state.current.name', function (newValue, oldValue) {
        if (newValue === 'login') {
            $rootScope.loginState = true;
        } else if (newValue === 'signup') {
            $rootScope.loginState = true;
        } else {
            $rootScope.loginState = false;
        }
    });
}]);