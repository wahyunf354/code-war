var summation = function (num) {
  // let tot = 0;
  // for (let i = 1; i <= num; i++) {
  //   tot += i;
  // }
  // return tot;
  return (num * (num + 1)) / 2;
};

console.log(summation(1), 1);
console.log(summation(8), 36);
console.log(summation(5), 15);
