'use strict';

/**
 * @ngdoc filter
 * @name wwwApp.filter:ios
 * @function
 * @description
 * # ios
 * Filter in the wwwApp.
 */
angular.module('wwwApp')
  .filter('ios', function () {
    return function (input, type) {
      var time = new Date(input);
      moment.locale('zh-CN');
      switch (type) {
        case 'arrival':
          var today = new Date();
          var ymdIn = moment(time).format('YYYY-MM-DD');
          var ymdNow = moment(today).format('YYYY-MM-DD');
          if (ymdIn === ymdNow) {
            return '今天' + moment(time).format(' hh:mm');
          } else {
            return moment(time).format('DD日 hh:mm');
          }
          break;
        case 'status':
          return moment(time).format('MM月DD日 hh:mm');
        case 'week':
          return moment(time).format('YYYY年MM月DD日 dd hh:mm');
        default :
          return moment(time).format('YYYY-MM-DD hh:mm:ss');
      }
    };
  });
