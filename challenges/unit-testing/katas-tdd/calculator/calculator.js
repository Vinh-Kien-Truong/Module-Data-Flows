function add(number) {
  if (number === "") {
    return 0;
  }
  const num = number
    .split(",")
    .filter((n) => n < 1000)
    .map(Number);
  return num.reduce((oldNum, currNum) => oldNum + currNum, 0);
}

module.exports = { add };
