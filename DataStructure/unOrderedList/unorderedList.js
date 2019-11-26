const fs = require("fs"); //built in library for read file
const linkedList=require('../unOrderedList/unorderedListBL'); //import the linkedlist.js file
const readline = require("readline-sync");
const  data = fs.readFileSync('StringList.txt'); //read the data from StringList.txt file
console.log("String data read from file: \n\n" + data);
stringArray = data.toString().toLocaleLowerCase().split(' '); //convert string data to array
searchWord = readline.question("Enter a word to search : "); //user input to search element
linkedList.unorderedList(stringArray,searchWord);                