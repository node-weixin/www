'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('ProjectsCtrl', function ($scope, projects) {
    $scope.projects = projects.data;
  });
