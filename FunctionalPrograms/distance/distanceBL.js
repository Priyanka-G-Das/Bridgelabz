//const input = require('readline-sync');
exports.distance = (n, p) => {
    let distance = Math.sqrt(n * n + p * p);
    console.log(distance);
}