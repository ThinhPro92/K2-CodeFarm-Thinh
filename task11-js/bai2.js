const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];

const table = document.getElementById("dataTable");

let html = `
  <tr>
    <th>ID</th>
    <th>Tên</th>
    <th>Tuổi</th>
    <th>Thành phố</th>
  </tr>
  ${students
    .map(
      (st) => `
    <tr style=" color: rgb(224, 149, 11)">
      <td>${st.id}</td>
      <td>${st.name}</td>
      <td>${st.age}</td>
      <td>${st.city}</td>
    </tr>
  `
    )
    .join("")}
`;

table.innerHTML = html;

// Thêm style bằng JavaScript
table.style.border = "2px solid black";
table.querySelectorAll("th, td").forEach((cell) => {
  cell.style.border = "1px solid gray";
});
