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
    return function (input, type, tz) {
      var time = new Date(input);
      tz = tz || 'Asia/Shanghai';
      moment.locale('zh-CN');
      switch (type) {
        case 'arrival':
          var today = new Date();
          var ymdIn = moment(time).tz(tz).format('YYYY-MM-DD');
          var ymdNow = moment(today).tz(tz).format('YYYY-MM-DD');
          if (ymdIn === ymdNow) {
            return '今天' + moment(time).tz(tz).format(' hh:mm');
          } else {
            return moment(time).tz(tz).format('DD日 hh:mm');
          }
          break;
        case 'status':
          return moment(time).tz(tz).format('MM月DD日 hh:mm');
        case 'week':
          return moment(time).tz(tz).format('YYYY年MM月DD日 dd hh:mm');
        default :
          return moment(time).tz(tz).format('YYYY-MM-DD hh:mm:ss');
      }
    };
  });
