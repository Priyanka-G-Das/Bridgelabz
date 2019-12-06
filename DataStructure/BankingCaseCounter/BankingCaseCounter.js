/**************************************************************************** *****************
* purpose  :  Banking Case Counter program
*  File     : BankingCaseCounter.js
*  since    : 25/11/2019
*  Author   : Priyankadas
*********************************************************************************************/
let bank = require('./BankingCaseCounterBL')//import the bankingQueue.js file
let readline = require('readline-sync')
let balance = readline.question("Enter Initial Bank Balance"); //initial balance of bank
let people = readline.question("Enter Number Of People");     //Number of people in queue
bank.bankTransaction(balance, people); //queue operation