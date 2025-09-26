import React from "react";
import Header from "./Header.jsx";
import StudentList from "./StudentList.jsx";
import Footer from "./Footer.jsx";
import OutStandingStudent from "./OutStandingStudent.jsx";
import "./index.css";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <OutStandingStudent />
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-6">
        <StudentList />
      </main>

      <Footer />
    </div>
  );
};
export default App;
