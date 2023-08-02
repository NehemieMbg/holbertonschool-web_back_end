const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('Rouned up sum of two numbers', function () {
  describe('#calculateNumber()', function () {
    it('should return the sum of two whole numbers', function () {
      assert.equal(calculateNumber(1, 2), 3);
    });
  });
});
