// Input:
function filterLongStrings(arr) {
  let Arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      Arr.push(arr[i]);
    }
  }
  return Arr;
}

// Output:
console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"])); // Output: ["javascript", "nodejs"]
console.log(filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"])); // Output: ["hello world", "goodbye!!"]
console.log(filterLongStrings(["hi", "bye", "yes"])); // Output: []
