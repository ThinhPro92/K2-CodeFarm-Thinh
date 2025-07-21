// Input:
function filterEvenNumbers(arr) {
  let Arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      Arr.push(arr[i]);
    }
  }
  return Arr;
}

// Output:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filterEvenNumbers([1, 3, 5, 7])); // Output: []
console.log(filterEvenNumbers([])); // Output: []
console.log(filterEvenNumbers([-2, -1, 0, 1, 2])); // Output: [-2, 0, 2]
