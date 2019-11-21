/********************************************************** 
* purpose  : program print the Nth harmonic number : 1/2+1/2+.....+1/N
*  File     : Harmonic.js
*  since    : 16/11/2019
********************************************************************/
// Function to generate harmonic number.    
const input = require('./harmonicBL');
const read = require('readline-sync');
const n = read.question("enter the element");
input.harmonicNum(n);