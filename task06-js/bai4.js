// Input:
function findMinMaxAverage(arr) {
  if (arr.length === 0) {
    console.log("Mảng rỗng");
    return;
  }

  let max = arr[0];
  let min = arr[0];
  let maxIndex = 0;
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= n - 1; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // Tinh tbc so nguyen to
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
      count++;
    }
  }

  let primeAverage;
  if (count === 0) {
    primeAverage = null;
  } else {
    primeAverage = parseFloat((sum / count).toFixed(2));
  }

  return {
    max,
    maxIndex,
    min,
    minIndex,
    primeAverage,
  };
}

// Output:
findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
