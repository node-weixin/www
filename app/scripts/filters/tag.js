'use strict';

/**
 * @ngdoc filter
 * @name wwwApp.filter:tag
 * @function
 * @description
 * # tag
 * Filter in the wwwApp.
 */
angular.module('wwwApp')
  .filter('tag', function() {
    return function(input) {
      var pair = {
        water: '其它',
        share: '分享',
        question: '问题',
        projects: '项目',
        good: '精华'
      };
      return pair[input];
    };
  });
