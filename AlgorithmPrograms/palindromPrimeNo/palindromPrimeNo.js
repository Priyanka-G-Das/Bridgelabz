/*******************************************************************
*  purpose : Extend the above program to find the prime numbers that are Anagram and Palindrome 
*  File    : mergeSort.js
*  Auther  : priyankadas
*  since   : 21/112019
 ****************************************************************/


    var take = require('../../Utility/algorithimUtility')
    var read = require('readline-sync')
    try{
        
    var primeArray = new Array();
    var PalindromeArray = new Array();
    var AnagramPrimrArray = [];
    primeArray = take.generatePrimeNumbers(0, 1000);//return the array of prime numbers
    PalindromeArray = take.generatePalindrom(primeArray);//returns the only palindrom numbers
    AnagramSrray = take.AnagramPrime(primeArray); // return the only anagram numbers
    console.log("palindrom prime number are");
    console.log("palindromArray");
    console.log("Anagram prime number are");
    console.log("AnagramPrimeArray");
    }

    catch (error) {
    console.log(error);
    }