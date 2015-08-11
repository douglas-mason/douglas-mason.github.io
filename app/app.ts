/// <reference path="home/home.controller.ts" />
/// <reference path="directives/syntax_highlighter.ts" />

module dmIO {
  'use strict';

  angular.module('app', [
    'ngRoute'
  ]).controller('homeCtrl', HomeCtrl)
    .directive('syntaxHighlighter', syntaxHighlighter);
}
