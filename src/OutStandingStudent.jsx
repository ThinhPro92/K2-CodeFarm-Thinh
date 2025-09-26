import React from "react";
import { students } from "./data";

const OutStandingStudent = () => {
  const scoreStudent = [...students].sort((a, b) => b.score - a.score);
  const topStudent = scoreStudent[0];
  return (
    <div className="bg-yellow-100 text-yellow-900 p-4 rounded-xl shadow-md my-4">
      <h2 className="text-xl font-bold mb-2">
        Sinh viên có điểm trung bình cao nhất:
      </h2>
      <p>
        <strong>{topStudent.fullName} </strong>
        <span className="font-semibold">
          - Điểm trung bình: {topStudent.score}
        </span>
      </p>
    </div>
  );
};
export default OutStandingStudent;
