/**
 * cara barbar
 */

// const repeatStr = (n, s) => {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     str += s;
//   }
//   return str;
// };

/**
 * cara barbar 2
 */

// const repeatStr = (n, s) => {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//    str = str.concat("", s);
//   }
//   return str;
// };

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
