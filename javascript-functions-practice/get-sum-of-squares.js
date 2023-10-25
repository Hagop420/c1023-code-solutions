/* exported getSumOfSquares */
const getSumOfSquares = (x, y) => {
  return Math.pow(x, 2) + Math.pow(y, 2);
};

console.log(getSumOfSquares(4, 5));
console.log(getSumOfSquares(5, 5));
console.log(getSumOfSquares(3, 8));

const getAreaOfCircle = (radius) => {
  return Math.PI * radius * radius;
};

console.log(getAreaOfCircle(4.982787485166879));
