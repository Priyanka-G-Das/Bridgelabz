/********************************************************** 
* purpose  : program print the Nth harmonic number : 1/2+1/2+.....+1/N
*  File     : Harmonic.js
*  since    : 16/11/2019
********************************************************************/
// Function to generate harmonic number.    
let input = require('./harmonicBL');
let read = require('readline-sync');
let n = read.question("enter the element");
input.harmonicNum(n);