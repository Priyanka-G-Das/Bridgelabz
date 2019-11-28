/******************************************************************************************
 * purpose  : a library for reading in 2D arrays of intigers,doubles and booleans from the input 
   and printing them  out to tje standard output.
*  Auther   : priyankadas
*  File     : PrimeNumberInTwoD.js
*  since    : 27/11/2019
 *****************************************************************************************/
let take = require("../PrimeRange2D/PrimeRange2DBl")
var start = 0;
var end = 100;
var primeArray = new Array(10);
for (let i = 0; i < 10; i++) {
  primeArray[i] = take.primeRange(start, end);
  start = start + 100;
  end = end + 100;
}
start = 0;
end = 100;
//print two dimension array
for (let i = 0; i < 10; i++) {
  console.log("[" + start + "," + end + "] : " + primeArray[i]);
  start = start + 100;
  end = end + 100;
}