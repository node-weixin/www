'use strict';

/**
 * @ngdoc service
 * @name wwwApp.projects
 * @description
 * # projects
 * Service in the wwwApp.
 */
angular.module('wwwApp')
  .service('express', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      data: [{
        name: 'session',
        title: '用于保存与req相关的数据',
        desc: ''
      }, {
        name: 'settings',
        title: '用于保存与appId相关的配置数据与中间数据',
        desc: ''
      }]
    };
  });
