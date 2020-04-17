var assert = require('assert');

describe('String#split', function(){
  it('should have had returned an array ', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});
