import React from "react";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import dataa from "./data";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <div>
      <MyNavbar />

      <CourseCard data={dataa} />
      {/* tagin yaninda yazilanlar property key gibi olur, ve hep object gönderir */}
      <Footer />
    </div>
  );
}

export default App;
