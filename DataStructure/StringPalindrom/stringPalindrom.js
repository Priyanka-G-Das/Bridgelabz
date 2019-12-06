/**************************************************************************************
* purpose   : A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.
*  Auther   : priyankadas
*  File     : StringPalindrom.js
*  since    : 25/11/2019
 **********************************************************************************************************/
let read = require("readline-sync")
let take = require('../stringPalindrom/stringPalindromBL')
let word = read.question("Enter a word to check palindrome");
if (word == "") throw "please enter a word"
take.checkPalindrome(word);