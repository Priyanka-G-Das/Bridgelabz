/**************************************************************** 
* purpose  :  Flip coin and print percentage of heads and tails
* Auther   :  Priyankadas
* File     :   FlipCoin.js
* since    :   16/11/2019
***************************************************************/
let readline = require('./flipCoinBL');
let read = require('readline-sync');
let n = read.question("enter number of times to flip");
readline.FlipCoinPersantage(n);