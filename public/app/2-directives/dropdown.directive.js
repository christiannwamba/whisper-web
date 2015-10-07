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