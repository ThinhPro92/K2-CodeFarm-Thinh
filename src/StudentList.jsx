import React from "react";
import { students } from "./data";
const StudentList = () => {
  const averageScore = (score) => {
    if (score < 3) return "Yếu";
    if (score >= 3 && score < 6) return "Trung bình";
    if (score >= 6 && score <= 8) return "Khá";
    if (score > 8 && score < 9.5) return "Giỏi";
    if (score >= 9.5 && score <= 10) return "Xuất sắc";
  };
  const getColor = (average) => {
    switch (average) {
      case "Yếu":
        return "red";
      case "Trung bình":
        return "Orange";
      case "Khá":
        return "blue";
      case "Giỏi":
        return "green";
      default:
        return "Purple";
    }
  };
  return (
    <div>
      {/* Tiêu đề */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        Bảng danh sách sinh viên
      </h1>

      {/* Bảng danh sách */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Mã sinh viên</th>
              <th className="border px-4 py-2">Họ và tên</th>
              <th className="border px-4 py-2">Giới tính</th>
              <th className="border px-4 py-2">Tuổi</th>
              <th className="border px-4 py-2">Chuyên ngành</th>
              <th className="border px-4 py-2">Điểm trung bình</th>
              <th className="border px-4 py-2">Danh hiệu</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => {
              return (
                <tr key={item.id} className="text-center hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.fullName}</td>
                  <td className="border px-4 py-2">{item.gender}</td>
                  <td className="border px-4 py-2">{item.age}</td>
                  <td className="border px-4 py-2">{item.major}</td>
                  <td className="border px-4 py-2">{item.score}</td>
                  <td
                    className="border px-4 py-2 font-semibold"
                    style={{ color: getColor(averageScore(item.score)) }}
                  >
                    {averageScore(item.score)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentList;
