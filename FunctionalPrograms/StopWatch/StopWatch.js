/**************************************************************
 *  purpose  : write a StopWatch program for measuring the time that elapsed between
 *  the start and end clicks
 *  Author   :  Priyankadas
 *  file     :  StopWatch.js
 *  since    : 16/11/2019
 **************************************************************************/     
const take = require('./StopWatchBL')
const read = require('readline-sync')
const start = read.question("enter the start value");
const stop = read.question("enter the stop value");
take.StopWatch(start, stop);