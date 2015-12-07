'use strict';

/**
 * @ngdoc service
 * @name wwwApp.projects
 * @description
 * # projects
 * Service in the wwwApp.
 */
angular.module('wwwApp')
  .service('projects', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      data: [{
        name: 'config',
        title: '用于微信配置信息的校验',
        desc: ''
      }, {
        name: 'auth',
        title: '用于与微信服务器握手检验',
        desc: ''
      }, {
        name: 'oauth',
        title: '用于微信的OAuth相关操作',
        desc: ''
      }, {
        name: 'util',
        title: '一些常用的微信请求，加密，解密，检验的功能与处理',
        desc: ''
      }, {
        name: 'request',
        title: '微信的各类服务的HTTP请求的抽象集合',
        desc: ''
      }, {
        name: 'pay',
        title: '微信支付的服务器接口',
        desc: ''
      }, {
        name: 'jssdk',
        title: '微信JSSDK相关的服务器接口',
        desc: ''
      }, {
        name: 'menu',
        title: '微信菜单相关的操作与命令',
        desc: ''
      }, {
        name: 'user',
        title: '微信用户API',
        desc: ''
      }, {
        name: 'media',
        title: '微信多媒体API',
        desc: ''
      }, {
        name: 'link',
        title: '微信推广(二维码,URL)API',
        desc: ''
      }, {
        name: 'message',
        title: '微信消息API',
        desc: ''
      }]
    };
  });
