/*
Calling `add` with a negative number will throw an error `"negatives not allowed: "` - and the negative that was passed.
*/
function add(number) {
  if (number === "") {
    return 0;
  }
  const num = number
    .split(",")
    .filter((n) => n < 1000)
    .map(Number);
  const negatives = num.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error("negatives not allowed: " + negatives.join(","));
  }
  return num.reduce((oldNum, currNum) => oldNum + currNum, 0);
}

module.exports = { add };
