import React, { useContext } from "react";
import "./Howitworks.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import AcademicCalendar from './academicCalendar.pdf';

const Howitworks = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

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
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"1"}
            detail={"Öğrenciler sorular gönderebilir ve bu sorulara verilen yanıtları düzenlemek için iş birliği yapabilir."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"2"}
            detail={"Eğitmenler ayrıca soruları yanıtlayabilir, öğrenci yanıtlarını onaylayabilir."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"3"}
            detail={
              "Eğitmenler yayınlanan herhangi bir içeriği düzenleyebilir veya silebilir."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
    
  );
};

export default Howitworks;
