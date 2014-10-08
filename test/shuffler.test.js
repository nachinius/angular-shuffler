'use strict';

describe('Service: Shuffler', function () {

  // load the service's module
  beforeEach(module('Shuffler'));

  // instantiate service
  var Shuffler;
  beforeEach(inject(function (_Shuffler_) {
    Shuffler = _Shuffler_;
  }));

  it('should do something', function () {
    expect(!!Shuffler).toBe(true);
  });

  it('should keep the amount of elements', function() {

    var N = 99;
    var list = [];
    var i = N;
    while(i--) {
      list.unshift(i);
    }

    Shuffler(list);

    expect(list.length).toBe(N);
  });
  
  it('should shuffle an array of zero elements', function() {

    var list = [];
    Shuffler(list);
    expect(list.length).toBe(0);

  });


  it('should shuffle an array of one elements', function() {

    var list = ['element'];
    Shuffler(list);
    expect(list.length).toBe(1);

  });

  it('should always shuffle in the same way with a predigited random number generator', function() {
    Shuffler.randomNumberGenerator = function() {
      return 0.2;
    };

    var N = 10;
    var first = []; 
    var second = [];
    for(var i = 0 ; i<N; i++) {
      first.push(i);
      second.push(i);
    }

    // code to test
    Shuffler(first);
    Shuffler(second);

    // verify
    for(var i = 0 ; i<N; i++) {
      expect(first[i]).toBe(second[i]);
    }

  });


});
