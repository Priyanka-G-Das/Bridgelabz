/***************************************************************************
* purpose  :  Find the Factors
* Author   :  Priyankadas
* File      :  Factors.js
* since     : 16/11/2019
********************************************************************************/
const take = require('./FactorsBL')
const read = require('readline-sync')
const n = read.question("enter the element");
take.Factor(n);