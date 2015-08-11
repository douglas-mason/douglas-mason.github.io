module dmIO {
  'use strict';

  export function syntaxHighlighter(): ng.IDirective {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    } 
  }
}
