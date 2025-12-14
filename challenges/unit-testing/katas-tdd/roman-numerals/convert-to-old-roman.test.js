let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toBe("I");
});

test("returns II if passed 9 as an argument", function () {
  expect(convertToOldRoman(9)).toBe("VIIII");
});

test("returns MMM if passed 3000 as an argument", function () {
  expect(convertToOldRoman(3000)).toBe("MMM");
});
