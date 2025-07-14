// Input:
function isTriangle() {
  let a = Number(prompt("Nhap vao canh a:"));
  let b = Number(prompt("Nhap vao canh b:"));
  let c = Number(prompt("Nhap vao canh c:"));
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("a, b, c khong hop le");
    return;
  }
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Chuan tam giac");
  } else {
    console.log("Deck phai tam giac");
  }
}
isTriangle();
