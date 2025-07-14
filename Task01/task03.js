function sortNumber(a, b, c) {
  c = a * c; // 3
  a = a / c; // 1
  console.log("a = " + a);
  console.log("b = " + b);
  console.log("c = " + c);
  console.log("sap xep tang dan:" + a + " " + b + " " + c);
}
sortNumber(3, 2, 1); // 1 2 3
