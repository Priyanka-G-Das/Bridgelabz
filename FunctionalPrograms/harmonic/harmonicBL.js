exports.harmonicNum = (n) => {
    const harmonic = 1;
    for (let i = 1; i < n; i++) {
        harmonic = harmonic + 1 / i;// add the each harmonic value

    }
    console.log(harmonic);
}