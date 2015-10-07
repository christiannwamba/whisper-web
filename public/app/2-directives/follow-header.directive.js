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