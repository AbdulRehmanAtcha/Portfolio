import React from "react";
import "./style.css";
import Typed from "react-typed";

const Home = () => {
  return (
    <div id="Home">
      <div className="home-main-box">
        <div className="home-left">
          <Typed
            strings={["👋 Hello"]}
            typeSpeed={100}
            showCursor={false}
            style={{
              color: "aliceblue",
              fontSize: "30px",
              fontFamily: "Shantell Sans, cursive",
            }}
          />
          <br />
          <Typed
            strings={["🤗 I am Abdul Rehman"]}
            typeSpeed={100}
            startDelay={1100}
            showCursor={false}
            style={{
              color: "aliceblue",
              fontSize: "30px",
              fontFamily: "Tilt Neon, cursive",
            }}
          />
          <br />
          <Typed
            strings={["💻 I am Web Developer"]}
            typeSpeed={100}
            startDelay={3900}
            showCursor={false}
            style={{
              color: "aliceblue",
              fontSize: "30px",
              fontFamily: "Tilt Neon, cursive",
            }}
          />
          <br />
          <br />
          <div className="buttons">
            <button>About Me</button>
            <button>Download CV</button>
          </div>
        </div>
        <div className="home-right">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
