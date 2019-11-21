/***************************************************************************
*purpose    :Reads in integers prints them in sorted order using Bubble Sort
* Auther   : priyankadas
*File      : Array2D.js
*since     : 16/11/2019
 **************************************************************************/
const take = require("./BubbleSortBL")
const read = require("readline-sync")
const n = read.question("enter the size");
const a = new Array(n);
for (let i = 0; i < n; i++) {
    a[i] = read.question("enter the element to the array");
}
take.bubbleSort(n, a);