// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let isAnagram = true;
  stringA = stringA
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  stringB = stringB
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  if (stringA.length !== stringB.length) return !isAnagram;
  else {
    let chars = {};
    for (let charA of stringA) {
      if (!chars[charA]) chars[charA] = 1;
      else chars[charA]++;
    }
    for (let charB of stringB) {
      if (!chars[charB]) chars[charB] = 1;
      else chars[charB]--;
    }
    for (let val of Object.values(chars)) {
      if (val !== 0) {
        isAnagram = false;
        break;
      }
    }
    return isAnagram;
  }
}

function anagrams_(stringA, stringB) {
  let isAnagram = true;
  stringA = stringA
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  stringB = stringB
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  if (stringA.length !== stringB.length) return !isAnagram;
  else {
    if (
      stringA.split("").sort().join("").toString() !==
      stringB.split("").sort().join("").toString()
    )
      isAnagram = false;
  }
  return isAnagram;
}

console.log(anagrams_("RAIL! SAFETY!", "fairy tales"));

module.exports = anagrams;
