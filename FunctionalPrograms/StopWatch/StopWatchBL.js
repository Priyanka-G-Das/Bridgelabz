exports.StopWatch = (start, stop) => {
    const d = new Date();
    const start = d.getMilliseconds();
    console.log(start);
    const d = new Date();
    const stop = d.getMilliseconds();
    console.log(stop);
    const elapsedTime = stop - start;
    console.log(elapsedTime);
    console.log(elapsedTime / 1000);
}