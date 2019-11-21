//const input = require('readline-sync');
exports.distance = (n, p) => {
    const distance = Math.sqrt(n * n + p * p);
    console.log(distance);
}