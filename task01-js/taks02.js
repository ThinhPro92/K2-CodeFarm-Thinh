function swapNumber(a, b) {
  b = a * b; //15
  a = b / a; // 5
  b = b / a;
  console.log("hoan doi cho nhau: ");
  console.log("a = " + a);
  console.log("b = " + b);
}
swapNumber(3, 5); // 5 3
