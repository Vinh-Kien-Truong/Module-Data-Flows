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
