StateTax = require('./state-tax');

module.exports = class CalculatorService {
    getPriceBeforeTax(qty, unitPrice) {
        return qty * unitPrice;
    }

    getTax(totalPriceBeforeTax, state) {
        var result = totalPriceBeforeTax * StateTax[state]
        return result;
    }

    getPriceAfterTax(tax, getPriceBeforeTax)
    { 
        return tax + getPriceBeforeTax;
    }
}