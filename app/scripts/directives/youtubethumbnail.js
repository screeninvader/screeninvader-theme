'use strict';

angular.module('09ScreeninvaderApp')
  .directive('youtubeThumbnail', function ($timeout) {
    return {
      template: '<img className="media-item" ng-src={{youtubeUrl}} style={{cssStyle}}></img>',
      scope : {
        youtubeThumbnailSrc: '=url'
      },
      restrict: 'E',
      link: function(scope, element, attr) {

        var getYoutubesource = function() {
          var defaultStyle = 32;
          if (attr.size) {
            defaultStyle = attr.size;
          }
          scope.cssStyle = 'width: '+ defaultStyle+'px; height: '+ defaultStyle +'px;';
          var youtubeId = scope.youtubeThumbnailSrc.split('v=')[1];
          scope.youtubeUrl = "http://img.youtube.com/vi/"+ youtubeId +"/default.jpg";
          //console.log(scope.youtubeUrl);
        }

        $timeout(getYoutubesource,0)

      }
    };
  });