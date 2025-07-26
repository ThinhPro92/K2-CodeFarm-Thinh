// Input:
const arrayNumber = [1, 2, 3];
function checkSymmetricalArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Du lieu khong hop le";
  }
  if (arr.length === 1) {
    return "Mang co 1 phan tu, khong kiem tra duoc";
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Output:
const result = checkSymmetricalArr(arrayNumber);
console.log(result); //true
