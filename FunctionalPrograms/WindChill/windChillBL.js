exports.WindChill = (t, v) => {
    const w;
    if (t > 50 || v > 120 || v < 3) {
        console.log("not valid");

    }
    else {
        w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * v ^ 0.16;
        console.log(w);
    }
}