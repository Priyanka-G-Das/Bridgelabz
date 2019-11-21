/**************************************************************** 
* purpose  :  Flip coin and print percentage of heads and tails
* Auther   :  Priyankadas
* File     :   FlipCoin.js
* since    :   16/11/2019
***************************************************************/
const readline = require('./flipCoinBL');
const read = require('readline-sync');
const n = read.question("enter number of times to flip");
readline.FlipCoinPersantage(n);