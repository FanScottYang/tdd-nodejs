var assert = require('assert');
var DiscountService = require('../app/discount.service');
var discountService = new DiscountService();

it('should return 0.03 given 1000', () => {
    var result = discountService.getDiscountRate(1000)
    assert.equal(result, 0.03)
});

it('should return 0.07 given 9000', () => {
    var result = discountService.getDiscountRate(1000)
    assert.equal(result, 0.07)
});
