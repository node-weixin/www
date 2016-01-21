'use strict';

describe('Filter: ios', function () {

  // load the filter's module
  beforeEach(module('wwwApp'));

  // initialize a new instance of the filter before each test
  var ios;
  beforeEach(inject(function ($filter) {
    ios = $filter('ios');
  }));


    it('should be able to get arrival time"', function () {
      var text = '2015-10-09T19:07:15.000Z';
      expect(ios(text, 'arrival')).toBe('10日 03:07');
    });

    it('should be able to get today arrival time', function () {
      var text = new Date();
      expect(ios(text, 'arrival')).toBe('今天 ' + moment(text).format('hh:mm'));
    });

    it('should be able to get ios time', function () {
      var text = '2015-10-09T19:07:15.000Z';
      expect(ios(text)).toBe('2015-10-10 03:07:15');
    });

    it('should be able to get status time', function () {
      var text = '2015-10-09T19:07:15.000Z';
      expect(ios(text, 'status')).toBe('10月10日 03:07');
    });

});
