exports.FlipCoinPersantage = (n) => {
    var count = 0, head = 0, tail = 0;
    if (n > 0) {
        while (count < n) {
            if (Math.random() < 0.5) {
                head = head + 1;

            }
            else {
                tail = tail + 1;
            }
            count = count + 1;
        }
        console.log("headsFlipPersantage=" + ((head / n) * 100) + "%");
        console.log("tailsFlipPersantage=" + ((tail / n) * 100) + "%");
    }
    else {
        console.log("please enter posative integer");

    }
}

