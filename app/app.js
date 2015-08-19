/// <reference path="../../typings/angularjs/angular" />
var dmIO;
(function (dmIO) {
    'use strict';
    var HomeCtrl = (function () {
        function HomeCtrl($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.title = "Find out about me";
        }
        HomeCtrl.prototype.enableGA = function () {
            return !(this.$location.search()['noga'] === "true");
        };
        HomeCtrl.$inject = [
            '$scope',
            '$location'
        ];
        return HomeCtrl;
    })();
    dmIO.HomeCtrl = HomeCtrl;
})(dmIO || (dmIO = {}));
var dmIO;
(function (dmIO) {
    'use strict';
    function syntaxHighlighter() {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.ready(function () {
                    Prism.highlightElement(element[0]);
                });
            }
        };
    }
    dmIO.syntaxHighlighter = syntaxHighlighter;
})(dmIO || (dmIO = {}));
var dmIO;
(function (dmIO) {
    'use strict';
    function googleAnalytics() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/google_analytics.html'
        };
    }
    dmIO.googleAnalytics = googleAnalytics;
})(dmIO || (dmIO = {}));
/// <reference path="home/home.controller.ts" />
/// <reference path="directives/syntax_highlighter.ts" />
/// <reference path="directives/google_analytics.ts" />
var dmIO;
(function (dmIO) {
    'use strict';
    angular.module('app', [
        'ngRoute'
    ]).controller('homeCtrl', dmIO.HomeCtrl)
        .directive('syntaxHighlighter', dmIO.syntaxHighlighter)
        .directive('googleAnalytics', dmIO.googleAnalytics);
})(dmIO || (dmIO = {}));
var dmIO;
(function (dmIO) {
    'use strict';
    angular.module('app').config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider.when('/', {
            'controllerAs': 'ctrl',
            'controller': 'homeCtrl',
            'templateUrl': 'app/home/home.html'
        });
    });
})(dmIO || (dmIO = {}));
