/********************************************************************** 
 *  purpose :  to find the root of the equation  a*x*x+b*x+c
 *  I/P     :  a,b, c value
 *  O/P     :  Root one amd Root two 
 *  Author  :  Priyankadas
 *  File    :  Quadratic.js
 *  since    : 16/11/2019
 * **********************************************************************/
let take = require('./QuadraticBL')
let read = require('readline-sync')
let a = read.question("enter the value of a ");
let b = read.question("enter the value of b");
let c = read.question("enter the value of c");
take.QuadEquation(a, b, c);