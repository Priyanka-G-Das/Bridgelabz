/***********************************************************************************************
* purpose : Simulates a gambler who starts  with $stake and place fair $1 bets until
   he/she goes broke(i.e has no money)  or reach $goal. keeps track of the number of times 
   he/she win and the number of the bets he/she makes.
* run the Experiment n times 
* I/p      : $stake ,$goal, and number of times
* file     : Gambler.js
* since    : 16/11/2019
*******************************************************************************************/

let take = require('./GamblerBL')
let read = require('readline-sync')
let stake = read.question("enter the stake");
let goals = read.question("enter goals");
let trials = read.question("enter the trials");
take.Gambler(stake, goals, trials);