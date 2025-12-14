function add(number) {
  if (number === "") {
    return 0;
  }
  const num = number.split(",").map(Number);
  return num.reduce((oldNum, currNum) => oldNum + currNum, 0);
}

module.exports = { add };
