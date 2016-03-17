'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MainCtrl', function($scope, projects, express) {
    $scope.projects = projects.data;
    $scope.express = express.data;
    $('.nav > li').removeClass('active');
    $('.nav > li.home').addClass('active');
  });
