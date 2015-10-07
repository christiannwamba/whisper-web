var app = angular.module('whisper');

app.directive('owlCarousel', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.owlCarousel(scope.$eval(attr['owlCarousel']));
        }
    }
});