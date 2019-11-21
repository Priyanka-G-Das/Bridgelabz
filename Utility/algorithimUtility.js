/*********************************************************************************** *
 * *************************************Anagram********************************************/
const read = require('readline-sync');
exports.isAnagram = (firstLetter, secondLetter) => {
    //check both char are same length or not
    if (firstLetter.length != secondLetter.length) {
        return false;
    }
    else {
        const firstLetterArray = firstLetter.toLowerCase().split(' ');//converting string to lowercase and string into array
        const secondLetterArray = secondLetter.toLowerCase().split(' ');//converting string to lower case and string into array
        /* compare both array after joining of each latter of array
        *compare function wil return 0 if both string are equal*/
        if (firstLetterArray.sort().join(' ').compare(secondLetterArray.sort().join(' ')) == 0) {
            return true;
        }
        else {
            return false;
        }

    }

}



/*******************************************PrimeNumber**************************************************
*/


exports.generatePrimeNumbers = (initial, limits) => {
    var PrimeNumbers = new PrimeNumbers;
    for (var i = initial; i < limits; i++) {
        if (i < 2)
            continue;
        var flag = true;
        //this loop iterate til i/2
        for (var j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = false;//this is not a prime 

            }

        }
        // if true then number is prime
        if (flag == true) {
            PrimeNumberspush(i);

        }
    }
    return PrimeNumbers;
}


