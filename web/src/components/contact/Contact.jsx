import React from "react";
import "./style.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";
import intagram from "../../images/instagram.png";

const Contact = () => {
  return (
    <>
      <div className="contact-head" id="contact">
        <h2><span>05 </span>Contact Me</h2>
      </div>
      <br />
      <div className="contact-content">
        <h2>Have any Query?</h2>
      </div>
      <div className="form-box">
        <form>
          <input type="text" placeholder="Name" />
          <br />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <br />
          <textarea cols="90" rows="6" placeholder="Message"></textarea>
          <br />
          <br />
          <button>Send</button>
        </form>
      </div>
      <br />
      <hr />
      <br />
      <div className="footer">
        <footer>
          <a href="https://github.com/AbdulRehmanAtcha" target="_blank" rel="noreferrer">
            <img
              src={github}
              alt="Github"
              style={{ width: "25px", height: "25px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/abdul-rehman-1b8a69230/" target="_blank" rel="noreferrer">
            <img
              src={linkedin}
              alt="LinkedIn"
              style={{ width: "25px", height: "25px" }}
            />
          </a>
          <a href="https://www.facebook.com/arehman9091" target="_blank" rel="noreferrer">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "25px", height: "25px" }}
            />
          </a>
          <a href="https://www.instagram.com/abdulrehmanzaid/" target="_blank" rel="noreferrer">
            <img
              src={intagram}
              alt="Instagram"
              style={{ width: "25px", height: "25px" }}
            />
          </a>
        </footer>
      </div>
      <br />
    </>
  );
};

export default Contact;
