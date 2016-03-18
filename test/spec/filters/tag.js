'use strict';

describe('Filter: tag', function() {

  // load the filter's module
  beforeEach(module('wwwApp'));

  // initialize a new instance of the filter before each test
  var tag;
  beforeEach(inject(function($filter) {
    tag = $filter('tag');
  }));

  it('should return the input prefixed with "tag filter:"', function() {
    var pair = {
      water: '其它',
      share: '分享',
      question: '问题',
      projects: '项目',
      good: '精华'
    };
    for (var k in pair) {
      expect(tag(k)).toBe(pair[k]);
    }
  });

});
