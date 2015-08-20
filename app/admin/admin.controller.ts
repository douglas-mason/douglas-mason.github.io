/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces/IPost" />

module dmIO {
  'use strict';

  export class AdminCtrl {
    posts: any;
    public static $inject = [
      '$scope',
      '$firebaseArray'
    ]
    constructor(private $scope: ng.IScope,
                private $firebaseArray: any){
      var ref = new Firebase('https://sizzling-inferno-6982.firebaseio.com/blog/posts');
      this.posts = $firebaseArray(ref);
    }
    deletePostClick(item):void {
      this.posts.$remove(item); //TODO: Add toast notification
    }
  }
}
