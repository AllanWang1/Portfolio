import React from "react";
import "./About.css";
import profile_img from "../../assets/allan_bridge.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I am Allan, I am a fourth-year Computer Science and
              Statistics student at UBC. I am passionate about both fields of study and
              I enjoy applying my knowledge in real-world problems.
            </p>
            <p>
              I enjoy working on projects that are impactful and challenging. I 
              have experience in embedded software engineering, web development, 
              infotainment applications, and data analysis. 
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h3>2 Times Dean's Honour List</h3>
          <p>&bull; Cumulative average: 91%.</p>
          <p>&bull; A+ standings in all computer science courses.</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h3>Trek Excellence Scholarship Receiver</h3>
          <p>&bull; Top 5% of first year students in the Faculty of Science.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
