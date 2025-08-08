// Viết một hàm để sắp xếp danh sách người dùng theo tên
// Hàm sortUsersByName(users):

// Nhận vào một mảng các object người dùng, mỗi object có thuộc tính fullName.
// Trả về mảng đã được sắp xếp theo thứ tự bảng chữ cái từ a-z của tên.
// Nếu tên của hai người giống nhau, tiếp tục so sánh theo họ và tên đệm (Biết rằng người Việt có tên là 1 từ đơn đứng ở cuối cùng, còn lại toàn bộ các từ trong tên đầy đủ của người Việt được coi là họ và tên đệm).
// Ví dụ:

// Nguyễn Minh Hoàng -> "Hoàng" là tên, "Nguyễn Minh" là họ và tên đệm.
// Nguyễn Thị Thuỳ Linh -> "Linh" là tên, "Nguyễn Thị Thuỳ" là họ và tên đệm.

// Input:
const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];
function sortUsersByName(users) {
  return [...users].sort((a, b) => {
    const iA = a.fullName.lastIndexOf(" ");
    const iB = b.fullName.lastIndexOf(" ");
    let nameA, restA, nameB, restB;
    if (iA === -1) {
      nameA = a.fullName;
      restA = "";
    } else {
      nameA = a.fullName.slice(iA + 1);
      restA = a.fullName.slice(0, iA);
    }

    if (iB === -1) {
      nameB = b.fullName;
      restB = "";
    } else {
      nameB = b.fullName.slice(iB + 1);
      restB = b.fullName.slice(0, iB);
    }

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    if (restA < restB) return -1;
    if (restA > restB) return 1;

    return 0;
  });
}
console.log(sortUsersByName(users));

// Output:
// [
//   { fullName: "Nguyễn Đức Hoàng" }, // Tên: Hoàng, Họ và tên đệm: Nguyễn Đức
//   { fullName: "Nguyễn Minh Hoàng" }, // Tên: Hoàng, Họ và tên đệm: Nguyễn Minh
//   { fullName: "Lê Nin" }, // Tên: Nin
//   { fullName: "Lê Văn Tình" }, // Tên: Tình
//   { fullName: "Lê Văn" }, // Tên: Văn
// ];
