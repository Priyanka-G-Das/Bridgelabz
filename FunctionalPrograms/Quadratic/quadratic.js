/************************************************************** 
 *  purpose :  to find the root of the equation  a*x*x+b*x+c
 *  I/P     :  a,b, c value
 *  O/P     :  Root one amd Root two 
 *  Author  :  Priyankadas
 *  File    :  Quadratic.js
 *  since    : 16/11/2019
 * ****************************************************************/    
const take = require('./QuadraticBL')
const read = require('readline-sync')
const a = read.question("enter the value of a ");
const b = read.question("enter the value of b");
const c = read.question("enter the value of c");
take.QuadEquation(a, b, c);