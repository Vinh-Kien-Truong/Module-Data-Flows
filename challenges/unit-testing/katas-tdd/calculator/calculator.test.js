const { add } = require("./calculator");

test("returns 0 if argument is empty", function () {
  expect(add("")).toBe(0);
});
test("returns number if single number is passed", function () {
  expect(add("5")).toBe(5);
});
test("returns sum if two numbers are passed", function () {
  expect(add("3,6")).toBe(9);
});

test("returns sum if multiple numbers are passed", function () {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("returns sum if num over 1000", function () {
  expect(add("2,1001")).toBe(2);
});

test("returns sum if negative numbers are passed", function () {
  expect(() => add("2,-4,3,-5")).toThrow("negatives not allowed: -4,-5");
});
