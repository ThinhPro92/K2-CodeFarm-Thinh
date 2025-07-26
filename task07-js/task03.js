// Input
const students = [
  { name: "An", scores: [8, 7.5, 9] },
  { name: "Bình", scores: [6, 5.5, 7] },
  { name: "Chi", scores: [9, 9.5, 10] },
];
function diemTb(students) {
  return students.map((student) => {
    let diemTrungBinh = 0;
    for (let i = 0; i < student.scores.length; i++) {
      diemTrungBinh += student.scores[i];
    }
    diemTrungBinh = diemTrungBinh / student.scores.length;
    return {
      name: student.name,
      average: Math.round(diemTrungBinh * 10) / 10,
    };
  });
}
console.log(diemTb(students));
// Output mong muốn
// [
//   { name: "An", average: 8.2 },
//   { name: "Bình", average: 6.2 },
//   { name: "Chi", average: 9.5 },
// ];
