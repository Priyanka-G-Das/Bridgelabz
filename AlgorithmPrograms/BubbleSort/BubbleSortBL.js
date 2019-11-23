exports.bubbleSort = (n, a) => {

    var temp;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                
            }
        }

    }


    for (let i = 0; i < a.length; i++) {
        console.log(a[i] + " ");
    }

} 