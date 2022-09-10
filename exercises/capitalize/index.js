// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr_ = str.split(" ");
  let str_ = "";
  for (let i = 0; i < arr_.length; i++) {
    str_ = arr_[i];
    str_ = str_.charAt(0).toUpperCase() + str_.substr(1, str_.length - 1);
    arr_[i] = str_;
  }
  return arr_.join(" ").toString();
}

console.log(capitalize("a short sentence"));

module.exports = capitalize;
