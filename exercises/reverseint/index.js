// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
/*
function reverseInt(n) {
  let str = n.toString();
  if (Math.sign(n) == -1 && str.endsWith("0")) {
    str = str.substr(1, str.lastIndexOf("0") - 1);
  } else if (str.startsWith("-")) {
    str = str.substr(1, str.length - 1);
  }
  str = str.split("").reverse().join("");
  if (n.toString().startsWith("-")) return parseInt(`-${str}`);
  else return parseInt(`${str}`);
}
*/
function reverseInt(n) {
  let str = n.toString();
  if (Math.sign(n) == -1)
    return parseInt(str.split("").reverse().join("")) * Math.sign(n);
  else return parseInt(str.split("").reverse().join(""));
}
console.log(reverseInt(-9891000));

module.exports = reverseInt;
