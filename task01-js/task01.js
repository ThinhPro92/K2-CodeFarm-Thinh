function calcBMI(weight, height) {
  if (Number.isNaN(weight) || Number.isNaN(height)) {
    console.log("chieu cao hoac can nang khong dung kieu du lieu");
  }
  if (weight <= 0 || height <= 0) {
    console.log("chieu cao hoac can nang khong the no hon hoac bang 0");
  }
  let bmi = weight / (height * height);
  switch (true) {
    case bmi < 18.5:
      console.log(`bmi = ${bmi}, thieu can`);
      break;
    case bmi >= 18.5 && bmi < 23:
      console.log(`bmi = ${bmi}, binh thuong`);
      break;
    case bmi >= 23 && bmi < 25:
      console.log(`bmi = ${bmi}, thua can`);
      break;
    default:
      console.log(`bmi = ${bmi}, beo phi`);
  }
}
const w = Number(prompt("Moi nhap vao can nang (kg)"));
const h = Number(prompt("Moi nhap vao chieu cao (met)"));

calcBMI(w, h); // "BMI = 20.76, Bình thường"
