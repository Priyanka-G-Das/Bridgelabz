let read = require('readline-sync');
exports.array2d = (row, col) => {
    let array = [];
    for (let i = 0; i < row; i++) {
        array.push([]);
        for (let j = 0; j < col; j++) {
            let element = read.question("enter the element");
            array[i][j] = element;

        }
    }
    console.log(array);
}