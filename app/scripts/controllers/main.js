'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MainCtrl', function($scope, projects, express, forum) {
    $scope.projects = projects.data;
    $scope.express = express.data;
    forum.get(function(res) {
      console.log(res.data.data);
      $scope.posts = res.data.data;
    });
  });
