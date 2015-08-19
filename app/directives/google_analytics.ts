module dmIO {
  'use strict';
  export function googleAnalytics(): ng.IDirective {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/google_analytics.html'
    }
  }
}
