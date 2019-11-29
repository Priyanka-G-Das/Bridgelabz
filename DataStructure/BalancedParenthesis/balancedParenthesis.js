/***********************************************************************************
* purpose  : Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order 
* the performance of operations. Ensure parentheses must appear in a balanced fashion.
*  Auther   : priyankadas
*  File     : BalancedParanthesis.js
*  since    : 25/11/2019
 ****************************************************************************************************/
const BalPar = require('./balancedParenthesisBL')
let input = require('readline-sync');
let exp = input.question("Enter the expression: ")
let result = BalPar.BalParentheses(exp);
console.log(result);