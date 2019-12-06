/*************************************************************************** 
*  purpose  : a library for reading in 2D arrays of intigers,doubles and booleans from the input 
   and printing them  out to tje standard output.
*  Auther   : priyankadas
*  File     : Array2D.js
*  since    : 16/11/2019
***********************************************************************************/
const take = require('../array2d/array2dBL');
const read = require('readline-sync');
const row = read.question("enter the row");
const col = read.question("enter the column");
take.array2d(row, col);
