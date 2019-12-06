/********************************************************************************
 *  purpose : User input and replace string Templet " Hello<< UserName>>, How are you?"
 *  Author  : Priyankadas
 *  File    : StringReplace.js
 *   since    : 16/11/2019
 *********************************************************************************/
let take = require('./stringReplaceBL')
let read = require('readline-sync')
let name = read.question("enter your name");
take.StringReplace(name);