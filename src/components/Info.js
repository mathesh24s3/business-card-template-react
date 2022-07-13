import React from "react";
import "../styles/info.css";
import suriya from "../images/suriya.jpg";
import LinkedIn from "../images/linkedin.png";
import Email from "../images/Mail.png";

function Info() {
  return (
    <div className="info">
      <img className="profile-pic" src={suriya} />
      <h4 className="name">Suriya Sivakumar</h4>
      <p className="role">Frontend Developer</p>
      <a href="https://twitter.com/Suriya_offl">suriya.website</a>
      <div className="info--btns">
        <div className="email-btn">
          <img src={Email} />
          <button>Email</button>
        </div>
        <div className="linkedin-btn">
          <img src={LinkedIn} />
          <button>LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
