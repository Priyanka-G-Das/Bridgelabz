/*****************************************************************
 * purpose  :  To return all permutation of a string iterative method
 * Author   :  Priyankadas
 * File     : PermutationString.js
 * since    : 18/11/2019
 * ****************************************************************/
// string permutation of a string
   const read = require("readline-sync");
    const take = require('../../Utility/algorithimUtility');
    try{
    //take one input of string
    const word = read.question("enter one string");
    const result = take.getAllPermutations(word);
    Console.log(result);
   }
  catch (error) {
    console.log(error);
   }


