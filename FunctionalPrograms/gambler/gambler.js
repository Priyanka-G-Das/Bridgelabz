/*****************************************************************
* purpose : Simulates a gambler who starts  with $stake and place fair $1 bets until
   he/she goes broke(i.e has no money)  or reach $goal. keeps track of the number of times 
   he/she win and the number of the bets he/she makes.
* run the Experiment n times 
* I/p      : $stake ,$goal, and number of times
* file     : Gambler.js
* since    : 16/11/2019
**********************************************************************************/

const take = require('./GamblerBL')
const read = require('readline-sync')
const stake = read.question("enter the stake");
const goals = read.question("enter goals");
const trials = read.question("enter the trials");
take.Gambler(stake, goals, trials);