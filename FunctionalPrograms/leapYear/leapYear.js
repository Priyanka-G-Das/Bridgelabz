/**********************************************************************
*  purpose  : program to check leap year or not
*  File     : LeapYear.js
*  since    : 16/11/2019
**********************************************************************/
let take = require('./LeapYearBL');
let read = require('readline-sync')
let year = read.question("Enter any year:");
//calling checkLeapYear function to check leap year or not
take.checkLeapYear(year);