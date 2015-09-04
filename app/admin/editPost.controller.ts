/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces/IPost" />

module dmIO {
  'use strict';

  export class EditPostCtrl {
    post: any;
    public static $inject = [
      '$scope',
      '$firebaseObject',
      '$routeParams',
      '$location'
    ]
    constructor(private $scope: ng.IScope,
                private $firebaseObject: any,
                private $routeParams: angular.route.IRouteParamsService,
                private $location: ng.ILocationService){
      var postId = $routeParams['postId'];
      var ref = new Firebase(`https://sizzling-inferno-6982.firebaseio.com/blog/posts/${postId}`);
      this.post = $firebaseObject(ref);
    }
    editPostClick():void{
      this.post.$save().then((ref) => { this.$location.url('/#admin'); });
    }
  }
}
