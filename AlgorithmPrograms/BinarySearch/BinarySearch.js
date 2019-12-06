/*************************************************************************************************************
*  purpose  : Read in a list of words from File. Then prompt the user to enter a word to search the list.
   The program reports if the search word is found in the list.
*  Auther   : priyankadas
*  File     : BinarySearch.js
*  since    : 16/11/2019
*******************************************************************************************************************/
let take = require('./BinarySearchBL')
let read = require('readline-sync')
try {
    let n = read.question("enter the array size");
    let array = new Array(n);// declaring array
    for (let i = 0; i < n; i++) //taking element from array
    {
        array[i] = read.question("enter the element to arry");
    }
    let value = read.question("enter the element to search");
    let result = take.binarySearch(array, value);
    if (result == -1) {
        console.log('not found');
    }
    else {
        console.log("found");
    }
}
catch (error) {
    console.log(error);
}
