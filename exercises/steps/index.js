// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // default ds ['    ', '    ', '    ', '    ']
  // n = 4
  //
  let ds = Array(n).fill("####");
  for (let i = 0; i < ds.length; i++) {
    let str = ds[i];
    for (let j = i + 1; j < n; j++) {
      console.log(str);
      str = str.replace(str.charAt(j), " ");
      console.log(str);
    }
    ds[i] = str;
    //console.log(ds[i]);
  }
}
steps(4);

module.exports = steps;
