let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let input = [3, 21, 88, 4, 36];
  let expected = 88;
  let result = getLargestNumber(input);
  expect(result).toBe(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

test("does not modify the original array", function () {
  let input = [3, 21, 88, 4, 36];
  let inputCopy = [...input]; // create a copy of the original array
  getLargestNumber(input);
  expect(input).toEqual(inputCopy);
});
