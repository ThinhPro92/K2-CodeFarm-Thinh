function printPrimeNummber(n) {
  if (typeof n !== "number" || Number.isNaN(n)) {
    console.log("Invalid");
  }
  for (let i = 2; i <= n; i++) {
    checkPrime(i) && console.log(i);
  }
}
function checkPrime(x) {
  for (let i = 2; i < x; i++) {
    let du = x % i;
    if (du === 0) {
      return false;
    }
  }
  return true;
}

printPrimeNummber(10); // 2 3 5 7...
