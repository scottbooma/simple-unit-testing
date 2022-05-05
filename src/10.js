var removeVowels = require("./9");

function removeVowelsForWords(words) {
  return words.map(function (word) {
    return removeVowels(word);
  });
}

module.exports = removeVowelsForWords;
