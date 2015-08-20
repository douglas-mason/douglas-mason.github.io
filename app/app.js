/// <reference path="../../typings/tsd.d.ts" />
var dmIO;
(function (dmIO) {
    'use strict';
    var HomeCtrl = (function () {
        function HomeCtrl($scope, $location, $firebaseObject) {
            this.$scope = $scope;
            this.$location = $location;
            this.$firebaseObject = $firebaseObject;
            this.title = "Find out about me";
            var ref = new Firebase("https://sizzling-inferno-6982.firebaseio.com");
            this.posts = $firebaseObject(ref);
        }
        HomeCtrl.prototype.enableGA = function () {
            return !(this.$location.search()['noga'] === "true");
        };
        HomeCtrl.$inject = [
            '$scope',
            '$location',
            '$firebaseObject'
        ];
        return HomeCtrl;
    })();
    dmIO.HomeCtrl = HomeCtrl;
})(dmIO || (dmIO = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces/IPost" />
var dmIO;
(function (dmIO) {
    'use strict';
    var AdminCtrl = (function () {
        function AdminCtrl($scope, $firebaseArray) {
            this.$scope = $scope;
            this.$firebaseArray = $firebaseArray;
            var ref = new Firebase('https://sizzling-inferno-6982.firebaseio.com/blog/posts');
            this.posts = $firebaseArray(ref);
        }
        AdminCtrl.prototype.deletePostClick = function (item) {
            this.posts.$remove(item); //TODO: Add toast notification
        };
        AdminCtrl.$inject = [
            '$scope',
            '$firebaseArray'
        ];
        return AdminCtrl;
    })();
    dmIO.AdminCtrl = AdminCtrl;
})(dmIO || (dmIO = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces/IPost" />
var dmIO;
(function (dmIO) {
    'use strict';
    var AddPostCtrl = (function () {
        function AddPostCtrl($scope, $firebaseArray, $location) {
            this.$scope = $scope;
            this.$firebaseArray = $firebaseArray;
            this.$location = $location;
            var ref = new Firebase('https://sizzling-inferno-6982.firebaseio.com/blog/posts');
            this.posts = $firebaseArray(ref);
        }
        AddPostCtrl.prototype.addPostClick = function () {
            var _this = this;
            //TODO: move to service
            this.posts.$add(this.newPost).then(function (ref) { _this.$location.url('/admin'); });
        };
        AddPostCtrl.$inject = [
            '$scope',
            '$firebaseArray',
            '$location'
        ];
        return AddPostCtrl;
    })();
    dmIO.AddPostCtrl = AddPostCtrl;
})(dmIO || (dmIO = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces/IPost" />
var dmIO;
(function (dmIO) {
    'use strict';
    var EditPostCtrl = (function () {
        function EditPostCtrl($scope, $firebaseObject, $routeParams) {
            this.$scope = $scope;
            this.$firebaseObject = $firebaseObject;
            this.$routeParams = $routeParams;
            var postId = $routeParams['postId'];
            this.formMode = 'addNew';
            //TODO: move to factory
            var ref = new Firebase("https://sizzling-inferno-6982.firebaseio.com/blog/posts/" + postId);
            this.post = $firebaseObject(ref);
        }
        EditPostCtrl.prototype.editPostClick = function () {
            this.post.$save();
        };
        EditPostCtrl.$inject = [
            '$scope',
            '$firebaseObject',
            '$routeParams'
        ];
        return EditPostCtrl;
    })();
    dmIO.EditPostCtrl = EditPostCtrl;
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
/// <reference path="admin/admin.controller.ts" />
/// <reference path="admin/addPost.controller.ts" />
/// <reference path="admin/editPost.controller.ts" />
/// <reference path="directives/syntax_highlighter.ts" />
/// <reference path="directives/google_analytics.ts" />
var dmIO;
(function (dmIO) {
    'use strict';
    angular.module('app', [
        'ngRoute', 'firebase'
    ]).controller('homeCtrl', dmIO.HomeCtrl)
        .controller('adminCtrl', dmIO.AdminCtrl)
        .controller('addPostCtrl', dmIO.AddPostCtrl)
        .controller('editPostCtrl', dmIO.EditPostCtrl)
        .directive('syntaxHighlighter', dmIO.syntaxHighlighter)
        .directive('googleAnalytics', dmIO.googleAnalytics);
})(dmIO || (dmIO = {}));
/// <reference path="../typings/angularjs/angular" />
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
        $routeProvider.when('/admin', {
            'controllerAs': 'ctrl',
            'controller': 'adminCtrl',
            'templateUrl': 'app/admin/admin.html'
        });
        $routeProvider.when('/blog/post/add', {
            'controllerAs': 'ctrl',
            'controller': 'addPostCtrl',
            'templateUrl': 'app/admin/addPost.html'
        });
        $routeProvider.when('/blog/post/edit/:postId', {
            'controllerAs': 'ctrl',
            'controller': 'editPostCtrl',
            'templateUrl': 'app/admin/editPost.html'
        });
    });
})(dmIO || (dmIO = {}));
