// Input:
function findCommonElement(arr1, arr2) {
  let result = [];

  arr1.forEach(function (item) {
    if (arr2.includes(item) && result.indexOf(item) === -1) {
      result.push(item);
    }
  });

  if (result.length === 0) return "false";

  let str = "";
  result.forEach(function (item, index) {
    str += item;
    if (index < result.length - 1) {
      str += " ";
    }
  });

  return str;
}

// Output:
console.log(findCommonElement([1, 2, 3], [2, 3, 4])); // "2 3"
console.log(findCommonElement([1, 2, 3], [4, 5, 6])); // "false"
console.log(findCommonElement([1, 2, 2, 3, 4], [2, 3, 4, 5])); // "2 3 4"
