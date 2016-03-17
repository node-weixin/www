'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:ForumCtrl
 * @description
 * # ForumCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('ForumCtrl', function ($scope, $rootScope, forum) {
    $('.nav > li').removeClass('active');
    $('.nav > li.forum').addClass('active');
    forum.get(function(res) {
      $scope.posts = res.data.data;
    });
  });
