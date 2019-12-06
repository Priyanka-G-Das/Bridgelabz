/*****************************************************************
 *  purpose  : write a StopWatch program for measuring the time that elapsed between
 *  the start and end clicks
 *  Author   :  Priyankadas
 *  file     :  StopWatch.js
 *  since    : 16/11/2019
 *****************************************************************************/     
let take = require('./StopWatchBL')
let read = require('readline-sync')
let start = read.question("enter the start value");
let stop = read.question("enter the stop value");
take.StopWatch(start, stop);