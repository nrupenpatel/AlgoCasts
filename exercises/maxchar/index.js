// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
/*
function maxChar(str) {
  let map_ = new Map();
  for (let char of str.split("")) {
    if (map_.has(char)) {
      map_.set(char, map_.get(char) + 1);
    } else {
      map_.set(char, 1);
    }
  }
  console.log(map_);
  let max_value = 0;
  let maChar = "";
  for (let char of str.split("")) {
    if (map_.get(char) > max_value) {
      max_value = map_.get(char);
      maChar = char;
    }
  }
  return maChar;
}
*/

function maxChar(str) {
  const chars = {};
  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  console.log(chars);
  let max_val = 0;
  let max_char = "";
  for (let [key, value] of Object.entries(chars)) {
    if (value > max_val) {
      max_val = value;
      max_char = key;
    }
  }
  return max_char;
}

console.log(maxChar("abcccccccd"));
module.exports = maxChar;
