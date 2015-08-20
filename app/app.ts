/// <reference path="home/home.controller.ts" />
/// <reference path="admin/admin.controller.ts" />
/// <reference path="admin/addPost.controller.ts" />
/// <reference path="admin/editPost.controller.ts" />
/// <reference path="directives/syntax_highlighter.ts" />
/// <reference path="directives/google_analytics.ts" />

module dmIO {
  'use strict';

  angular.module('app', [
    'ngRoute', 'firebase'
  ]).controller('homeCtrl', HomeCtrl)
    .controller('adminCtrl', AdminCtrl)
    .controller('addPostCtrl', AddPostCtrl)
    .controller('editPostCtrl', EditPostCtrl)
    .directive('syntaxHighlighter', syntaxHighlighter)
    .directive('googleAnalytics', googleAnalytics);
}
