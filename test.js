var assert = require('assert');

describe('String#split', function(){
  it('should have had had a returned an array ', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});
