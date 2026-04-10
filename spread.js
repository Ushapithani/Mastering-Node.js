// The spread operator (...) is used to expand (spread out) elements of an array or object into individual values.
// for merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];

const result = [...arr1, ...arr2];

console.log(result); // [1,2,3,4]