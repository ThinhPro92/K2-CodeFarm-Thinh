// Input:
function findMinMaxAverage(arr) {
  if (arr.length === 0) return null;

  var max = arr[0];
  var min = arr[0];
  var maxIndex = 0;
  var minIndex = 0;

  var primeSum = 0;
  var primeCount = 0;
}

// Output:
findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
