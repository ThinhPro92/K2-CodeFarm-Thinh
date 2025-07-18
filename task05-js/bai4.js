// Input 1:
// printChristmasTree(5, "*");
function printChristmasTree(n, kieu) {
  if (!Number(n) || n <= 0 || n >= 50) {
    console.log("n khong dung kieu du lieu hoac khong hop le");
    return;
  }
  for (let i = 1; i <= n; i++) {
    let vuong = "";
    for (let j = 1; j <= n - i; j++) {
      vuong += " ";
    }
    for (let p = 1; p <= 2 * i - 1; p++) {
      vuong += kieu;
    }
    console.log(vuong);
  }
  let gocCay = "";
  for (let j = 1; j <= n - 1; j++) {
    gocCay += " ";
  }
  gocCay += kieu;
  console.log(gocCay);
}
let n = Number(prompt("Nhap vao chieu cao cay:"));
let kieu = prompt("Nhap 1 chu cai kieu duLieu:");
printChristmasTree(n, kieu);
// Output 1:

//     *
//    ***
//   *****
//  *******
// *********
//     *

// Input 2:
// printChristmasTree(4, "o");

// Output 2:

//    o
//   ooo
//  ooooo
// ooooooo
//    o
