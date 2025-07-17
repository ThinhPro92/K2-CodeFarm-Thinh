function swapNumber(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("hoan doi cho nhau: ");
  console.log("a = " + a);
  console.log("b = " + b);
}
swapNumber(3, 5); // 5 3
