/*****************************************************************************
* purpose  : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using 
* the Linked List and Print the Anagrams in the Reverse Order. Note no Collection Library can be used.
*  Auther   : priyankadas
*  File     : PrimeAnaStack.js
*  since    : 16/11/2019
 ********************************************************************************************/
const anagramPrimeStack = require('../PrimeAnaStack/PrimeAnaStackBL');
const primeAna = require("readline-sync");
function printAnagramPrime() {
    try {
        const stackLink = new anagramPrimeStack.StackedLink;
        const anagramPrime = [[]];
        anagramPrime = primeAna.findAnaPrime(0, 1000);
        for (let i = 0; i < anagramPrime.length; i++) {
            stackLink.push(anagramPrime[i]);
        }
        console.log();
        console.log("------Anagram Stack------");
        stackLink.display();
        top = stackLink.getHead();
        console.log();
        console.log("------Reversed List------");
        stackLink.displayReverse(top);
    }
    catch (error) {
        console.log(error);
    }
}
printAnagramPrime();