function printSquareNumber(n) {
  for (let i = 2; i * i <= n; i++) {
    console.log(i * i);
  }
}
// so chinh phuong la so cos can bac 2 cua chinh no
let n = Number(prompt("Nhap vao so nguyen n:"));
printSquareNumber(n);
