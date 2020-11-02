const squareSum = (numbers) =>
  numbers.map((e) => e * e).reduce((acc, curv) => acc + curv, 0);

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
