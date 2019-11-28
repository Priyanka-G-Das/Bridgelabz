/******************************************************************************************************
* purpose  : Read the Text from a file, split it into words and arrange it as Linked List. 
* Take a user input to search a Word in the List. If the Word is not found then add it to the 
* list, and if it found then remove the word from the List. In the end save the list into a file
*  Auther   : priyankadas
*  File     : unorderedList.js 
*  since    : 25/11/2019
 */
let fs = require("fs"); //built in library for read file
let linkedList=require('../unOrderedList/unOrderedListBL'); //import the linkedlist.js file
let readline = require("readline-sync");
let  data = fs.readFileSync('stringList.txt'); //read the data from StringList.txt file
console.log("String data read from file: \n\n" + data);
stringArray = data.toString().toLocaleLowerCase().split(' '); //convert string data to array
searchWord = readline.question("Enter a word to search : "); //user input to search element
linkedList.unorderedList(stringArray,searchWord);                