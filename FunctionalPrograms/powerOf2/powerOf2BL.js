exports.powerOf2 = (n) => {
    let power = 1;
    if (n > 0 && n < 31) {
        for (let i = 0; i < n; i++) {
            power = power * 2;
            console.log("2^i=" + power);

        }
    }
    else {
        console.log("invalid input");
    }
}