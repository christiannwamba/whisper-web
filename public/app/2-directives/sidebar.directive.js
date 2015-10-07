var app = angular.module('whisper');

app.directive('sidebar', function () {
    return {
        restrict: 'A',        
        link: function (scope, element, attr) {
            element.sidebar('attach events', '.toc.item');
        }
    }
});