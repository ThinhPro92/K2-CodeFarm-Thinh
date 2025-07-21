// Input:
function cleanFalsyValues(arr) {
  let Arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      Arr.push(arr[i]);
    }
  }
  return Arr;
}
console.log(cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3])); // Output: [1, "hello", 2, 3]
