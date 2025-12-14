function add(number) {
  if (number === "") {
    return 0;
  }
  const num = number.split(",").map(Number);
  return num.reduce((oldNum, currNum) => oldNum + currNum, 0);
}

console.log(add(""));
console.log(add("5"));
console.log(add("3,6"));
module.exports = { add };
