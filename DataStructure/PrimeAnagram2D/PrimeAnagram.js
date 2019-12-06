/*********************************************
*@purpose : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
* Store the prime numbers in a 2D Array, the first dimension represents the range 0-100,
* 100-200, and so on. While the second dimension represents the prime numbers in that range.
*@file :primeAnagramInTwoD.js
*@author :Priyankadas
**********************************************/
let util = require('../../Utility/algorithmUtility');
let initial = 0;
let limit = 100;
let primeArray = new Array(10);
let anagramPrimeArray = new Array(10);
let notAnagramPrimeArray = new Array(10);
let anagram = [];
let notAnagram = [];
for (let i = 0; i < 10; i++) {
    // primeArray[i]=util.generatePrimeNumbers(initial,limit);
    anagramPrimeArray[i] = util.anagramPrime(util.generatePrimeNumbers(initial, limit));
    notAnagramPrimeArray[i] = util.notAnagramPrime(util.generatePrimeNumbers(initial, limit));
    anagram = [];
    notAnagram = [];
    initial = initial + 100;
    limit = limit + 100;

}
//print the array
let initial = 0;
let limit = 100;
for (let i = 0; i < 10; i++) {
    console.log("Anagram [" + initial + "," + limit + "] : " + anagramPrimeArray[i]);
    console.log("Not Anagram [" + initial + "," + limit + "] : " + notAnagramPrimeArray[i]);
    initial = initial + 100;
    limit = limit + 100;
}
