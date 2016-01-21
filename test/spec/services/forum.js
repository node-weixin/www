'use strict';

describe('Service: forum', function () {

  // load the service's module
  beforeEach(module('wwwApp'));

  // instantiate service
  var forum;
  beforeEach(inject(function (_forum_) {
    forum = _forum_;
  }));

  it('should do something', function () {
    expect(!!forum).toBe(true);
  });

});
