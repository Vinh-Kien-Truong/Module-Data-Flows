import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const topLine = "_";
const bottomLine = "-";
// =================
// Stripped down cowsayer CLI,
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.

// 2. Make supplies for our speech bubble

// 3. Make a cow that takes a string

const cow = (saying) => {
  // how did you make the cow before?
  saying = saying || "moo";
  let length = saying.length;
  let bubble = ` ${topLine.repeat(
    length + 2
  )} \n< ${saying} >\n ${bottomLine.repeat(
    length + 2
  )} \n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||`;

  return bubble;
};

// 4. Use readline to get a string from the terminal
// (with a prompt so it's clearer what we want)
function getInput(callback) {
  rl.question("Enter your cow message: ", (answer) => {
    callback(answer);
    rl.close();
  });
}

getInput((message) => {
  console.log(cow(message));
});
