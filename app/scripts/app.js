'use strict';

/**
 * @ngdoc overview
 * @name wwwApp
 * @description
 * # wwwApp
 *
 * Main module of the application.
 */
angular
  .module('wwwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/intro', {
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'ForumCtrl',
        controllerAs: 'forum'
      })
      .when('/download/tool', {
        templateUrl: 'views/download.html',
        controller: 'MainCtrl',
        controllerAs: 'forum'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
