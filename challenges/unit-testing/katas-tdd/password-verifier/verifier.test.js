const { verify } = require("./verifier");

test("returns Password rejected for password with less than 8 characters", function () {
  expect(verify("Ab1!e")).toBe("Password rejected");
});
test("returns Password accepted for password with 8 or more characters", function () {
  expect(verify("Ab1!efgh")).toBe("Password accepted");
});
test("returns Password rejected for empty password", function () {
  expect(verify("")).toBe("Password rejected");
});

test("returns Password rejected for password without uppercase letters", function () {
  expect(verify("ab1!efgh")).toBe("Password rejected");
});

test("returns Password accepted for password with at least one uppercase letter", function () {
  expect(verify("Ab1!efgh")).toBe("Password accepted");
});

test("returns Password rejected for password without numbers", function () {
  expect(verify("Abc!efgh")).toBe("Password rejected");
});

test("returns Password accepted for password with at least one number", function () {
  expect(verify("Ab1!efgh")).toBe("Password accepted");
});
