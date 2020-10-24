// const positiveSum = (arr) => {
//   // // with forEach
//   // let total = 0;
//   // arr.forEach((e) => {
//   //   if (e > 0) total += e;
//   // });
//   // return total;

//   // // with filter
//   // let total = 0;
//   // arr.filter((e) => e > 0).forEach((e) => (total = +e));
//   // return total;

//   // // with reduce
//   // return arr.filter((a) => a > 0).reduce((tot, a) => tot + a, 0);

//   // // with reduce and ternari
//   // return arr.reduce((total, a) => total + (a > 0 ? a : 0), 0);
// ;

const positiveSum = (arr) =>
  arr.reduce((accumulator, e) => accumulator + (e > 0 ? e : 0), 0);

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
