/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces/IPost" />

module dmIO {
  'use strict';

  export class AddPostCtrl {
    posts: any;
    newPost: IPost;
    public static $inject = [
      '$scope',
      '$firebaseArray',
      '$location'
    ]
    constructor(private $scope: ng.IScope,
                private $firebaseArray: any,
                private $location: ng.ILocationService){
      var ref = new Firebase('https://sizzling-inferno-6982.firebaseio.com/blog/posts');
      this.posts = $firebaseArray(ref);
    }
    addPostClick():void{
      //TODO: move to service
      this.posts.$add(this.newPost).then((ref) => { this.$location.url('/admin'); });
    }
  }
}
