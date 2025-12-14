/*
You will be writing tests and implementing some verifications inside a function called 'verify' that takes a password as an argument. If the conditions are met, the 'verify' function should return 'Password accepted', otherwise the 'verify' function should return 'Password rejected'.

- If the password is less than 8 characters, the 'verify' function should return 'Password rejected'.
If the password does not have at least 1 uppercase letter, the 'verify' function should return 'Password rejected'. The requirements from steps 1 & 2 remain the same.

*/
function verify(password) {
  if (password.length < 8 || !password || !/[A-Z]/.test(password)) {
    return "Password rejected";
  }
  return "Password accepted";
}

module.exports = { verify };
