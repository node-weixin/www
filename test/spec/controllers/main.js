'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wwwApp'));

  var MainCtrl, projects, express,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _projects_, _express_) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    projects = _projects_;
    express = _express_;
  }));

  it('should have a scope containing projects service data', function () {
    expect(scope.projects).toBe(projects.data);
    expect(scope.express).toBe(express.data);
  });
});
