var assert = require('assert');
var CalculatorService = require('../app/calculator.service');
var calculatorService = new CalculatorService();

it('should return 30 given qty3 price10', () => {
    var result = calculatorService.getPriceBeforeTax(3,10)
    assert.equal(result, 30, 'The price before tax is incorrect!')
});

it('should return 50 given qty5 price10', () => {
    var result = calculatorService.getPriceBeforeTax(5,10)
    assert.equal(result, 50, 'The price before tax is incorrect!')
});

it('should return 2.055 given total price before tax 30 and state UT', () => {
    var result = calculatorService.getTax(30, 'UT')
    assert.equal(result, 2.055)
});

it('should return 240 given total price before tax 3000 and state NV', () => {
    var result = calculatorService.getTax(3000, 'NV')
    assert.equal(result, 240)
});

it('should return 32.055 given tax 2.055 and price before tax 30', () => {
    var result = calculatorService.getPriceAfterTax(2.055, 30)
    assert.equal(result, 32.055)
});