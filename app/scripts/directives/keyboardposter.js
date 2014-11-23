'use strict';

angular.module('09ScreeninvaderApp')
  .directive('keyboardPoster',
    function($parse, $timeout){
      var DELAY_TIME_BEFORE_POSTING = 400;
      return function(scope, elem, attrs) {

        var element = angular.element(elem)[0];
        var currentTimeout = null;

        element.oninput = function() {
          var model = $parse(attrs.postFunction);
          var poster = model(scope);

          if(currentTimeout) {
            $timeout.cancel(currentTimeout);
          }
          currentTimeout = $timeout(function(){
            poster(angular.element(element).val());
          }, DELAY_TIME_BEFORE_POSTING);
        };
      };
    }
  );
