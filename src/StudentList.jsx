import React from "react";
import { students } from "./data";
import StudentRow from "./StudentRow";

const StudentList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">
        Bảng danh sách sinh viên
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-red-600"></span> Yếu
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span> Trung
          bình
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span> Khá
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-green-600"></span> Giỏi
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-purple-600"></span> Xuất sắc
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 shadow-lg rounded-lg">
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
            {students.map((student) => (
              <StudentRow key={student.id} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
