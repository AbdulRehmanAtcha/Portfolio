import React from "react";
import "./style.css";
import check from "../../images/check.png";
// import html from "../../images/html.png";
// import css from "../../images/css.png";
// import js from "../../images/js.png";
// import boot from "../../images/Bootstrap.png";
// import fb from "../../images/firebase.png";
// import react from "../../images/react.png";
// import express from "../../images/express.jpg";
// import mongo from "../../images/MongoDB.png";

const Skills = () => {
  return (
    <>
      {/* <br  id="Skills" />
      <br />
      <br />
      <br/>
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <div className="skills-head">
        <h2>
          <span>03 </span>My Skills
        </h2>
      </div>
      <br />
      <div className="skills-main-box">
        <div className="skills-box">
          <div className="skills-line">
            <div className="skill">
              <img
                src={check}
                alt="Check"
                style={{ width: "25px", height: "25px" }}
              />
              <h2>HTML</h2>
            </div>
            <div className="skill">
              <img
                src={check}
                alt="Check"
                style={{ width: "25px", height: "25px" }}
              />
              <h2>CSS</h2>
            </div>
          </div>
          <div className="skills-line">
            <div className="skill">
              <img
                src={check}
                alt="Check"
                style={{ width: "25px", height: "25px" }}
              />
              <h2>Bootstrap</h2>
            </div>
            <div className="skill">
              <img
                src={check}
                alt="Check"
                style={{ width: "25px", height: "25px" }}
              />
              <h2>JavaScript</h2>
            </div>
          </div>
          <div className="skills-line">
            <div className="skill">
              <img
                src={check}
                alt="Check"
                style={{ width: "25px", height: "25px" }}
              />
              <h2>Firebase</h2>
            </div>
            <div className="skill">
              <img
                src={check}
                alt="Check"
                style={{ width: "25px", height: "25px" }}
              />
              <h2>ReactJs</h2>
            </div>
          </div>
          <div className="skills-line">
            <div className="skill">
              <img
                src={check}
                alt="Check"
                style={{ width: "25px", height: "25px" }}
              />
              <h2>MongoDB</h2>
            </div>
            <div className="skill">
              <img
                src={check}
                alt="Check"
                style={{ width: "25px", height: "25px" }}
              />
              <h2>ExpressJs</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
