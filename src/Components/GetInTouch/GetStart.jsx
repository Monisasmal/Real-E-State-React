import React from "react";
import "./GetStart.css";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";


const GetStart = () => {
  return (
    <section className="g-wrapper">
      <div className="padding g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Happy Home</span>
          <span className="secondaryText">
            Subscribe and Find Super attractive price quotes From <br /> Find
            your Residence Soon
          </span>
          <button className="button">
            <a href="mailto:manaswinisasmal5597@gmail.com">Get Started</a>
          </button>
          <div className = "SocialMediaIcons">
                <a className = "SocialMediaIcon" href= "https://www.linkedin.com/in/manaswini-sasmal-b77a21162/" target="_blank" ><FaLinkedin /></a>
                <a className = "SocialMediaIcon" href= "https://manaswini-portfolio.vercel.app/" target="_blank"><GoMail /></a>
        </div>
                <div className="copyRight">
                    @{new Date().getFullYear()} Manaswini Sasmal. All rights reserved.
                </div>
        </div>
      </div>
    </section>
  );
};

export default GetStart;
