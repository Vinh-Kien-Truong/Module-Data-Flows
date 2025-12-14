function convertToOldRoman(n) {
  let romanNumerals = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

  let result = "";
  for (let value of Object.keys(romanNumerals)
    .map(Number)
    .sort((a, b) => b - a)) {
    while (n >= value) {
      result += romanNumerals[value];
      n -= value;
    }
  }
  return result;
}

module.exports = convertToOldRoman;
