// Input:
const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"];
function countTotalWords(arr) {
  return arr.reduce((a, b) => a + b.split(" ").length, 0);
}

// Output:
console.log(
  countTotalWords(["Hello world", "JS is fun", "Arrays and strings"])
); // 8
