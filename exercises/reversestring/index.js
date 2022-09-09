// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
    Split the string which converts to an character array
    apply the reverse function on the character array
    and once it reverses then apply  the join function and deliemiter is '' and return the 
*/
function reverse_1(str) {
  return str.split("").reverse().join("");
}
/*
    Simple basic exeuction
    Traverse from end of string one character at a time and add to a variable string

*/
function reverse_2(str) {
  let rev_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev_str += str.charAt(i);
  }
  return rev_str;
}

function reverse_3(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse_4(str) {
  return str.split("").reduce((reve, char) => char + reve, "");
}

/*
  
  */
/*
  
  */

// 4 different solutios of reverse a string

module.exports = {
  reverse_1,
  reverse_2,
  reverse_3,
  reverse_4,
};
