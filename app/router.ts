module dmIO {
  'use strict';

  angular.module('app').config(($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.when('/', {
      'controllerAs': 'ctrl',
      'controller': 'homeCtrl',
      'templateUrl': 'app/home/home.html'
    })
  })
}
