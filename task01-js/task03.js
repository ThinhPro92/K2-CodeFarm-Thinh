function sortNumber(a, b, c) {
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }
  if (a > c) {
    a = a + c;
    c = a - c;
    a = a - c;
  }
  if (b > c) {
    b = b + c;
    c = b - c;
    b = b - c;
  }
  console.log("a = " + a);
  console.log("b = " + b);
  console.log("c = " + c);
  console.log("sap xep tang dan:" + a + " " + b + " " + c);
}
sortNumber(3, 2, 1); // 1 2 3
