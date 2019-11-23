/****************************************************************************************************
*  purpose  : Read in a list of words from File. Then prompt the user to enter a word to search the list.
   The program reports if the search word is found in the list.
*  Auther   : priyankadas
*  File     : Array2D.js
*  since    : 16/11/2019
*********************************************************************************************************/
const take = require('./BinarySearchBL')
const read = require('readline-sync')
try {
    const n = read.question("enter the array size");
    const array = new Array(n);// declaring array
    for (let i = 0; i < n; i++) //taking element from array
    {
        array[i] = read.question("enter the element to arry");
    }
    const value = read.question("enter the element to search");
    const result = take.binarySearch(array, value);
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
