// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//let ar_ = [];

//ar_.push(new Array(1, 2));
//console.log(ar_);

function chunk(array, size) {
  let ar_ = [];
  let arraySize = array.length;
  while (size < arraySize) {
    //ar_.push(new Array(array.slice(0, size)));
    ar_.push(array.slice(0, size));
    array.splice(0, size);
    arraySize = arraySize - size;
  }
  //if (arraySize !== 0) ar_.push(new Array(array.slice(0, arraySize)));
  if (arraySize !== 0) ar_.push(array.slice(0, arraySize));
  return ar_;
}

console.log(chunk([1, 2, 3, 4, 5], 0));

module.exports = chunk;
