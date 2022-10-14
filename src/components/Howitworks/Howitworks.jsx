import React, { useContext } from "react";
import "./Howitworks.css";
import { themeContext } from "../../Context";
import AcademicCalendar from './academicCalendar.pdf';

const Howitworks = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="howitworks" id="howitworks">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>How the platform</span>
        <span>works</span>
        <spane>
          It is a platform that aims to efficiently answer questions and 
          <br />
          answers from academics and students.
        </spane>
        <a href={AcademicCalendar} download>
          <button className="button s-button">Download AC</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}

      <div className="cards">
        Right Section
      
      </div>
    </div>
    
  );
};

export default Howitworks;
