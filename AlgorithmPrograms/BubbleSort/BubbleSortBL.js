exports.bubbleSort = (n, a) => {

    const temp;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            //var flag = 0;
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                //flag = 1;
            }
        }
        //if (flag == 0) {
        // break
        // }

    }


    for (let i = 0; i < a.length; i++) {
        console.log(a[i] + " ");
    }

} 