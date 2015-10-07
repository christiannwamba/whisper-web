var app = angular.module('whisper', ['ngAnimate', 'ui.router', 'ngSanitize', 'ngMessages', 'restangular', 'ngCkeditor']);

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
            
//            dp.onChange = function (value, text, $selectedItem) {
//                console.log(value, text, $selectedItem);
//                scope.chosen = value;
//            }
            element.dropdown();
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
'use strict';

(function (angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular', 'ckeditor'], function (angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }
}(angular || null, function (angular) {
    var app = angular.module('ngCkeditor', []);
    var $defer, loaded = false;

    app.run(['$q', '$timeout', function ($q, $timeout) {
        $defer = $q.defer();

        if (angular.isUndefined(CKEDITOR)) {
            throw new Error('CKEDITOR not found');
        }
        CKEDITOR.disableAutoInline = true;
        function checkLoaded() {
            if (CKEDITOR.status === 'loaded') {
                loaded = true;
                $defer.resolve();
            } else {
                checkLoaded();
            }
        }

        CKEDITOR.on('loaded', checkLoaded);
        $timeout(checkLoaded, 100);
    }]);

    app.directive('ckeditor', ['$timeout', '$q', function ($timeout, $q) {

        return {
            restrict: 'AC',
            require: ['ngModel', '^?form'],
            scope: false,
            link: function (scope, element, attrs, ctrls) {
                var ngModel = ctrls[0];
                var form = ctrls[1] || null;
                var EMPTY_HTML = '<p></p>',
                    isTextarea = element[0].tagName.toLowerCase() === 'textarea',
                    data = [],
                    isReady = false;

                if (!isTextarea) {
                    element.attr('contenteditable', true);
                }

                var onLoad = function () {
                    var options = {
                        toolbar: 'full',
                        toolbar_full: [
                            {
                                name: 'basicstyles',
                                items: ['Bold', 'Italic', 'Strike', 'Underline']
                            },
                            {name: 'paragraph', items: ['BulletedList', 'NumberedList', 'Blockquote']},
                            {name: 'editing', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
                            {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
                            {name: 'tools', items: ['SpellChecker', 'Maximize']},
                            '/',
                            {
                                name: 'styles',
                                items: ['Format', 'FontSize', 'TextColor', 'PasteText', 'PasteFromWord', 'RemoveFormat']
                            },
                            {name: 'insert', items: ['Image', 'Table', 'SpecialChar']},
                            {name: 'forms', items: ['Outdent', 'Indent']},
                            {name: 'clipboard', items: ['Undo', 'Redo']},
                            {name: 'document', items: ['PageBreak', 'Source']}
                        ],
                        disableNativeSpellChecker: false,
                        uiColor: '#FAFAFA',
//                        skin: 'office2013',
                        height: '400px',
                        width: '100%'
                    };
                    options = angular.extend(options, scope[attrs.ckeditor]);                    
                    var instance = (isTextarea) ? CKEDITOR.replace(element[0], options) : CKEDITOR.inline(element[0], options),
                        configLoaderDef = $q.defer();

                    element.bind('$destroy', function () {
                        if (instance && CKEDITOR.instances[instance.name]) {
                            CKEDITOR.instances[instance.name].destroy();
                        }
                    });
                    var setModelData = function (setPristine) {
                        var data = instance.getData();
                        if (data === '') {
                            data = null;
                        }
                        $timeout(function () { // for key up event
                            if (setPristine !== true || data !== ngModel.$viewValue) {
                                ngModel.$setViewValue(data);
                            }

                            if (setPristine === true && form) {
                                form.$setPristine();
                            }
                        }, 0);
                    }, onUpdateModelData = function (setPristine) {
                        if (!data.length) {
                            return;
                        }

                        var item = data.pop() || EMPTY_HTML;
                        isReady = false;
                        instance.setData(item, function () {
                            setModelData(setPristine);
                            isReady = true;
                        });
                    };

                    //instance.on('pasteState',   setModelData);
                    instance.on('change', setModelData);
                    instance.on('blur', setModelData);
                    //instance.on('key',          setModelData); // for source view

                    instance.on('instanceReady', function () {
                        scope.$broadcast('ckeditor.ready');
                        scope.$apply(function () {
                            onUpdateModelData(true);
                        });

                        instance.document.on('keyup', setModelData);
                    });
                    instance.on('customConfigLoaded', function () {
                        configLoaderDef.resolve();
                    });

                    ngModel.$render = function () {
                        data.push(ngModel.$viewValue);
                        if (isReady) {
                            onUpdateModelData();
                        }
                    };
                };

                if (CKEDITOR.status === 'loaded') {
                    loaded = true;
                }
                if (loaded) {
                    onLoad();
                } else {
                    $defer.promise.then(onLoad);
                }
            }
        };
    }]);

    return app;
}));
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
angular.module('whisper')
    .factory('editor', function () {
        var ck = {
            extraPlugins: "eqneditor,base64image,codesnippet",
            codeSnippet_theme: 'monokai_sublime',
            allowedContent: true,
            toolbar: [{
                    name: 'basicstyles',
                    items: ['Bold', 'Italic', 'Strike', 'Underline']
                            },
                {
                    name: 'paragraph',
                    items: ['BulletedList', 'NumberedList', 'Blockquote']
                                    },
                {
                    name: 'editing',
                    items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
                                    },
                {
                    name: 'links',
                    items: ['Link', 'Unlink', 'Anchor']
                                    },
                {
                    name: 'tools',
                    items: ['SpellChecker', 'Maximize']
                                    },
                            '/',
                {
                    name: 'styles',
                    items: ['Format', 'FontSize', 'TextColor', 'PasteText', 'PasteFromWord', 'RemoveFormat']
                            },
                {
                    name: 'insert',
                    items: ['Table', 'SpecialChar', 'EqnEditor', 'base64image', 'FontAwesome', 'CodeSnippet']
                                    },

                {
                    name: 'forms',
                    items: ['Outdent', 'Indent']
                                    },
                {
                    name: 'clipboard',
                    items: ['Undo', 'Redo']
                                    },
                {
                    name: 'document',
                    items: ['PageBreak', 'Source']
                                    },
                {
                    //                                        name: 'plugins',
                    //                                        items: ['EqnEditor', 'base64image']
                                    }]
        };
        return ck;
    });