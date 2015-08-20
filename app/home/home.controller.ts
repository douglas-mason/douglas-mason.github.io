/// <reference path="../../typings/tsd.d.ts" />

module dmIO {
  'use strict';

  export class HomeCtrl{
    title: string = "Find out about me";
    posts: any;
    public static $inject = [
      '$scope',
      '$location',
      '$firebaseObject'
    ]
    constructor(private $scope: ng.IScope,
        private $location: ng.ILocationService,
        private $firebaseObject: any){
      var ref = new Firebase("https://sizzling-inferno-6982.firebaseio.com");
      this.posts = $firebaseObject(ref);
    }
    enableGA():boolean{
      return !(this.$location.search()['noga'] === "true");
    }
  }
}
