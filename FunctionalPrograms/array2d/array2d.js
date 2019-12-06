/*************************************************************************** 
*  purpose  : a library for reading in 2D arrays of intigers,doubles and booleans from the input 
   and printing them  out to tje standard output.
*  Auther   : priyankadas
*  File     : Array2D.js
*  since    : 16/11/2019
***********************************************************************************/
let take = require('../array2d/array2dBL');
let read = require('readline-sync');
let row = read.question("enter the row");
let col = read.question("enter the column");
take.array2d(row, col);
