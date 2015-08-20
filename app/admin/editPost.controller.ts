/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces/IPost" />

module dmIO {
  'use strict';

  export class EditPostCtrl {
    formMode: string; //TODO: make enum
    post: any;
    public static $inject = [
      '$scope',
      '$firebaseObject',
      '$routeParams'
    ]
    constructor(private $scope: ng.IScope,
                private $firebaseObject: any,
                private $routeParams: angular.route.IRouteParamsService){
      var postId = $routeParams['postId'];
      this.formMode = 'addNew';
      //TODO: move to factory
      var ref = new Firebase(`https://sizzling-inferno-6982.firebaseio.com/blog/posts/${postId}`);
      this.post = $firebaseObject(ref);
    }
    editPostClick():void{
      this.post.$save();
    }
  }
}
