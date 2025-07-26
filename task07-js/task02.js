// Input:
function findSecondLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return -1;
  }

  let largest = arr[0];
  arr.forEach((num) => {
    if (num > largest) {
      largest = num;
    }
  });

  let hasSecond = false;
  let secondLarge = -Infinity;

  arr.forEach((num) => {
    if (num < largest && num > secondLarge) {
      secondLarge = num;
      hasSecond = true;
    }
  });

  if (!hasSecond) return -1;
  return secondLarge;
}

// Output:
console.log(findSecondLargestNumber([1, 2, 3, 4, 5, 6])); // 5
console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4;
console.log(findSecondLargestNumber([1, 1, 1])); // -1
console.log(findSecondLargestNumber([1])); // -1
