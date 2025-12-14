const { verify } = require("./verifier");

test("returns Password rejected for password with less than 8 characters", function () {
  expect(verify("Ab1!e")).toBe("Password rejected");
});
test("returns Password accepted for password with 8 or more characters", function () {
  expect(verify("Ab1!efgh")).toBe("Password accepted");
});
