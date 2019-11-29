// Require the built in 'assertion' library
let assert = require('assert');
// Create a test  group called Math
describe('Math', function() {
    it('should test if 3*3 = 9', function(){
      // Our actual test : 3*3 shpuld 9
      assert.equal(9, 3*3);
    });
    it('should test if (3-4)*8 = -8', function(){
      // Our actual test: (3-4)*8 should equal -8
      assert.equal(-8, (3-4)*8);
    });
});