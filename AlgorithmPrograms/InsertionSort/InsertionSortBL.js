const read = require('readline-sync');
exports.InsertionSort = (n, a) => {
    const temp;
    for (let i = 1; i < n; i++) {
        temp = a[i];
        j = i;
        while (j > 0 && a[j + 1] > temp) {
            a[j] = a[j - 1];
            j = j - 1;

        }
        a[j] = temp;
    }
    for (let i = 0; i < n; i++) {
        console.log(a[i]);
    }


}