// Input:
function insertNumber(arr, num) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  for (var i = 0; i < newArr.length - 1; i++) {
    for (var j = i + 1; j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) {
        var temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }

  if (typeof num !== "number" || isNaN(num)) {
    return newArr;
  }

  var truth = false;
  for (var i = 0; i < newArr.length; i++) {
    if (num < newArr[i]) {
      newArr.splice(i, 0, num);
      truth = true;
      break;
    }
  }

  if (!truth) {
    newArr.push(num);
  }

  return newArr;
}

// Output:
console.log(insertNumber([1, 3, 5, 7, 9], 6)); // Output: [1, 3, 5, 6, 7, 9]
console.log(insertNumber([3, "hello", 1, NaN, 4, null], 2)); // Output: [1, 2, 3, 4]
console.log(insertNumber([], 5)); // Output: [5]
console.log(insertNumber([-1, 10, -5, "abc"], -3)); // Output: [-5, -3, -1, 10]
console.log(insertNumber([5, 2, 8], NaN)); // Output: [2, 5, 8]
