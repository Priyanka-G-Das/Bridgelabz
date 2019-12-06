/**************************************************************************************************
 * purpose : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range
 * File    : PrimeNumber.js
 * Author  : priyankadas
 * since   : 21/11/2019
 ************************************************************************************************/
const intial = 0;
const limit = 1000;
const result = ' ';
try {
    const PrimeNumbers = generatePrimeNumbers(initial, limit);
    PrimeNumbers.forEach(function (element) {
        result = result + ' ' + element;
    });
    console.log(result);
}
catch (error) {
    console.log(error);
}


