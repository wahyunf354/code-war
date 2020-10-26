function solution(str) {
  listStr = str.split("");
  listStr2 = [];
  for (let i = listStr.length - 1; i >= 0; i--) {
    listStr2.push(listStr[i]);
  }
  return listStr2.join("");
}

console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
console.log(solution("h"), "h");
