import React from "react";

const StudentRow = ({ student }) => {
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
        return "text-red-600";
      case "Trung bình":
        return "text-orange-500";
      case "Khá":
        return "text-blue-600";
      case "Giỏi":
        return "text-green-600";
      default:
        return "text-purple-600";
    }
  };

  const title = averageScore(student.score);

  return (
    <tr className="text-center hover:bg-gray-50">
      <td className="border px-4 py-2">{student.id}</td>
      <td className="border px-4 py-2">{student.fullName}</td>
      <td className="border px-4 py-2">{student.gender}</td>
      <td className="border px-4 py-2">{student.age}</td>
      <td className="border px-4 py-2">{student.major}</td>
      <td className="border px-4 py-2">{student.score}</td>
      <td className={`border px-4 py-2 font-semibold ${getColor(title)}`}>
        {title}
      </td>
    </tr>
  );
};

export default StudentRow;
