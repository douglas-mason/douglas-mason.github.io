var dmIO;
(function (dmIO) {
    'use strict';
    var HomeCtrl = (function () {
        function HomeCtrl() {
            this.title = "Douglas Mason";
        }
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
/// <reference path="home/home.controller.ts" />
/// <reference path="directives/syntax_highlighter.ts" />
var dmIO;
(function (dmIO) {
    'use strict';
    angular.module('app', [
        'ngRoute'
    ]).controller('homeCtrl', dmIO.HomeCtrl)
        .directive('syntaxHighlighter', dmIO.syntaxHighlighter);
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
