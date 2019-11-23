/******* ******************************************************************
 * purpose  :  One string is an anagram of another if the second is simply a rearrangement of the first
 * Author   :  Priyankadas
 * File     : Anagram
 * since    : 18/11/2019
**********************************************************************************/
//to make user intract with script code via console
const read = require('readline-sync');
const take = require('../../Utility/algorithimUtility');
// take two input from the string
try {
    const firstLetter = read.question("enter first letter");
    const secondLetter = read.question("enter second value");
    take.isAnagram(firstLetter, secondLetter);
    
    }
    

catch (error) {
    console.log(error);
}



