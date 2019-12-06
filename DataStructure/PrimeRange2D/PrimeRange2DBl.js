exports.primeRange = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {//looping till the given range
        let temp = 0;
        for (let j = 2; j <= i - 1; j++) { //checking for prime number
            if (i % j == 0) { //if it satisfies condition then it is not prime
                temp = temp + 1;
            }
        }
        if (temp == 0) {
            array.push(i); //add prime elements into array
        }

    }
    return array;
}