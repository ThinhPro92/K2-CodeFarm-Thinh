function calcBMI(weight, height) {
  bmi = weight / (height * height);
  console.log("BMI cua ban la: " + bmi.toFixed(2));
  if (bmi < 18.5) {
    console.log("gay vl");
  } else if (bmi >= 18.5 && bmi <= 20.76) {
    console.log("Bình thường");
  } else {
    console.log("an it thoi");
  }
  return;
}

calcBMI(60, 1.7);
