/*****************************************************************
*  purpose  : program to check leap year or not
*  File     : LeapYear.js
*  since    : 16/11/2019
************************************************************************/ 
const take = require('./LeapYearBL');
const read = require('readline-sync')
const year = read.question("Enter any year:");
//calling checkLeapYear function to check leap year or not
take.checkLeapYear(year);