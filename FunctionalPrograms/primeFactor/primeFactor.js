/************************************************************************
 *  purpose : compute the prime factorization of N using Brute force
 *   File    : PrimeFactors.js
 *  Author  : Priyankadas
 * since    : 16/11/2019
**********************************************************************/    
let take = require('./PrimeFactorBL')
let read = require('readline-sync')
let n = read.question("enter the element");
take.PrimeFactors(n);