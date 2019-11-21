/********************************************************************************
 *  purpose : User input and replace string Templet " Hello<< UserName>>, How are you?"
 *  Author  : Priyankadas
 *  File    : StringReplace.js
 *   since    : 16/11/2019
 *********************************************************************************/
const take = require('./stringReplaceBL')
const read = require('readline-sync')
const name = read.question("enter your name");
take.StringReplace(name);