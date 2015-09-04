/// <reference path="../typings/angularjs/angular" />
module dmIO {
  'use strict';

  angular.module('app').config(($routeProvider, $locationProvider) => {
    $routeProvider.when('/', {
      'controllerAs': 'ctrl',
      'controller': 'homeCtrl',
      'templateUrl': 'app/home/home.html'
    });
    $routeProvider.when('/admin', {
      'controllerAs': 'ctrl',
      'controller': 'adminCtrl',
      'templateUrl': 'app/admin/admin.html'
    })
    $routeProvider.when('/blog/post/add', {
      'controllerAs': 'ctrl',
      'controller': 'addPostCtrl',
      'templateUrl': 'app/admin/addPost.html'
    })
    $routeProvider.when('/blog/post/edit/:postId', {
      'controllerAs': 'ctrl',
      'controller': 'editPostCtrl',
      'templateUrl': 'app/admin/editPost.html'
    })
  })
}
