/***********************************************************************************************
 * purpose  : o return all permutation of a string iterative method
 * Author   : Priyankadas
 * File     : PermutationString.js
 * since    : 18/11/2019
 * ********************************************************************************************************/
// string permutation of a string
let read = require("readline-sync");
let take = require('../../Utility/algorithimUtility');
try {
  //take one input of string
  let word = read.question("enter one string");
  let result = take.getAllPermutations(word);
  Console.log(result);
}
catch (error) {
  console.log(error);
}


