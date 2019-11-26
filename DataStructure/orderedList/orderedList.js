const fs = require("fs"); //built in library for read file
const linkedList = require('../orderedList/orderedListBL'); //import the orderedlinkedlist.js file
const readline = require("readline-sync");
const data = fs.readFileSync('./NumberList.txt'); //read the data from StringList.txt file
console.log("Numbers data read from file: \n\n" + data);
searchNumber = readline.question("Enter a number to search"); //user input to search element
linkedList.orderedList(data, searchNumber);     