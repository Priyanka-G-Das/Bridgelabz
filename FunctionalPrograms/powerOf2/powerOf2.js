/******************************************************************* 
*  purpose  :  this program takes a command-line argument N and print 
    a table of the power of 2 that are  less than or equal to 2^N
*  File     : powerOf2.js
*  Author    : Priyankadas
*  since    : 16/11/2019
***************************************************************************/ 
let take = require('./powerOf2BL')
let read = require('readline-sync')
let n = read.question('enter the number');
take.powerOf2(n);
