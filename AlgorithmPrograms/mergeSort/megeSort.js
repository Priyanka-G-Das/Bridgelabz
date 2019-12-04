/********************************************************************************************
*  purpose : To Merge Sort an array, we divide it into two halves, sort the two halves independently, 
             and then merge the results to sort the full array. 
*  File    : mergeSort.js
*  Auther  : priyankadas
*  since   : 21/112019
 ***************************************************************************************************/
const take = require("..")
const read = require('readline-sync')
try{
const length = read.question("Enter total number of strings");
unsortedArray = new Array(length);//declar a array
for(let i = 0; i<length; i++)//taking the element from the array
{
unsortedArray[i] = readline.question("Enter the array" + i + "value :");
}
console.log("before sorting string array");
console.log(unsortedArray);
const sortedArray = new Array();//declar a array
sortedArray = take.mergeSort(unsortedarray, 0 , unsortedArray.length-1);
console.log("After vsorting string array")
console.log(sortedArray);
}
catch(error)
{
    console.log(error);
}