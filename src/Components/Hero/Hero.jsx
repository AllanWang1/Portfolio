import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.PNG";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="profile-picture-container">
        <img
          className="profile"
          src={profile_img}
          alt="A picture of Allan Wang"
        />
      </div>

      <h1>
        <span>I'm Allan Wang, </span>Third Year Computer Science Student At UBC
      </h1>
      <p>
        I am a third-year Computer Science and Statistics student at UBC with a
        strong passion for creating practical, impactful applications and
        tackling challenges through data-driven solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            href="https://www.linkedin.com/in/ziwei-wang-b489a3222/"
            target="_blank"
          >
            Connect with me
          </a>
        </div>
        <div className="hero-resume">
          <a href="/Portfolio-Vite/CSResume.pdf" target="_blank">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
