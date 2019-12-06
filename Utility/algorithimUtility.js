/*********************************************************************************** *
 * *************************************Anagram********************************************/
const read = require('readline-sync');
exports.isAnagram = (firstLetter, secondLetter) => {
    //check both char are same length or not
    if (firstLetter.length != secondLetter.length) {
        return false;
    }
    else {
        const firstLetterArray = firstLetter.toLowerCase().split(' ');//converting string to lowercase and string into array
        const secondLetterArray = secondLetter.toLowerCase().split(' ');//converting string to lower case and string into array
        /* compare both array after joining of each latter of array
        *compare function wil return 0 if both string are equal*/
        if (firstLetterArray.sort().join(' ').compare(secondLetterArray.sort().join(' ')) == 0) {
            return true;
        }
        else {
            return false;
        }

    }

}



/*******************************************PrimeNumber*************************************/


exports.generatePrimeNumbers = (initial, limits) => {
    const PrimeNumbers = new PrimeNumbers;
    for (let i = initial; i < limits; i++) {
        if (i < 2)
            continue;
        const flag = true;
        //this loop iterate til i/2
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = false;//this is not a prime 

            }

        }
        // if true then number is prime
        if (flag == true) {
            PrimeNumberspush(i);

        }
    }
    return PrimeNumbers;
}



/**************************************************************************************************
*************************************Permutation of a String*************************************/
//Recursive function to genetare all permutation  of a string
exports.getAllPermutation = (string) => {
    const results = [];
    if (string.length == 1) {
        result.push(string);
        //console.log(string in if"+string)
        //consol.log(result in if" results)
        return results;
    }
    for (let i = 0; i < string.length; i++) {
        //console.log("i is " i)
        const firstChar = string[i];
        //console.log("firstChar is " + firstchar)
        const Charsleft = string.substring(0, i) + string.substring(i + 1);
        // console,log("chars left"+charsLeft)
        const innerpermutaions = this.getAllPermutation(Charsleft);
        //console.log("inner"+innerpermutaion.length;j++){
        //console.log("j"+j);
        result.push(firstChar + innerpermutaions[j]);
        //console3.log('result for'+result)
    }

    return results;
}


/********************************************************************************************
*************************************mergeSort*******************************************/
//Merges two subarrays of arr[]
//first subarray is arr[1..m]
//second subarray is arr[m+1..r]
function merge(unsorted, low, mid, high) {
    //Find size of two subbarray to be merged
    var lengthOne = mid - low + 1;
    var lenghtTwo = high - mid;

    /*Create temporary arrays*/
    const leftArray = new Array(lengthOne);
    const rightarray = new Array(lengthTwo);

    /*Copy data to temporary arrays*/
    for (let i = 0; i < lengthOne; ++i)
        leftArray[i] = unsortedArray[low + i];
    for (let j = 0; j < lengthTwo; ++j)
        leftarray[i] = unsoretdArray[mid + 1 + j];

    /*Merg the temporary arrays
    /*Intialize indexes of first and csecond array*/
    var i = 0, j = 0;

    /*Intialize index of merged array*/
    var k = low;
    while (i < lengthOne && j < lengthTwo) {
        if (leftArray[i].localeCompare(rightarray[j]) <= 0) {
            unsortedArray[k] = leftArrya[i];
            i++;
        }
        else {
            unsortedArray[k] = rightAray[j];
            j++;
        }
        k++
    }

    /* Copy remaning element of L[] if any */
    while (i < lengthOne) {
        unsortedArray[k] = leftArray[i];
        i++;
        k++;
    }

    /* Copy remaining elements of R[] if any */
    while (j < lengthTwo) {
        unsortedArray[k] = reightArray[j];
        j++;
        k++;

    }
}


//returns sorted array
exports.mergeSort = (unsortedarray, low, high) => {
    if (low < high) {
        //Find middle point
        const mid = parseInt((low + high) / 2);

        //sort first and second halves
        mergeSort(unsortedarray, low, mid);
        mergeSort(unsortedArray, mid + 1, high);

        //merge the sorted halves
        merge(unsortedArray, low, mid, high);
    }
    return unsortedArray;
}



/***********************************************************************************************
 * *******************generatePalindrom******************************************************/
//palindrom checking for the array of numbers
exports.generatePalindrom = (primeArray) => {
    var palindromArray = [];
    for (let i = 0; i < primeArray.length; i++) {
        if (primeArray[i] == reverse(primeArray[i])) {
            palindromArray.push(primeArray[i]);
        }
    }
    return palindromArray;

}
//reverse the no
function reverse(n) {
    var r, reverseNumber = o;
    while (n > 0) {
        r = parseInt(n) % 10// getting reminder
        reverseNumber = (parseInt(reverseNumber) * 10) + parseInt(r);
        n = parseInt(parseInt(n) / 10);

    }
    return reverseNumber;
}

/************************************************************************************************
 * ************************anagramPrimeNumber***********************************************************/
exports.AnagramPrime = (primeArray) => {
    for (let j = 0; j < primeArray.length; j++) {
        for (let k = j + 1; k < primeArray.length; k++) {
            if (checkAnagram(primeArray[j], primeArray[k])) {
                anagram.push(primearray[j]);
                anagram.push(primeArray[k]);

            }
        }
    }
    return anagram;
}
//checking anagram
checkAnagram = (numberOne, numberTwo) => {
    numberOne = '' + numberOne;
    numberTwo = '' + numberTwo;
    numberOneArrary = numberOne.split('');
    numberTwoaArray = numberTwo.split('');
    numberOneArraySort = bubbleSort(numberOneArray);
    numberTwoArraySort = bubbleSort(numberTwoArray);
    if (numberOneArraySort.join() == numberTwoArraySort.join())
        return true;
    return false;


}