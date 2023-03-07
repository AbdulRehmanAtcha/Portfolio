import React from "react";
import "./style.css";
import eye from "../../images/eye.png";
import textutils from "../../images/textutils.jpg";
import weather from "../../images/weather.png";
import coding from "../../images/coding.png";

const Project = () => {
  return (
    <>
      {/* <br id="Projects" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <div className="project-head">
        <h2>
          <span>04 </span>My Projects
        </h2>
      </div>
      <br />
      <div className="project-main">
        <div className="project">
          <div className="box">
            <img src={weather} alt="" />
            <div className="overlay">
              <h1>Live Weather App</h1>
            </div>
          </div>
          <div className="buttons">
            <a href="/" title="Live View">
              <img
                src={eye}
                style={{ width: "30px", height: "30px" }}
                alt="Live View"
              />
            </a>
            <a href="/">
              <img
                src={coding}
                style={{ width: "30px", height: "30px" }}
                alt="Live View"
              />
            </a>
          </div>
        </div>
        <div className="project">
          <div className="box">
            <img src={textutils} alt="" />
            <div className="overlay">
              <h1>Textutils App</h1>
            </div>
          </div>
          <div className="buttons">
            <a href="/" title="Live View">
              <img
                src={eye}
                style={{ width: "30px", height: "30px" }}
                alt="Live View"
              />
            </a>
            <a href="/">
              <img
                src={coding}
                style={{ width: "30px", height: "30px" }}
                alt="Live View"
              />
            </a>
          </div>
        </div>
        <div className="project">
          <div className="box">
            <img src={textutils} alt="" />
            <div className="overlay">
              <h1>Textutils App</h1>
            </div>
          </div>
          <div className="buttons">
            <a href="/" title="Live View">
              <img
                src={eye}
                style={{ width: "30px", height: "30px" }}
                alt="Live View"
              />
            </a>
            <a href="/">
              <img
                src={coding}
                style={{ width: "30px", height: "30px" }}
                alt="Live View"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
