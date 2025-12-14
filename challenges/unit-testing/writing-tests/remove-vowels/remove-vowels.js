function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    //there is a mistake here where u don't check the uppercase vowels
    let charCheck = character.toLowerCase();
    if (
      charCheck !== "a" &&
      charCheck !== "o" &&
      charCheck !== "i" &&
      charCheck !== "e" &&
      charCheck !== "u"
    ) {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  let result = removeVowels('samuel');

  what is the value of result?
  
*/
