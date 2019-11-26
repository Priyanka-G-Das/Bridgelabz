/**************************************************************************************
* purpose   : A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.
*  Auther   : priyankadas
*  File     : StringPalindrom.js
*  since    : 25/11/2019
 ***********************************************************************************************/
const take=require('../stringPalindrom/stringPalindromBL')
const readline=require('readline-sync')
const str=readline.question("enter the string");
take.StringPalindrom(str);