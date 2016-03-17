'use strict';

describe('Controller: ForumCtrl', function () {

  // load the controller's module
  beforeEach(module('wwwApp'));

  var ForumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForumCtrl = $controller('ForumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should run ForumCtrl', function () {
    expect(0).toBe(0);
  });
});
