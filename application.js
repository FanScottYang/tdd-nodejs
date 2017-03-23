var CalculatorService = require('./app/calculator.service');

var calculatorService = new CalculatorService();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('qy,price,state: ', (answer) => {
    array = answer.split(',');
    var totalPriceBeforeTax = calculatorService.getPriceBeforeTax(array[0], array[1]);
    var tax = calculatorService.getTax(totalPriceBeforeTax, array[2])
    console.log(calculatorService.getPriceAfterTax(tax, totalPriceBeforeTax));
    rl.close();
});