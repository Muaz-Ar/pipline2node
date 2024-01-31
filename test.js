const main = require('./main');
const assert = require('assert');

describe('Main function', function() {
  it('should return Hello world', function() {
    assert.equal(main(), "Hello world");
  });
});