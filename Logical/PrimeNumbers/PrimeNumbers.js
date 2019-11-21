var take = require('../../Utility/algorithimUtility');
var initial = 0;
var limit = 1000;
var result = '';
try {
    var PrimeNumbers = generatePrimeNumbers(initial, limit);
    PrimeNumbers.forEach(function (element) {
        result = result + ' ' + element;
    });
    console.log(result);
}
catch (error) {
    console.log(error);
}

