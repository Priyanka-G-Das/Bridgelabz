exports.SumOfThree = (n) => {
    const arr = new Array(0, -1, 2, -3, 1);
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {

                    console.log("true");
                    console.log(arr[i]);
                    console.log(arr[j]);
                    console.log(arr[k]);
                }
            }
        }
    }
}