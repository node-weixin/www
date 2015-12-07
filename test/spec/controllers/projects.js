'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('wwwApp'));

  var ProjectsCtrl,
  projects,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _projects_, $rootScope) {
    scope = $rootScope.$new();
    ProjectsCtrl = $controller('ProjectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    projects = _projects_;
  }));

  it('should have a scope containing projects service data', function () {
    expect(scope.projects).toBe(projects.data);
  });
});
