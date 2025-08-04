// Input:
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function removeDuplicate(arr) {
  return arr.reduce((a, b) => {
    const isNaNValue = typeof b === "number" && isNaN(b);
    const hasNaN = a.some((val) => typeof val === "number" && isNaN(val));
    const trungLap =
      (b === null && a.includes(null)) ||
      (b === undefined && a.includes(undefined)) ||
      (!isNaNValue && a.includes(b)) ||
      (isNaNValue && hasNaN);
    if (!trungLap) {
      a.push(b);
    }
    return a;
  }, []);
}

// Output:
const result = removeDuplicate(fruits);
console.log(result); // ["apple", "banana", "kiwi", "orange"]
