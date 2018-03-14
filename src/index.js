
module.exports = function longestConsecutiveLength(array) {
  // your solution here
    // your solution here
array.sort( (x, y) => x - y);
let count = 1, result = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] == array[i + 1]) continue;
  if (array[i] == array[i + 1] - 1) {
    count++;} else {
       count = 1;}
       if (count > result) { result = count;}
}
return result;
}
