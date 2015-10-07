var app = angular.module('whisper');
app.directive('selectDropdown', ['$timeout', function ($timeout) {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            ngModel: '=',
            data: '=',
            multiple:'@'
        },
        template: '<div class="ui search selection dropdown"><input type="hidden" name="id"><div class="default text">Select</div><i class="dropdown icon"></i><div class="menu"><div class="item" ng-repeat="item in data" data-value="{{item.id}}"> <div class="ui {{item.color}} empty circular label"></div> {{item.name}}</div></div></div>',
        link: function (scope, elm, attr) {
            // initialize the dropdown after angular is completely done
            // digesting this directive
            $timeout(function () {                
                elm.dropdown({
//                    apiSettings: {
//                        url: 'https://api.github.com/search/repositories?q={query}'
//                    },
//                    onResponse: function (response) {
//                        return response.items;
//                    },
                    onChange: function (newValue) {
                        // this function is executed outside of angular's
                        // digest loop so in order to notify angular about 
                        // changes to the model you need to use $apply
                        scope.$apply(function (scope) {
                            scope.ngModel = newValue;
                        });
                    }
                });
            });
        }
    };
}]);

app.directive('multipleDropdown', ['$timeout', function ($timeout) {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            ngModel: '=',
            data: '=',
            multiple:'@'
        },
        template: '<div class="ui multiple search selection dropdown"><input type="hidden" name="id"><div class="default text">Select</div><i class="dropdown icon"></i><div class="menu"><div class="item" ng-repeat="item in data" data-value="{{item.id}}">{{item.name}}</div></div></div>',
        link: function (scope, elm, attr) {
            // initialize the dropdown after angular is completely done
            // digesting this directive
            $timeout(function () {                
                elm.dropdown({
//                    apiSettings: {
//                        url: 'https://api.github.com/search/repositories?q={query}'
//                    },
//                    onResponse: function (response) {
//                        return response.items;
//                    },
                    onChange: function (newValue) {
                        // this function is executed outside of angular's
                        // digest loop so in order to notify angular about 
                        // changes to the model you need to use $apply
                        scope.$apply(function (scope) {
                            scope.ngModel = newValue;
                        });
                    }
                });
            });
        }
    };
}]);