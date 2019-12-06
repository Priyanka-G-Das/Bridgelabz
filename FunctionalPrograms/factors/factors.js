/***************************************************************************
* purpose  :  Find the Factors
* Author   :  Priyankadas
* File      :  Factors.js
* since     : 16/11/2019
********************************************************************************/
let take = require('./FactorsBL')
let read = require('readline-sync')
let n = read.question("enter the element");
take.Factor(n);