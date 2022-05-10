import React from 'react'
import './about.css'
import SocialContact from "../../common/social-contact"
import "./about.css"

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          Zhou Liu.<br /> Seeking for jobs as <span className="info-name">software engineer</span>!
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png")}
            className="picture"
            alt="description"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About