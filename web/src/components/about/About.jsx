import React from "react";
import "./style.css";
const About = () => {
  return (
    <>
      <div className="about-head" id="about">
        <h2><span>02 </span>About Me</h2>
      </div>
      <div className="about-main-box">
        <div className="about-left"></div>
        <div className="about-right">
          <h2>
            Hey, my name is Abdul Rehman. I am 20 years old and from Karachi,
            Pakistan. I am currently studying at the University Of Karachi in
            the field of Software Engineering(BSSE). Since starting in Software
            Engineering, my interest in web development has increased. I started
            HTML and CSS(Basics) on Youtube, but after that, I joined Saylani
            Mass IT Training Program(SMIT) where I learned Web Development in
            detail, more specifically, MERN Stack development. I am open for
            work.
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
