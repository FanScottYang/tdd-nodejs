Discount = require('./discount');

module.exports = class DiscountService {
    getDiscountRate(price) {
        return 0.03;
    }
}