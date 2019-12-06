/*******************************************************************************
* purpose  : program is take two integer command-line arguments x and y and prints 
             the Eucllidean distance from the point(x,y)  to the origin(0,0)
             the formula is to calculate  distance=sqrt(x*y+x*y). use Math.pow function.
* Author   : Priyankadas
* File     : Distance.js
* since    : 16/11/2019
****************************************************************************************/
let input = require('./distanceBL');
let read = require('readline-sync');
let n = read.question("enter the element");
let p = read.question("enter the num");
input.distance(n, p);