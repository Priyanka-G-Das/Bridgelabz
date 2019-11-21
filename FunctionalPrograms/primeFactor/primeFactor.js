/************************************************************************
 *  purpose : compute the prime factorization of N using Brute force
 *   File    : PrimeFactors.js
 *  Author  : Priyankadas
 * since    : 16/11/2019
**********************************************************************/    
const take = require('./PrimeFactorBL')
const read = require('readline-sync')
const n = read.question("enter the element");
take.PrimeFactors(n);