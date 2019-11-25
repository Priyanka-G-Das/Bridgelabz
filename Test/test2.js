const pow1=require('../functional/power2/power2BL')
// var assert=require('assert');

describe('Basic mocha power2 test',function(){
it('should return the power2 of a number',function(){
assert.equal(pow1.power2(1),2)
});

});