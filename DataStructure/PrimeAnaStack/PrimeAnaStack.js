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