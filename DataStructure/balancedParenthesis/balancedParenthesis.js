const BalPar = require('./balancedParenthesisBL')
let input = require('readline-sync');
let exp = input.question("Enter the expression: ")
let result = BalPar.BalParentheses(exp);
console.log(result);