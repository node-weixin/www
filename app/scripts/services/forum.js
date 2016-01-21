'use strict';

/**
 * @ngdoc service
 * @name wwwApp.forum
 * @description
 * # forum
 * Service in the wwwApp.
 */
angular.module('wwwApp')
  .service('forum', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = 'http://forum.node-weixin.com/api/v1/topics';
    return {
      get: function(cb) {
        $http({
          url: url,
          method: 'GET',
          data: {
            page: 1,
            limit: 20,
            tab: '',
            mdrender: false
          },
          useXDomain: true,
          withCredentials: true,
        }).then(cb);
      }
    };
  });
