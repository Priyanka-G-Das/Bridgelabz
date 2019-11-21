exports.QuadEquation = (a, b, c) => {
    const root1 = 0;
    const root2 = 0;
    const delta = Math.abs(b * b - 4 * a * c);
    root1 = (-b + Math.pow(delta, 1 / 2)) / (2 * a);
    root2 = (-b + Math.pow(delta, 1 / 2)) / (2 * a);
    console.log(root1);
    console.log(root2);
}