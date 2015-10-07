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