let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToNewRoman(1)).toBe("I");
});
test("returns IV if passed 4 as an argument", function () {
  expect(convertToNewRoman(4)).toBe("IV");
});
test("returns IX if passed 9 as an argument", function () {
  expect(convertToNewRoman(9)).toBe("IX");
});
test("returns XL if passed 40 as an argument", function () {
  expect(convertToNewRoman(40)).toBe("XL");
});
test("returns XC if passed 90 as an argument", function () {
  expect(convertToNewRoman(90)).toBe("XC");
});
test("returns CD if passed 400 as an argument", function () {
  expect(convertToNewRoman(400)).toBe("CD");
});
test("returns CM if passed 900 as an argument", function () {
  expect(convertToNewRoman(900)).toBe("CM");
});
test("returns MMMCMXCIX if passed 3999 as an argument", function () {
  expect(convertToNewRoman(3999)).toBe("MMMCMXCIX");
});
