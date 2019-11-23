/******************************************************************************
* purpose  : Read in a list of words from File. Then prompt the user to enter a word to search the list.
  he program reports if the search word is found in the list.
*  Auther   : priyankadas
*  File     : Array2D.js
*  since    : 16/11/2019 
**********************************************************************************/
const take = require('./InsertionSortBL')
const read = require('readline-sync')
try {
    const n = read.question("enter the size");
    const a = new Array(n);//declaring a array
    for (let i = 1; i < n; i++) //taking the element from the array
    {
        a[i] = read.question("enter the element to the array");
    }
    take.InsertionSort(n, a);
}
catch (error) {
    Console.log(error);
}