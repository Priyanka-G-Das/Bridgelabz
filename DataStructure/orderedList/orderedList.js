/***********************************************************************************
* purpose  : Read .a List of Numbers from a file and arrange it ascending Order in a Linked List.
*  Take user input for a number, if found then pop the number out of the list else insert the number 
* in appropriate position
*  File     : OrderedList.js
*  since    : 25/11/2019
 ******************************************************************************************/
const fs = require("fs"); //built in library for read file
const linkedList = require('../orderedList/orderedListBL'); //import the orderedlinkedlist.js file
const readline = require("readline-sync");
const filedata = fs.readFileSync('./NumberList.txt'); //read the data from StringList.txt file
console.log("Numbers data read from file: \n\n" + filedata);
searchNumber = readline.question("Enter a number to search"); //user input to search element
linkedList.orderedList(filedata, searchNumber);     