/*******************************************************************
 *   purpose  :  Program to check  the triplets a[i] + a[j]+ a[k]=0
                and generate it.
 *   Author       : Priyankadas 
 *   File         : SumOfThree.js
 *   since        : 16/11/2019
************************************************************************/
const take = require('./SumOfThreeBL')
const read = require('readline-sync')
const n = read.question("enter the value");
take.SumOfThree(n);  