/// <reference path="../../typings/angularjs/angular" />

module dmIO {
  'use strict';

  export class HomeCtrl{
    title: string = "Find out about me";
    public static $inject = [
      '$scope',
      '$location'
    ]
    constructor(private $scope: ng.IScope,
        private $location: ng.ILocationService){
    }
    enableGA():boolean{
      return !(this.$location.search()['noga'] === "true");
    }
  }
}
